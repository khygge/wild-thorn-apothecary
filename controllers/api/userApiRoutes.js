const express = require("express");
const router = express.Router();
const { User, Plant, Health } = require("../../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const findUsers = await User.findAll({
      include: [Plant],
    });
    res.json(findUsers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occured", error: err });
  }
});

router.get("/:userid", async (req, res) => {
  try {
    const findOneUser = await User.findByPk(req.params.userid, {
      include: [Plant],
    });
    res.json(findOneUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occured", error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const createNewuser = await User.create({
      user_email: req.body.user_email,
      username: req.body.username,
      password: req.body.password,
    });
    res.send(createNewuser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occured", error: err });
  }
});

router.post("/:userid/:plantid", async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occured", error: err });
  }
});

router.post("/signin",(req,res)=>{
  User.findOne({
  where:{
   username:req.body.username
  }
  }).then(userData => {
   if (!userData){
       return res.status(401).json({msg:"Incorrect email or password."})
   } else {
       if (bcrypt.compareSync(req.body.password, userData.password)){
           req.session.userId = userData.id;
           req.session.username = userData.username;
           return res.json(userData)
       } else {
           return res.status(401).json({msg:"Incorrect email or password."})
       }
   }
  }).catch(err=>{
   console.log(err);
   res.status(500).json({msg:"Gosh dangit!",err})
  })
});

module.exports = router;
