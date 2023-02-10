const express = require("express");
const router = express.Router();
const { User, Plant, Health } = require("../../models");

router.get("/", async (req, res) => {
  const findHealth = await Health.findAll({ include: [Plant] });
  res.json(findHealth);
});

module.exports = router;
