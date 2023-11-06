import { useState } from "react";

export default function CounterFunc() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>number</h1>
      <button onclick={handleIncrement}>증가</button>
      <button onclick={handleDecrement}>감소</button>
    </div>
  );
}
