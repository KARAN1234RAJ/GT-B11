import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  function incCounters() {
    console.log("incCounters");
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Current Value: {count}</h2>

      <button onClick={incCounters}>Inc</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Dec
      </button>
    </div>
  );
};

export default Counter;
