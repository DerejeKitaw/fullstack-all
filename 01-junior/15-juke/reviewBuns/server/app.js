/* SERVER SIDE JS */

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./db')
const app = express();
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json())

app.use('/bunnies', require('./routes/buns'))

app.use((err, req, res, next) => {
  res.status = err.status;
  res.send(`<h1>OOPS, the server broke</h1><p>${err.message}</p>`)
})

const init = async () => {
  await db.sync();
  app.listen(3000, () => {
    console.log('I am listening!');
  });
}

init();
