const express = require("express");

const server = express();
const projectsRouter = require("./projectsRouter.js");
const actionsRouter = require("./actionsRouter.js");

server.use(express.json());

// routing
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
