const User = require("./User");
const Health = require("./Health");
const Plant = require("./Plant");

Health.belongsToMany(Plant, { through: "PlantHealth" });
Plant.belongsToMany(Health, { through: "PlantHealth" });

Plant.belongsToMany(User, {
  through: "UserPlant",
});

User.belongsToMany(Plant, {
  through: "UserPlant",
});

module.exports = {
  User,
  Health,
  Plant,
};