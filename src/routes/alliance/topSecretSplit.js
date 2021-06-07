const server = require("express").Router();
const getLocation = require("../../services/getLocation");
const getMessage = require("../../services/getMessage");

let satInformation =  [];

server.post("/:satellite_name", (req, res) => {
  const satellite = { name: req.params.satellite_name, ...req.body };
  satInformation.push(satellite);

  if (satInformation.length < 3) {
    res.status(200).json({ message: "esperando el siguiente mensaje..." });
  } else {
    const position = getLocation(satInformation);
    const message = getMessage(satInformation);

    if (!position.x || !position.y || message.length < 1) {
      satInformation = []
      return res
        .status(404)
        .json({ message: "no se pudo determinar la ubicación o el mensaje" });
    }

    res.status(200).json({
      position,
      message,
    });
    satInformation = []
  }
});

module.exports = server;
