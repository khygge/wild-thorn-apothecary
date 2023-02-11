const express = require("express");
const router = express.Router();
const { User, Plant, Health } = require("../../models");

// Get all plants at api/plants
router.get("/", async (req, res) => {
  try {
    const allPlants = await Plant.findAll({ include: [Health] });
    res.json(allPlants);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occured", error: err });
  }
});

// Get one plant at api/plants/:plantid
router.get("/:plantid", async (req, res) => {
  try {
    const foundPlant = await Plant.findByPk(req.params.plantid, {
      include: [Health],
    });
    if (foundPlant) {
      res.json(foundPlant);
    } else {
      res.status(404).json({ msg: "no plant by that id" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occured", error: err });
  }
});

// Create a new plant (this may not be used much) at /api/plants/newplant with a body.
router.post("/newplant", async (req, res) => {
  try {
    const createPlant = await Plant.create({
      plant_name: req.body.plant_name,
      type: req.body.type,
      climate: req.body.climate,
    });
    await createPlant.addHealth(req.body.HealthId);
    res.json(createPlant);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occured", error: err });
  }
});

module.exports = router;
