const express = require("express");
const router = express.Router();

const apiRoutes = require("./api");
router.use("/api", apiRoutes);

const frontEndRoutes = require("./frontEndRoutes");
router.use("/", frontEndRoutes);

module.exports = router;
