"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const buttonPressed = () => {
    const newCount = count + 1;
    sendGAEvent("event", "counting", { count: newCount });
    setCount(newCount);
  };

  return (
    <main>
      This is a subpage that doesn't really have anything.
      <p>But it does have...</p>
      <button onClick={buttonPressed}>A BUTTON</button>
    </main>
  );
}
