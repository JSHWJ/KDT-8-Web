function App() {
  //jsx는 최상위 요소에 반드시 부모 요소가 필요함
  // const flag = false;
  // let txt = "";

  // if (flag) {
  //   txt = "true입니다";
  // } else {
  //   txt = "false입니다";
  // }

  // const style = {
  //   backgroundColor: "red",
  // };
  // let cal = "";
  // if (3 + 5 == 8) {
  //   cal = "정답입니다!";
  // } else {
  //   cal = "오답입니다!";
  // }
  // let name = "야옹이";
  // let animal = "고양이";
  // const flag = 3 + 5;
  // const text = {
  //   backgroundColor: "#FADCA5",
  //   color: "brown",
  //   textAlign: "center",
  // };
  // const input = {
  //   display: "flex",
  //   justifyContent: "center",
  // };
  const all = {
    display: "flex",
    flexDirection: "row",
  };

  const red = {
    backgroundColor: "red",
    width: "5vh",
    height: "5vh",
  };
  const orange = { backgroundColor: "orange", width: "5vh", height: "10vh" };
  const yellow = { backgroundColor: "yellow", width: "5vh", height: "15vh" };
  const green = { backgroundColor: "green", width: "5vh", height: "20vh" };
  const blue = { backgroundColor: "blue", width: "5vh", height: "25vh" };
  const navy = { backgroundColor: "navy", width: "5vh", height: "30vh" };
  const purple = { backgroundColor: "purple", width: "5vh", height: "35vh" };
  return (
    <>
      {/* <h1 style={{ backgroundColor: "black", color: "white" }}>
        hello react!!
      </h1>
      <div style={style}>리액트 시작</div>
      <input type="text" />
      <div>{flag ? <h1>true 입니다</h1> : <h1>false 입니다</h1>}</div>
      <div>{txt}</div> */}
      {/* <div>
        이것은 div 입니다.<h3>이것은 div 안에 있는 h3 태그입니다.</h3>
      </div>
      <div>{flag === 8 ? <h1>정답입니다!</h1> : <h1>false 입니다</h1>}</div> */}
      {/* <div style={text}>
        <h1>Hello World</h1>
      </div>
      <div style={input}>
        아이디 :
        <input type="text" />
      </div>

      <div style={input}>
        비밀번호 :
        <input type="text" />
      </div> */}
      <div style={all}>
        <div style={red}></div>
        <div style={orange}></div>
        <div style={yellow}></div>
        <div style={green}></div>
        <div style={blue}></div>
        <div style={navy}></div>
        <div style={purple}></div>
      </div>
    </>
  );
}

export default App;
