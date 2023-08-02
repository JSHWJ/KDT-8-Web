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
  res.render("index");
});
//ajax
app.get("/ajax", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});
app.post("/ajax", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});
//axios
app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});
app.post("/axios", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});
app.get("/fetch", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});
app.post("/fetch", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});

//#######
app.get("/get", (req, res) => {
  res.render("get");
});

app.get("/result", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
