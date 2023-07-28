const express = require("express");
//import express from 'express'; || import 방법임

const app = express();
const PORT = 8000;

//뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views"); //이게 더 맞는 방법임
app.set("image", "./image");

//정적인 파일 불러오기
app.use("views", express.static(__dirname + "/views"));
app.use("/image", express.static(__dirname + "/image"));

app.get("/", (req, res) => {
  //send() 클라이언트에 응답 데이터를 보낼 때
  //res.send("Hello express");
  //res.send({ result: true, code: 1              000, message: "회원가입에 성공하였습니다." });

  //render() 뷰 엔진 렌더링
  res.render("test", { data: "martin" });
});
app.get("/larvar", (req, res) => {
  res.render("larvar");
});
app.get("/fruit", (req, res) => {
  res.render("fruit");
});
app.get("/cal", (req, res) => {
  res.render("cal", { data: [2, 3, 4, 5, 6, 7, 8, 9] });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
