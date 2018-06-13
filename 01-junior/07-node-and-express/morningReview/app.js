const express = require('express')
const morgan = require('morgan');
const todoBank = require('./db')
const layout = require('./views/layout');
const listTodos = require('./views/todos');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.redirect('/todos');
})

app.get('/todos', (req, res, next) => {
   const todos = todoBank.list();
   res.send(layout(listTodos(todos)))
})

app.listen(3000, () => {
  console.log('Listening impatiently on port 3000');
})

