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
    },
    {
      plant_name: "Chamomile",
      type: "Flower",
      climate: "Partial Shade",
    },
    {
      plant_name: "Peppermint",
      type: "Herb",
      climate: "Partial Shade",
    },
    {
      plant_name: "Holy Basil",
      type: "Shrub",
      climate: "Full Sun",
    },
    {
      plant_name: "English Lavender",
      type: "Shrub",
      climate: "Full Sun",
    },
    {
      plant_name: "Hawthorn",
      type: "Tree",
      climate: "Full Sun",
    },
    {
      plant_name: "Sage",
      type: "Herb",
      climate: "Partial Sun",
    },
    {
      plant_name: "Yarrow",
      type: "Flower",
      climate: "Full Sun",
    },
    {
      plant_name: "Echinacea",
      type: "Herb",
      climate: "Full Sun",
    },
    {
      plant_name: "Nettle",
      type: "Shrub",
      climate: "Partial Shade",
    },
    {
      plant_name: "Ginger",
      type: "Flower",
      climate: "Partial Shade",
    },
    {
      plant_name: "Turmeric",
      type: "Flower",
      climate: "Partial Sun",
    },
  ]);

  const seedPlantsToUsers = async () => {
    for (let i = 0; i < user.length; i++) {
      await user[i].addPlants([
        Math.floor(Math.random() * plant.length + 1),
        Math.floor(Math.random() * plant.length + 1),
      ]);
    }
  };
  const seedHealthToPlants = async () => {
    for (let i = 0; i < plant.length; i++) {
      await plant[i].addHealth([
        Math.floor(Math.random() * health.length + 1),
        Math.floor(Math.random() * health.length + 1),
      ]);
    }
  };

  await seedPlantsToUsers();
  await seedHealthToPlants();

  process.exit(1);
};

seed();
