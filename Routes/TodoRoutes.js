const express = require("express");
const {
  createTodo,
  getAllTodos,
  getTodo,
  getTodoById,
  removeTodo,
} = require("../controllers/Todo");

const router = express.Router();

router.param("todoId", getTodoById);

router.post("/todo", createTodo);
router.get("/todo", getAllTodos);
router.get("/todo/:todoId", getTodo);
router.delete("/todo/:todoId", removeTodo);

module.exports = router;
