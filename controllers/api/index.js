const express = require("express");
const router = express.Router();

// Set up routes for models
const userApiRoutes = require("./userApiRoutes");
router.use("/users", userApiRoutes);

const plantApiRoutes = require("./plantApiRoutes");
router.use("/plants", plantApiRoutes);

const healthApiRoutes = require("./healthApiRoutes");
router.use("/health", healthApiRoutes);

module.exports = router;
