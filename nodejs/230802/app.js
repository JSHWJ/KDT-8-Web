const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/views", express.static(path.join(__dirname, "views")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//multer setting
const upload = multer({
  //dest: 업로드 할 파일을 저장할 경로를 지정
  dest: "uploads/",
});
// Body Parsing 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadDetail = multer({
  //storage: 저장할 공간에 대한 정보
  //diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const name = req.body.id;
      done(null, name + ext);
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

//router
app.get("/", (req, res) => {
  //res.send("Hello express");
  res.render("signup");
});

//싱글
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render("result", {
    userInfo: req.body,
    userProfile: req.file,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
  