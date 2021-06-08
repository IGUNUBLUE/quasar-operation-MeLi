const server = require("express").Router();
const getLocation = require("../../services/getLocation");
const getMessage = require("../../services/getMessage");

let satInformation = [];
let msgAndPosition;

server.post("/:satellite_name", (req, res) => {
  const name = req.params.satellite_name;
  const satellite = { name, ...req.body };

  satInformation.push(satellite);

  if (satInformation.length < 3) {
    res.status(200).json({
      message: `mensaje #${satInformation.length} recibido, información del satélite ${name}. Esperando el siguiente mensaje...`,
    });
  } else {
    const position = getLocation(satInformation);
    const message = getMessage(satInformation);

    if (!position.x || !position.y || message.length < 1) {
      satInformation = [];
      return res
        .status(404)
        .json({ message: "no se pudo determinar la ubicación o el mensaje" });
    }

    msgAndPosition = {
      position,
      message,
    };

    res
      .status(200)
      .json({ message: "Posición y mensaje calculados satisfactoriamente." });
    satInformation = [];
  }
});

server.get("/", (req, res) => {
  if (msgAndPosition) {
    res.status(200).json(msgAndPosition);
  } else {
    res
      .status(400)
      .json({ message: "La posición y el mensaje no se han calculado" });
  }
});

module.exports = server;
