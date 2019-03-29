const express = require("express");

const server = express();
const projectsRouter = require("./projectsRouter.js");
const actionsRouter = require("./actionsRouter.js");
const cors = require('cors');

server.use(express.json());
server.use(cors());

// routing
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
