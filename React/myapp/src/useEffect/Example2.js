import React, { useState, useEffect } from "react";

const Example2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Hi");
    const intervalId = setInterval(() => {
      console.log("setInterval", count);
    }, 3000);
    return () => {
      console.log("Goodbye");
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Example2;
