const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Garden extends Model {}

Garden.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
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
        references: {
            model: 'Type',
            key: 'id',
          },
        //TODO:ref type table name ? or [ choices like bball api]
    },
    climate_id:{
        type:DataTypes.INTERGER,
        allowNull:false,
        validate:{
            isNumber:true
        },
        references: {
            model: 'Climate',
            key: 'id',
          },
        // TODO: ref climate table? or choices like bball api
    },
    health_id:{
        type:DataTypes.INTERGER,
        allowNull:false,
        validate:{
            isNumber:true
        },
        references: {
            model: 'Health',
            key: 'id',
          },
        // TODO: ref health table
    },
    price:{
        type:DataTypes.DECIMAL,
        allowNull:false,
        validate:{
            isDecimal:true
        }
    },

},{
    sequelize
});

module.exports=Garden