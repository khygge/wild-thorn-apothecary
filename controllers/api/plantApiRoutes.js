const express = require("express");
const router = express.Router();
const { User, Plant, Health } = require("../../models");

router.get("/", async (req, res) => {
  const allPlants = await Plant.findAll();
  res.json(allPlants);
});

router.get("/:plantid", async (req, res) => {
  const foundPlant = await Plant.findByPk(req.params.plantid, {
    include: [Health],
  });
  if (foundPlant) {
    res.json(foundPlant);
  } else {
    res.status(404).json({ msg: "no plant by that id" });
  }
});

router.post("/newplant", async (req, res) => {
  const createPlant = await Plant.create({
    plant_name: req.body.plant_name,
    type: req.body.type,
    climate: req.body.climate,
  });
  await createPlant.addHealth(req.body.HealthId);
  res.json(createPlant);
});

module.exports = router;
