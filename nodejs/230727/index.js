//const mod = require("./module.js");
//console.log(mod);

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  //console.log("localhost:8000포트로 실행");
  //response.writeHead(200);
  //response.write("<h1>Hello world</h1>");
  //response.end("<p>End</p>");

  try {
    const data = fs.readFileSync("./index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
    response.writeHead(404);
    response.end(error.message);
  }
});

server.listen(8080, function () {
  console.log("localhost:8080포트로 실행");
});
