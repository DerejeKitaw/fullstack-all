const express = require('express');
const volleyball = require('volleyball');
const path = require('path');
const data = require('./data');
const app = express();

app.use(volleyball);
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/dogs', (req, res, next) => {
  res.send(data.dogs);
});

app.get('/api/cats', (req, res, next) => {
  res.send(data.cats);
});

app.get('/api/dragons', (req, res, next) => {
  res.send(data.dragons);
});

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..public/index.html'));
});

app.listen(3000, () => {
  console.log('I is listening.');
});
