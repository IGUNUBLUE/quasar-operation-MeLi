const satCurrentPosition = {
  kenobi: require("../resources/satellites/kenobi.json"),
  skywalker: require("../resources/satellites/skywalker.json"),
  sato: require("../resources/satellites/sato.json"),
};

function getLocation(satellites) {
  try {
    let x1 = satCurrentPosition[satellites[0].name].position.x;
    let y1 = satCurrentPosition[satellites[0].name].position.y;
    let x2 = satCurrentPosition[satellites[1].name].position.x;
    let y2 = satCurrentPosition[satellites[1].name].position.y;
    let x3 = satCurrentPosition[satellites[2].name].position.x;
    let y3 = satCurrentPosition[satellites[2].name].position.y;
    let d1 = satellites[0].distance;
    let d2 = satellites[1].distance;
    let d3 = satellites[2].distance;

    //==> X
    let tempCalOne =
      (Math.pow(y2, 2) -
        Math.pow(y1, 2) +
        (Math.pow(x2, 2) - Math.pow(x1, 2)) +
        (Math.pow(d1, 2) - Math.pow(d2, 2))) *
      (y2 - y3);

    var tempCalTwo =
      Math.pow(y3, 2) -
      Math.pow(y2, 2) +
      (Math.pow(x3, 2) - Math.pow(x2, 2)) +
      (Math.pow(d2, 2) - Math.pow(d3, 2)) * (y1 - y2);

    let tempCalThree = (x1 - x2) * (y2 - y3) - (x2 - x3) * (y1 - y2);

    let x = (tempCalOne - tempCalTwo) / (tempCalThree * 2);

    //==> Y
    tempCalOne =
      (Math.pow(x2, 2) -
        Math.pow(x1, 2) +
        (Math.pow(y2, 2) - Math.pow(y1, 2)) +
        (Math.pow(d1, 2) - Math.pow(d2, 2))) *
      (x2 - x3);

    tempCalTwo =
      Math.pow(x3, 2) -
      Math.pow(x2, 2) +
      (Math.pow(y3, 2) - Math.pow(y2, 2)) +
      (Math.pow(d2, 2) - Math.pow(d3, 2)) * (x1 - x2);

    tempCalThree = (y1 - y2) * (x2 - x3) - (y2 - y3) * (x1 - x2);

    let y = (tempCalOne - tempCalTwo) / (tempCalThree * 2);

    return {
      x: Number(x.toFixed(1)),
      y: Number(y.toFixed(1)),
    };
  } catch (err) {
    console.error(err)
    return {
      x: false,
      y: false,
    };
  }
}

module.exports = getLocation;
