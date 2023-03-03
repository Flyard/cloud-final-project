/**
 * Controller
 */
const router = require("express").Router();
const todoService = require("./todo.service");

router.get("/", async (req, res) => {
  return res.status(200).send(await todoService.findAll());
});

router.post("/", async (req, res) => {
  console.log(req.body);
  return res.status(200).send(await todoService.createOne(req.body));
});

router.delete("/:id", async (req, res) => {
  return res.status(200).send(await todoService.deleteOne(req.params.id));
});

module.exports = router;
