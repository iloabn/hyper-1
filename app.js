import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
app.use(cors());

const mongoDBClient = new MongoClient("mongodb://localhost:27017");

const connectDb = async () => {
    await mongoDBClient.connect();
    return mongoDBClient.db("recap").collection("moods");
}

app.get('/', (req, res) => {
    res.send("Hello friend!");
});

app.get('/moods', async (req, res) => {
    const collection = await connectDb();

    const allMoods = await collection.find({}).toArray();

    res.send(allMoods);
});

app.post('/mood/:moodName', async (req, res) => {

    const { moodName } = req.params;

    const collection = await connectDb();

    const existingOne = await collection.findOne({ name: moodName });

    if (existingOne) {
        const newCount = existingOne.count + 1;
        await collection.updateOne({ name: moodName },
            { $set: { count: newCount } })
    } else {
        await collection.insertOne({ name: moodName, count: 1 });
    }
    res.status(201).send(`We have recorded that you are ${moodName}`)
});

app.listen(3000, () => {
    console.log("I hear everything");
});
