console.log("Web servarni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 Kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code
// 3Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.post("/create-item", (req, res) => {
  console.log("Habar keldi:", req.body);
  res.json({ Javob: "muofaqiyatli" });
});

// app.get("/gift", function (req, res) {
//   res.end("<h1>Siz sovg'alar bo'limidasiz</h1>");
// });

app.get("/", function (req, res) {
  res.render("reja");
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The servwr is running successhully on port: ${PORT}, http://localhost:${PORT}`
  );
});
