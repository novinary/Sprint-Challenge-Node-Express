const express = require('express');

const server = express();
const projectsRouter = require('./projectsRouter.js');

server.use(express.json());

// routing 
server.use('/api/projects', projectsRouter);

module.exports = server;