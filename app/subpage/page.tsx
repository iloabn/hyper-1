"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const buttonAction = () => {
    const newCount = count + 1;
    window.gtag("event", "hope", { clicks: newCount });
    setCount(newCount);
  };
  return (
    <main>
      This is a subpage that doesn't really have anything.
      <button onClick={buttonAction}>PRESS ME</button>
    </main>
  );
}
