/* SERVER SIDE JS */

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { bunnies } = require('./data');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/bunnies', (req, res, next) => {
  res.json(bunnies);
});


app.listen(3000, () => {
  console.log('I am listening!');
});
