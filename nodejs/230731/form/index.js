const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("views", express.static(__dirname + "/views"));

//router
app.get("/", (req, res) => {
  //res.send("Hello express");
  res.render("index", { title: "폼 실습" });
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
    //userInfo: {id:'',pw:''}
  });
});

app.get("/p1_home", (req, res) => {
  //res.send("Hello express");
  res.render("p1_get", { title: "get으로 정보받기" });
});

app.get("/p1", (req, res) => {
  console.log(req.query);
  res.render("get_result", {
    userInfo: req.query,
  });
});

app.get("/p2_home", (req, res) => {
  //res.send("Hello express");
  res.render("p2_post", { title: "post로 정보받기" });
});

app.post("/p2", (req, res) => {
  console.log(req.body);
  res.render("post_result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
    //userInfo: {id:'',pw:''}
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    userInfo: req.body,
    //userInfo: {id:'',pw:''}
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
