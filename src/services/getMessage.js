function getMessage(satellites) {
  const msg1 = satellites[0].message;
  const msg2 = satellites[1].message;
  const msg3 = satellites[2].message;
  const lengthMsg = Math.max(msg1.length, msg2.length, msg3.length);
  let finalMsg = [];

  for (let i = 0; i < lengthMsg; i++) {
    if (msg1[i] !== "" && !finalMsg.includes(msg1[i]) && msg1[i]) {
      finalMsg.push(msg1[i]);
    }
    if (msg2[i] !== "" && !finalMsg.includes(msg2[i]) && msg2[i]) {
      finalMsg.push(msg2[i]);
    }
    if (msg3[i] !== "" && !finalMsg.includes(msg3[i]) && msg3[i]) {
      finalMsg.push(msg3[i]);
    }
  }

  return finalMsg.join(" ");
}

module.exports = getMessage;
