const server = require("express").Router();

server.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json(body)
});

module.exports = server;