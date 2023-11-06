



const [count, setCount] = useState<number | string>("");
const myInput = useRef<HTMLInputElement>(null);

const handleFocus = () => {
  myInput.current?.focus();
};

const onClick = (e: React.MouseEvent<HTMLElement>) => {};

return (
  <>
    <h2>Hello {name}</h2>
    <h4>{age}</h4>
    <input ref={myInput} />
    <button onCLick={handleFocus}>버튼</button>
    <form action="">
      <button onClick={(e) => onClick(e)}>제출</button>
    </form>
  </>
);
};