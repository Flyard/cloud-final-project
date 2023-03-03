/**
 * API Server
 */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const todoController = require("./todo/todo.controller");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/todo", todoController);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to Mongo Database");
  app.listen(port, () => {
    console.log(
      `API listening on port ${port}, visit http://localhost:${port}/`
    );
  });
}

main();
//test
