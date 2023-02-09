const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Health extends Model {}

Health.init(
  {
    // add properites here, ex:
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
