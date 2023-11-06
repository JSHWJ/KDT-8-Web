import { useState, useEffect } from "react";

function MyComponent(props) {
  const { number } = props;
  const { text, setText } = useState("");

  useEffect(() => {
    console.log("항상 실행됩니다");
  });

  useEffect(() => {
    console.log("생성될 때 실행됩니다");

    return () => {
      console.log("제거 될 때 실행됩니다.");
    };
  }, []);

  useEffect(() => {
    console.log("state가 변경 될 때 실행됩니다");
  }, [text]);

  return (
    <>
      <div>My Component {number}</div>
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(() => number + 1);
  };

  const changevisibleState = () => {
    setVisible(() => !visible);
  };

  return (
    <>
      <button onClick={this.changeNumberState}>PLUS</button>
      <button onClick={this.changevisibleState}>ON/OFF</button>
      {visibe && "컴포넌트 생성"}
    </>
  );
}
