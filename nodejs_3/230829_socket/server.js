const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;

//http 서버
const server = http.createServer(app);
//socket 서버
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

///////////소켓 , 이벤트 받는 건 on이라고 합니다^^
io.on("connection", (socket) => {
  socket.on("message", (data) => {
    console.log("client:", data);

    if (data == "hello") {
      socket.emit("response", "hello: 안녕하세요.");
    } else if (data == "study") {
      socket.emit("response", "study: 공부합시다!");
    } else if (data == "bye") {
      socket.emit("response", "bye: 잘 가~");
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

//서버 오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
