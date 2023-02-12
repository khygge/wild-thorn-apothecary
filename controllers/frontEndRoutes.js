const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { User, Plant, Health } = require("../models");

router.get("/", (req, res) => {
  res.render("home");
});

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

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/userplants",(req,res)=>{
  User.findByPk(req.session.userId, {
      include:[Plant]
  }).then(userdata => {
      const hbsData = userdata.toJSON();
      console.log(hbsData);
      res.render("userplants", hbsData)
  })
});

router.get("/ourplants", (req, res) => {
  res.render("plantslist");
});

router.get("/sessions", (req, res) => {
  res.json(req.session);
});

let mailFunction = async () => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "b.wildthorn@gmail.com", // generated ethereal user
      pass: process.env.EMAIL_SECRET,
      tls: {
        rejectUnAuthorized: true,
      }, // generated ethereal password
    },
  });

  // TODO: Create functionality to pass in user email and username.
  // TODO: Create this in a route to ba able to call for a specific user, find that user, and then make a list of the plants they want. Format it with html, then, add it to the body of the email.
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Wild Thorn No-reply" <b.wildthorn@yahoo.com>', // sender address
    to: `USER EMAIL HERE`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

router.get("/mail/:userid", async (req, res) => {
  const findOneUser = await User.findByPk(req.params.userid, {
    include: {
      model: Plant,
      include: [Health],
    },
  });
  let allUserPlants = findOneUser.Plants;
  for (let i = 0; i < allUserPlants.length; i++) {
    let name = allUserPlants[i].toJSON().plant_name;
    let type = allUserPlants[i].toJSON().type;
    let health = allUserPlants[i].toJSON().Health;
    let healthMsg = [];
    for (let n = 0; n < health.length; n++) {
      if (n + 1 == health.length) {
        let message = ` ${health[n].benefits}.`;
        healthMsg.push(message);
        healthMsg.join("");
      } else {
        let message = ` ${health[n].benefits}`;
        healthMsg.push(message);
      }
    }

    const messageForOnePlant = `${
      i + 1
    }. ${name}, type: ${type}. The health benefits for this plant are:${healthMsg}`;
    console.log(messageForOnePlant);
  }
  res.json(allUserPlants);
  // const mail = await mailFunction();
  // res.json(mail);
});

module.exports = router;
