const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('the request!', req.method, req.url);
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200);
      res.write(`<h1>Home page </h1>`);
      res.end();
    }
    else if (req.url === '/puppies') {
      res.writeHead(200);
      res.write(`<h1>Puppies! </h1>`);
      res.end();
    }
  } else if(req.method === 'POST') {
    //do stuff for when the method is 'POST'
  }
})

server.listen(3000, 'localhost');
