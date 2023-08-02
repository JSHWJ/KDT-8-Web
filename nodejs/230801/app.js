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

app.get("/", (req, res) => {
  res.render("login");
});
app.post("/axios", (req, res) => {
  console.log("back", req.body);
  const id = "shw108203";
  const pw = "1234";
  res.send({ success: req.body.id === id && req.body.pw === pw });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
