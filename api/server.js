const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../projects/projectsRouter');
const resourcesRouter = require('../resources/resourcesRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: "Ello Poppet"})
})

module.exports = server;