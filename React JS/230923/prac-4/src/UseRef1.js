import { useRef } from "react";

const UseRef1 = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭 시 input 에 focus 처ㄹㅣ</p>

      <input ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </>
  );
};

export default UseRef1;
