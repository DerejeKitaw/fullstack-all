/* SERVER SIDE JS */

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const Bun = require('./db/_db').model('bun');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/bunnies', async (req, res, next) => {
  const buns = await Bun.findAll().catch(next);
  res.json(buns);
});


app.listen(3000, () => {
  console.log('I am listening!');
});
