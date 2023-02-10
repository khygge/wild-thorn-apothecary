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

router.post("/", async (req, res) => {
  const createNewuser = await User.create({
    user_email: req.body.user_email,
    username: req.body.username,
    password: req.body.password,
  });
  res.send(createNewuser);
});

router.post("/:userid/:plantid", async (req, res) => {
  const findOneUser = await User.findByPk(req.params.userid);
  if (!findOneUser) {
    res.status(404).json({ msg: "no such user" });
  } else {
    const checkValidPlant = await Plant.findByPk(req.params.plantid);
    if (!checkValidPlant) {
      res.status(404).json({ msg: "no such plant" });
    } else {
      const addPlantToUser = await findOneUser.addPlant(req.params.plantid);

      res.json(addPlantToUser);
    }
  }
});

module.exports = router;
