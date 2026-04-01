"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.getTodo = getTodo;
exports.getTodos = getTodos;
exports.removeTodo = removeTodo;
exports.updateTodo = updateTodo;
const node_console_1 = require("node:console");
let TODOS = [];
function addTodo(text) {
    const newTodo = { id: Math.random(), text };
    TODOS.push(newTodo);
    return newTodo;
}
function getTodo(id) {
    const todo = TODOS.find((t) => t.id === id);
    if (!todo) {
        throw (0, node_console_1.error)('Todo not found!!!');
    }
    return todo;
}
function getTodos() {
    return TODOS;
}
function removeTodo(id) {
    TODOS = TODOS.filter((t) => t.id === id);
}
function updateTodo(id, text) {
    const todo = getTodo(id);
    todo.text = text;
    return todo;
}
