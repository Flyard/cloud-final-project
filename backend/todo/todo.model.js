/**
 * Model
 */
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: String,
  content: String,
});

const Todo = mongoose.model("todos", todoSchema);
module.exports = Todo;
