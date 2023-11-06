import React, { useState, useCallback } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ChildComponent onClick={incrementCount} />
      <p>Count: {count}</p>
    </>
  );
}

function ChildComponent({ onClick }) {
  console.log("child component render");
  return <button onClick={onClick}>Increment Count</button>;
}
