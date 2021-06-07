const server = require("express").Router();

server.get("/", (req, res) => {
  const body = req.body;
  res.send("<h1>Bienvenido a MeLi</h1>")
});

module.exports = server;