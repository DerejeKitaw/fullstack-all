const express = require('express');
const app = express();

// consider 'path'

//consider logging with morgan

// consider parsing the body with body-parser

// consider the error handlers...
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
