const Todo = require("../models/Todo");

module.exports = {
  // Creating a new TODO
  createTodo: (req, res) => {
    const { title, description } = req.body;
    const todo = new Todo({ title, description });
    todo
      .save()
      .then((result) => {
        return res.status(201).json({
          success: true,
          message: "Todo Created SuccessFully!",
          todo: result,
        });
      })
      .catch((err) => {
        return res.json(400).json({
          success: false,
          message: "Something went wrong, Please try again.",
          error: err,
        });
      });
  },
  // Reading all todos in DB
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      return res.status(200).json({
        success: true,
        message: "Todo fetched successfully!",
        todos,
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong!",
        error: e,
      });
    }
  },
  // Reading todo using an ID
  getTodoById: async (req, res, next, id) => {
    Todo.findById(id, (err, todo) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Something went wrong!",
          error: err,
        });
      }
      req.todo = todo;
      next();
    });
  },
  // Responding with todo by id
  getTodo: (req, res) => {
    if (req.todo) {
      return res.status(200).json({
        success: true,
        message: "Todo fetch successFully!",
        todo: req.todo,
      });
    }
  },
  // Deleting todo with id
  removeTodo: (req, res) => {
    const { todo } = req;
    todo.remove((err, todo) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Something went wrong!",
          todo,
        });
      }
      return res.status(200).json({
        success: true,
        message: "Todo deleted successfully!",
        todo,
      });
    });
  },
};
