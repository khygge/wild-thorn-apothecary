const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Garden extends Model {}

Garden.init({
    // add properites here, ex:
    plant_name: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true,
         validate:{
            isAlphanumeric:true
         }
         
    },
    type_id:{
        type:DataTypes.INTERGER,
        allowNull:false,
        validate:{
            isNumber:true
        },
        references:a
        //TODO:ref type table name ? or [ choices like bball api]
    },
    climate_id:{
        type:DataTypes.INTERGER,
        allowNull:false,
        validate:{
            isNumber:true
        },
        references:a
        // TODO: ref climate table? or choices like bball api
    },
    health_id:{
        type:DataTypes.INTERGER,
        allowNull:false,
        validate:{
            isNumber:true
        },
        references:a
        // TODO: ref health table
    },
    price:{
        type:DataTypes.DECIMAL,
        allowNull:false,
        validate:{
            // unsure if this is right validator
            isDecimal:true
        }
    },

},{
    sequelize
});

module.exports=Garden