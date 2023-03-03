/**
 * Service
 */
const { findOneAndDelete, findByIdAndDelete } = require("./todo.model");
const Todo = require("./todo.model");

async function createOne(data) {
  const todo = new Todo();
  todo.name = data.name;
  todo.content = data.content;
  try {
    todo.save();
    return console.log("todo created");
  } catch (err) {
    console.error(err);
    return null;
  }
}
async function findAll() {
  return Todo.find();
}
async function deleteOne(id) {
  try {
    return findByIdAndDelete(id);
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = {
  createOne,
  findAll,
  deleteOne,
};
