const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Type extends Model {}

Type.init({
    // add properites here, ex:
    id: {
         
         //TODO:
         
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isAplhanumeric:true
        }
    }
},{
    sequelize
});

module.exports=Type