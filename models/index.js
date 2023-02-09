const User = require("./User");
const Garden = require("./Garden");
const Health = require("./Health");
const Plant = require("./Plant");


Garden.belongsTo(User,{
    onDelete:"SET NULL"
})
User.hasMany(Garden)

Plant.belongsTo(Garden,{
    onDelete:"SET NULL"
})
Garden.hasMany(Plant)

Health.belongsTo(Plant,{
    onDelete:"SET NULL"
})
Plant.hasMany(Health)


module.exports = {
    User,
    Garden,
    Health,
    Plant
}