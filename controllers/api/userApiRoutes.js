const express = require("express");
const router = express.Router();
const { User, Plant, Health } = require("../../models");

router.get("/", async (req, res) => {
  const findUsers = await User.findAll({
    include: [Plant],
  });
  res.json(findUsers);
});

router.get("/addplant/:userid/:plantid", async (req, res) => {
  const foundUser = await User.findByPk(req.params.userid);
  foundUser.addPlant(req.params.plantid);
});

router.get("/plant", async (req, res) => {
  const findPlants = await Plant.findAll({ include: [Health] });
  res.json(findPlants);
});

module.exports = router;
