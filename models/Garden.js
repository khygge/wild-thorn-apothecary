const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Garden extends Model {}

Garden.init({
    // add properites here, ex:
    user_id: {
         type: DataTypes.INTERGER,
         allowNull:false,
         unique:true,
         validate:{
            isAlphanumeric:true
         }, 
         references: a
         //TODO:ref user table id
         
    },
    plant_id:{
        type:DataTypes.INTERGER,
        allowNull:false,
        validate:{
            isNumber:true
        },
        references:a
        //TODO:ref plant table id
    }
},{
    sequelize
});

module.exports=Garden