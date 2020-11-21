const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodoSchema = new Schema({
    title: String,
    description: String,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;

