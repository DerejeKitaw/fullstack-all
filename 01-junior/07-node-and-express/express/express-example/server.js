const express = require('express');
const puppies = require('./puppies');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.listen(3000, () => {
  console.log('I am listening on Port 3000!')
})

app.use(express.static(path.join(__dirname, '..', 'public'))))

// our own logger
// app.use((req, res, next) => {
//   console.log('Method:', req.method);
//   console.log('url: ', req.url)
//   next();
// })

app.use(morgan('dev'))

app.get('/puppies', (req, res, next) => {
  res.send(`<h1>Look at all the puppies!</h1>`)
})

app.get('/puppies/add', (req, res, next) => {
  res.send(`<h1>Add a new puppy</h1>`)
})

app.get('/puppies/:id', (req, res, next) => {
  const id = +req.params.id;
  const puppy = puppies.find(pup => pup.id === id)
  res.send(`<h1>My puppy: ${puppy.name}</h1>`)
})

