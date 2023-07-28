const express = require("express");
//import express from 'express'; || import 방법임

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("/image", "./image");

app.use("views", express.static(__dirname + "/views"));
app.use("/image", express.static(__dirname + "/image"));

app.get("/", (req, res) => {
  res.render("web");
});
app.get("/fruit", (req, res) => {
  res.render("fruit");
});
app.get("/larvar", (req, res) => {
  res.render("larvar");
});
app.get("/cal", (req, res) => {
  res.render("cal", { data: [2, 3, 4, 5, 6, 7, 8, 9] });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
