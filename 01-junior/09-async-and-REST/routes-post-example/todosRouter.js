const express = require('express');
const router = express.Router();

const todoBank = require('./db')

const layout = require('./views/layout');
const listTodos = require('./views/todos');
const singleTodo = require('./views/todo');
const notFound = require('./views/notFound');
const newTodo = require('./views/newTodo')

router.get('/', (req, res, next) => {
  const todos = todoBank.list();
  res.send(layout(listTodos(todos)))
})

router.get('/add', (req, res, next) => {
 res.send(layout(newTodo()))
})

router.get('/:id', (req, res, next) => {
 const todo = todoBank.get(req.params.id);
 if (todo) res.send(layout(singleTodo(todo)));
 else {
   res.status(404);
   res.send(layout(notFound()));
 }
})

router.post('/', (req, res, next) => {
  console.log('req.body', req.body);
  todoBank.add(req.body);
  const todos = todoBank.list();
  res.send(layout(listTodos(todos)))
})

module.exports = router;
