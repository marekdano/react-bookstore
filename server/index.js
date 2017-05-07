const jsonServer = require('json-server');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
// use morgan for login http requests to the console 
const morgan = require('morgan');
//const router = require('./router');
const mongoose = require('mongoose');

// DB setup
mongoose.connect('mongodb://localhost:auth/auth');

// middleware setup
//const server = jsonServer.create();
const server = express();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use('/', router);
server.use(morgan('combined'));
server.use(bodyParser.json({ type: '*/*' }));
//router(server);

// server setup
const port = process.env.PORT || 5000;

server.listen(port, function () {
  console.log('Server is running on port', port);
});