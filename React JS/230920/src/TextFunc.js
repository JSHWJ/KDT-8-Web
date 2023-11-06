import { useState } from "react";

export default function TextFunc() {
  const [status, setStatus] = useState({
    text: "검정색 글씨",
    color: "black",
  });

  const changeRed = () => {
    setStatus({ text: "빨간색 글씨", color: "red" });
  };

  const changeBlue = () => {
    setStatus({ text: "파란색 글씨", color: "blue" });
  };

  return (
    <div>
      <h1 style={status}>{status.text}</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
}
