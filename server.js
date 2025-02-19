console.log("Web servarni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extende: true }));

// 2 Session code
// 3Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.get("/hello", function (req, res) {
  res.end("<h1>Hello World</h1>");
});

app.get("/gift", function (req, res) {
  res.end("<h1>Siz sovg'alar bo'limidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The servwr is running successhully on port: ${PORT}`);
});
