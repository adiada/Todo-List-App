const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoList = new Schema({
    item: {
        type:String,
        required: true
    },
},{timestamps:true});

const Todo = mongoose.model('todo',todoList);
module.exports = Todo;