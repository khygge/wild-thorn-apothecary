const express = require("express");
const router = express.Router();

const userApiRoutes = require("./userApiRoutes");
router.use("/users", userApiRoutes);

module.exports = router;
