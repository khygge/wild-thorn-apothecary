const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/garden", (req, res) => {
  res.render("garden");
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
