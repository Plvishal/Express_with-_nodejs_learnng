const express = require('express');

// create server
const server = express();

// Handle default request
// Array of middleware
function firstMidlleware(req, res, next) {
  console.log('First middleware');
  next();
}
function secondMiddlware(req, res, next) {
  console.log('Second Middleware');
  next();
}
server.get('/', [firstMidlleware, secondMiddlware], (req, res) => {
  res.send('hello');
});

// listen on specified port
// Port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});