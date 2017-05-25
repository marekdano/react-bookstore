const jsonServer = require('json-server');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
// use morgan for login http requests to the console 
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB setup
mongoose.connect('mongodb://localhost:auth/auth');

// middleware setup
const server = express();
server.use(cors());
// mount json-server on a specific end-point, '/api'
// Optional except if you want to have json-server defaults which are logger, static, cors and no-cache
server.use('/api', jsonServer.defaults());
server.use('/api', jsonServer.router('data.json'));
server.use(morgan('combined'));
server.use(bodyParser.json({ type: '*/*' }));
router(server);

// server setup
const port = process.env.PORT || 5000;

server.listen(port, function () {
  console.log('Server is running on port', port);
});