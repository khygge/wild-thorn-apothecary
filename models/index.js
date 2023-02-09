const User = require("./User");
const Health = require("./Health");
const Plant = require("./Plant");

Plant.belongsToMany(User, {
  through: "UserPlant",
});

User.belongsToMany(Plant, {
  through: "UserPlant",
});

Health.belongsTo(Plant);
Plant.hasMany(Health);

module.exports = {
  User,
  Health,
  Plant,
};
