const sequelize = require("../config/connection");
const { User, Plant, Health } = require("../models");

const seed = async () => {
  await sequelize.sync({ force: true });
  const user = await User.bulkCreate(
    [
      {
        user_email: "violet@dreamdevs.com",
        username: "visualviolet",
        password: "visualviolet",
      },
      {
        user_email: "ben@bingus.com",
        username: "blaubachs",
        password: "twoggerblogger",
      },
      {
        user_email: "emma@regulargnoll.com",
        username: "ewaltho",
        password: "watermelongum",
      },
      {
        user_email: "anthony@mangobango.com",
        username: "amartind",
        password: "mangoTHEbango",
      },
    ],
    {
      individualHooks: true,
    }
  );

  const health = await Health.bulkCreate([
    {
      benefits: "Headache Relief",
    },
    {
      benefits: "Digestion Aid",
    },
    {
      benefits: "Anti-Inflammatory",
    },
    {
      benefits: "Sleep",
    },
    {
      benefits: "Stress Relief",
    },
    {
      benefits: "Circulation",
    },
    {
      benefits: "Anti-Anxiety",
    },
    {
      benefits: "Antiviral",
    },
    {
      benefits: "Allergy Relief",
    },
    {
      benefits: "Anti-Nausea",
    },
    {
      benefits: "Pain Relief",
    },
  ]);

  const plant = await Plant.bulkCreate([
    {
      plant_name: "Calendula",
      type: "Flower",
      climate: "Full Sun",
      HealthId: 3,
    },
    {
      plant_name: "Chamomile",
      type: "Flower",
      climate: "Partial Shade",
      HealthId: 4,
    },
    {
      plant_name: "Peppermint",
      type: "Herb",
      climate: "Partial Shade",
      HealthId: 2,
    },
    {
      plant_name: "Holy Basil",
      type: "Shrub",
      climate: "Full Sun",
      HealthId: 5,
    },
    {
      plant_name: "English Lavender",
      type: "Shrub",
      climate: "Full Sun",
      HealthId: 5,
    },
    {
      plant_name: "Hawthorn",
      type: "Tree",
      climate: "Full Sun",
      HealthId: 6,
    },
    {
      plant_name: "Sage",
      type: "Herb",
      climate: "Partial Sun",
      HealthId: 6,
    },
    {
      plant_name: "Yarrow",
      type: "Flower",
      climate: "Full Sun",
      HealthId: 6,
    },
    {
      plant_name: "Echinacea",
      type: "Herb",
      climate: "Full Sun",
      HealthId: 8,
    },
    {
      plant_name: "Nettle",
      type: "Shrub",
      climate: "Partial Shade",
      HealthId: 9,
    },
    {
      plant_name: "Ginger",
      type: "Flower",
      climate: "Partial Shade",
      HealthId: 10,
    },
    {
      plant_name: "Turmeric",
      type: "Flower",
      climate: "Partial Sun",
      HealthId: 11,
    },
  ]);

  const seedPlantsToUsers = async () => {
    for (let i = 0; i < user.length; i++) {
      await user[i].addPlant([
        Math.floor(Math.random() * plant.length),
        Math.floor(Math.random() * plant.length),
      ]);
    }
  };

  await seedPlantsToUsers();

  process.exit(1);
};

seed();
