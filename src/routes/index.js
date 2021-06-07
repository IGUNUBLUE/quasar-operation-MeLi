const { Router } = require("express");
const router = Router();

// ################ endpoints.
router.use("/", require("./alliance/home"));
router.use("/topsecret", require("./alliance/topSecret"));
router.use("/topsecret_split", require("./alliance/topSecretSplit"));

module.exports = router;
