const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.use(cookieParser());

app.get("/", (req, res) => {
  // 쿠키 설정
  res.cookie("username", "johndoe", { maxAge: 900000, httpOnly: true });

  res.send("쿠키 설정 완료");
});

app.get("/destroy", (req, res) => {
  res.clearCookie("username"); // 쿠키 제거
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
