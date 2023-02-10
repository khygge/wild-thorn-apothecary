const express = require("express");
const router = express.Router();
const { User, Plant, Health } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const findHealth = await Health.findAll({ include: [Plant] });
    res.json(findHealth);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occured", error: err });
  }
});

router.get("/:healthid", async (req, res) => {
  try {
    const findOneHealth = await Health.findByPk(req.params.healthid, {
      include: [Plant],
    });
    res.json(findOneHealth);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occurred", error: err });
  }
});

module.exports = router;
