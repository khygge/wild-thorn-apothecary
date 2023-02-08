const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Climate  extends Model {}

Climate.init({
    // add properites here, ex:
    id: {
        
         //TODO:
         
    },
    pref_climate:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlphanumeric:true
        }
    }
},{
    sequelize
});

module.exports=Climate