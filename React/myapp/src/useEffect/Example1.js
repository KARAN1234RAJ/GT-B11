import React, { useEffect, useState } from "react";
const Example1 = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Hii");
    let handleEvent = () => {
      console.log("Event", value);
    };
    document.addEventListener("click", handleEvent);
    return () => {
      console.log("Hello");
      document.removeEventListener("click", handleEvent);
    };
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Number: {number}</h1>
      <h1>Value: {value}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </div>
  );
};

export default Example1;
