const express = require("express");
const router = express.Router();
const { User, Plant, Health } = require("../../models");

router.get("/", async (req, res) => {
  const findUsers = await User.findAll({
    include: [Plant],
  });
  res.json(findUsers);
});

module.exports = router;
