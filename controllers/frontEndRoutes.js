const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/garden", (req, res) => {
  res.render("gardenplants");
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

module.exports = router;
