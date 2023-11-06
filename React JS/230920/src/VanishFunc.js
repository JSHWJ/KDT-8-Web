import { useState } from "react";

export default function VanishFunc() {
  const [status, setStatus] = useState({ text: "안녕하세요" });

  const setVanished = () => {
    setStatus({ text: "" });
  };

  return (
    <div>
      <h1>{status.text}</h1>
      <button onClick={setVanished}>사라져라</button>
    </div>
  );
}
