const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Health extends Model {}

Health.init(
  {
    benefits: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Health;
