const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Health extends Model {}

Health.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    benefits:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlphanumeric:true
        }
    }
},{
    sequelize
});

module.exports=Health