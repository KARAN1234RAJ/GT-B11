import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(5);
  useEffect(() => {
    console.log("No dependency");
  });
  useEffect(() => {
     console.log("Empty dependency");
   }, []);
  useEffect(() => {
    console.log("count dependency");
  }, [count]);
  useEffect(() => {
    console.log("value dependency");
  }, [value]);

  return (
    <div>
      <h1>Counter:{count}</h1>
      <h1>Value: {value}</h1>
      <button onClick={() => setCount(count + 1)}>IncreaseCount</button>
      <button onClick={() => setCount(count - 1)}>decreaseCount</button>
      <button onClick={() => setValue(value + 1)}>Increase Value</button>
      <button onClick={() => setValue(value - 1)}>Decrease Value</button>
    </div>
  );
};

export default Counter;
