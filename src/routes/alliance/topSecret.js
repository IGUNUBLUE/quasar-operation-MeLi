const server = require("express").Router();
const getLocation = require("../../services/getLocation");
const getMessage = require("../../services/getMessage");

server.post("/", (req, res) => {
  const satInformation = req.body.satellites;

  if (satInformation.length < 3) {
    res
      .status(401)
      .json({ message: "La información recibida no esta completa." });
  } else {
    const position = getLocation(satInformation);
    const message = getMessage(satInformation);

    if (!position.x || !position.y || message.length < 1) {
      return res
        .status(404)
        .json({ message: "no se pudo determinar la ubicación o el mensaje" });
    }

    res.status(200).json({
      position,
      message,
    });
  }
});

module.exports = server;
