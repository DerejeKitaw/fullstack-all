const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()
const PORT = 3000

// Logging middleware
app.use(morgan('dev'))

// Body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

const databaseInQuotes = [{id: 1, name: 'Cody'}, {id: 2, name: 'Doug'}]
// If you want to add routes, they should go here!
app.get('/api/puppies', (req, res, next) => {
  res.json(databaseInQuotes)
})

app.get('/api/puppies/:puppyId', (req, res, next) => {
  const puppy = databaseInQuotes.find(pup => pup.id === +req.params.puppyId)
  if (puppy) {
    res.json(puppy)
  } else {
    const err = new Error('Pup not found')
    err.status = 404
    next(err)
  }
})

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err.message)
  console.error(err.stack)
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

db.sync().then(() => console.log('The database is synced'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
