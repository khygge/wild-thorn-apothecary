const express = require("express");
const router = express.Router();
const { User, Plant, Health } = require("../../models");

router.get("/", async (req, res) => {
  const findUsers = await User.findAll({
    include: [Plant],
  });
  res.json(findUsers);
});

router.get("/:userid", async (req, res) => {
  const findOneUser = await User.findByPk(req.params.userid, {
    include: [Plant],
  });
  res.json(findOneUser);
});

module.exports = router;
