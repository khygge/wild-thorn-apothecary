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
      benefits: "Cardiovascular Support",
    },
    {
      benefits: "Restful Sleep",
      benefits: "Cardiovascular Support",
    },
    {
      benefits: "Restful Sleep",
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
      benefits: "Relaxation",
    },
    {
      benefits: "Relaxation",
    },
    {
      benefits: "Antiviral",
    },
    {
      benefits: "Antibacterial"
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
    await user[0].addPlants([2, 5, 6, 10]);
    await user[1].addPlants([2, 4, 9]);
    await user[2].addPlants([1, 6, 8, 12]);
    await user[3].addPlants([3, 7, 11]);
    await user[0].addPlants([2, 5, 6, 10]);
    await user[1].addPlants([2, 4, 9]);
    await user[2].addPlants([1, 6, 8, 12]);
    await user[3].addPlants([3, 7, 11]);
  };


  const seedHealthToPlants = async () => {
    await plant[0].addHealth([2, 7, 11])
    await plant[1].addHealth([2, 6, 8, 9])
    await plant[2].addHealth([1, 2])
    await plant[3].addHealth([6, 8])
    await plant[4].addHealth([2, 5, 6, 8, 9])
    await plant[5].addHealth([2, 4, 7])
    await plant[6].addHealth([7, 11])
    await plant[7].addHealth([6, 7, 8, 11])
    await plant[8].addHealth([3, 7, 10, 11, 12])
    await plant[9].addHealth([4, 7, 12])
    await plant[10].addHealth([2, 3, 7, 13])
    await plant[11].addHealth([2, 3, 11, 14])
  };

  await seedPlantsToUsers();
  await seedHealthToPlants();

  process.exit(1);
};

seed();
