const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("garden");
});

module.exports = router;
