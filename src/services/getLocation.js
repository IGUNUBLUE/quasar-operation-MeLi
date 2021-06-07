const satCurrentPosition = {
  kenobi: require("../resources/satellites/kenobi.json"),
  skywalker: require("../resources/satellites/skywalker.json"),
  sato: require("../resources/satellites/sato.json"),
};

function getLocation(satellites) {
  var xa = satCurrentPosition[satellites[0].name].position.x;
  var ya = satCurrentPosition[satellites[0].name].position.y;
  var xb = satCurrentPosition[satellites[1].name].position.x;
  var yb = satCurrentPosition[satellites[1].name].position.y;
  var xc = satCurrentPosition[satellites[2].name].position.x;
  var yc = satCurrentPosition[satellites[2].name].position.y;
  var ra = satellites[0].distance;
  var rb = satellites[1].distance;
  var rc = satellites[2].distance;

  var S =
    (Math.pow(xc, 2) -
      Math.pow(xb, 2) +
      Math.pow(yc, 2) -
      Math.pow(yb, 2) +
      Math.pow(rb, 2) -
      Math.pow(rc, 2)) /
    2.0;
  var T =
    (Math.pow(xa, 2) -
      Math.pow(xb, 2) +
      Math.pow(ya, 2) -
      Math.pow(yb, 2) +
      Math.pow(rb, 2) -
      Math.pow(ra, 2)) /
    2.0;
  var y =
    (T * (xb - xc) - S * (xb - xa)) /
    ((ya - yb) * (xb - xc) - (yc - yb) * (xb - xa));
  var x = (y * (ya - yb) - T) / (xb - xa);

  return {
    x: x,
    y: y,
  };
}

module.exports = getLocation;
