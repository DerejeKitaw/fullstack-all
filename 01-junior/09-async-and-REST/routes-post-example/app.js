const express = require('express')
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const todosRouter = require('./todosRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/todos', todosRouter);

app.get('/', (req, res, next) => {
  res.redirect('/todos');
})

app.listen(3000, () => {
  console.log('Listening impatiently on port 3000');
})

