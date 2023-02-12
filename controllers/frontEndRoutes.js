const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/garden",(req,res)=>{
  console.log(req.session)
  if(!req.session.userId){
      return res.redirect("/signin")
  }
  User.findByPk(req.session.userId,{
      include:[Plant]
  }).then(userdata => {
      console.log(userdata)
      const hbsData = userdata.toJSON();
      console.log('==============================')
      console.log(hbsData)
      res.render("garden", hbsData)
  })
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/userplants", (req, res) => {
  res.render("userplants");
});

router.get("/ourplants", (req, res) => {
  res.render("plantslist");
});

module.exports = router;
