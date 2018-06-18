const express = require('express');
const app = express();

app.use((req, res, next) => {
  let body = '';
  req.on('data', chunk => {
    console.log('data is coming in...');
    body += chunk;
  })
  req.on('error', err => {
    console.log(err.message);
    next(err);
  })
  req.on('end', () => {
    console.log(body);
    req.body = JSON.parse(body);
    next();
  })
})

app.post('/puppies', (req, res, next) => {
  console.log(req.body);
  res.send('success');
})

app.listen(3000, () => {
  console.log('listening on 3000!')
})
