const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { User, Plant, Health } = require("../models");

// Homepage Render
router.get("/", (req, res) => {
  res.render("home");
});

// User garden page. Will redirect to sign in if no current session is available.
router.get("/garden", (req, res) => {
  console.log(req.session);
  if (!req.session.userId) {
    return res.redirect("/signin");
  }
  User.findByPk(req.session.userId, {
    include: [Plant],
  }).then((userdata) => {
    const hbsData = userdata.toJSON();
    console.log(hbsData);
    res.render("garden", hbsData);
  });
});

// Sign in page render
router.get("/signin", (req, res) => {
  res.render("signin");
});

// Sign up page render
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Sign in home page, shows users plants
router.get("/userplants", (req, res) => {
  User.findByPk(req.session.userId, {
    include: {
      model: Plant,
      include: {
        model: Health,
      },
    },
  }).then((userdata) => {
    const hbsData = userdata.toJSON();
    console.log(hbsData);
    res.render("userplants", hbsData);
  });
});

// Render list of shop plants
router.get("/ourplants", (req, res) => {
  res.render("plantslist");
});

// View logged in user session
router.get("/sessions", (req, res) => {
  res.json(req.session);
});

// Render about us page
router.get("/about", (req, res) => {
  res.render("about");
});

let mailFunction = async (email, userInfo) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "b.wildthorn@gmail.com",
      pass: process.env.EMAIL_SECRET,
      tls: {
        rejectUnAuthorized: true,
      },
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Wild Thorn No-reply" <b.wildthorn@yahoo.com>', // sender address
    to: `${email}`, // list of receivers
    subject: "🌱 Your Plants 🌱", // Subject line
    html: `Your plants are: <br> ${userInfo}`, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

// Route for nodemailer to send email to user
router.get("/mail", async (req, res) => {
  const findOneUser = await User.findByPk(req.session.userId, {
    include: {
      model: Plant,
      include: [Health],
    },
  });
  let allUserPlants = findOneUser.Plants;
  let finalMessage = [];
  for (let i = 0; i < allUserPlants.length; i++) {
    let name = allUserPlants[i].toJSON().plant_name;
    let type = allUserPlants[i].toJSON().type;
    let health = allUserPlants[i].toJSON().Health;
    let healthMsg = [];
    for (let n = 0; n < health.length; n++) {
      if (n + 1 == health.length) {
        let message = ` ${health[n].benefits}.`;
        healthMsg.push(message);
        healthMsg.join();
      } else {
        let message = ` ${health[n].benefits}`;
        healthMsg.push(message);
      }
    }

    const messageForOnePlant = `${
      i + 1
    }. ${name}, type: ${type}. The health benefits for this plant are:${healthMsg} <br>`;
    finalMessage.push(messageForOnePlant);
  }
  finalMessage.join();
  await mailFunction(findOneUser.user_email, finalMessage);
  res.json(allUserPlants);
});
module.exports = router;
