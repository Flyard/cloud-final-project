/**
 * Service
 */

const Todo = require("./todo.model");

async function findAll() {
  return Todo.find();
}
async function createOne(data) {
  const todo = new Todo();
  todo.name = data.name;
  todo.content = data.content;
  try {
    todo.save();
    console.log("Todo added");
    return todo;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function deleteOne(id) {
  try {
    return Todo.findByIdAndDelete(id);
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
