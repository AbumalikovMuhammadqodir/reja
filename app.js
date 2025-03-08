console.log("Web servarni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

//Mongo db chaqiish
const db = require("./server").db();
const mongodb = require("mongodb");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// MongoDB connect

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code
// 3Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.post("/create-item", function (req, res) {
  console.log("User entered /create-item");
  const new_reja = req.body.reja; // 5 step  req.body ichida frontentdan kelgan malumotni new_reja vrablega tenglayapmiz

  db.collection("plans").insertOne({ reja: new_reja }, function (err, data) {
    // 6 step data bazadagi "plans degan collectionga infert on  metodi orqali malimotni qo'shyapmiz
    if (err) {
      console.error("Xatolik yuz berdi:", err); // data bazaga qo'shishda hatolik kelib chiqsa (Ichki server xatosi) yozuvini yuboradi
      return res.status(500).json({ error: "Ichki server xatosi" });
    }

    console.log(data);
    res.json({ _id: data.insertedId, reja: new_reja });
  }); // 7 step malumot data bazaga qo'shilsa q'shilgan malumotni fornt an ga yuboryapti
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;

  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  console.log("nimadur", req.body.delete_all);
  if (req.body.delete_all) {
    console.log("nimadur", req.body.delete_all);
    db.collection("plans").deleteMany({}, function (err, result) {
      if (err) {
        return res.json({ state: "Hatolik bo'ldi" });
      }

      res.json({ state: "hamma rejalar ochirildi" });
    });
  }
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wromg");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
