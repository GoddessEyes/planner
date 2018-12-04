const express = require("express");
const bodyParser = require("body-parser");
const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

const crypto = require("crypto");

const app = express();
const cors = require("cors");
const config = require("./config.js");
const database = require("./db.json");

const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.json());
app.use(cors());

const start = async function() {
  const adapter = new FileAsync("db.json");
const db = await low(adapter);

//  Добавление заданий  //

app.post("/add", urlencodedParser, (req, res) => {
  JSON.stringify(req.body);
  console.log(req.body);
  console.log(`Было добавлено задание: ${req.body.title} = ${req.body.des}`);

  res.send("Добавлено задание");
  db.get("task")
    .push({ title: req.body.title, des: req.body.des, idPost: crypto.randomBytes(10).toString("hex") })
    .write();
  
});

//

//  Удаление заданий   //

app.post("/del", urlencodedParser, (req, res) => {
  JSON.stringify(req.body);
  if(!req.body) return console.log("хуй")
  console.log(req.body);
  console.log(`Задание удалено ID: ${req.body.id}`);
  res.send("Задание удалено ");

  db.get("task")
    .remove({ idPost: req.body.id })
    .write();
});

//

//  Задание выполнено   //

app.post("/success", urlencodedParser, (req, res) => {
  JSON.stringify(req.body);
  console.log(`Задание добавленно в выполненые: ${req.body.id}`);
  res.send("Задание добавленно в выполненые");

  const findPost = db.get("task").find({ idPost: req.body.id }).value();
  console.log(findPost);

  db.get("success")
    .push({ title: findPost.title, des: findPost.des, idPost: findPost.idPost })
    .write();

  db.get("task")
    .remove({ idPost: req.body.id })
    .write();
});

//


app.get("/task", urlencodedParser, (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(req.body);
  res.json(db.get("task"));
});

app.get("/success", urlencodedParser, (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(req.body);
  res.json(db.get("success"));
});


//  Запуск сервера  //
app.listen(config.PORT, () => {
  console.log(`Мы живём на порту:${config.PORT} CTRL+C для остановки сервера`);
});
}

start();