const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Plant extends Model {}

Plant.init({
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
    type:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlphanumeric:true
        }
        
    },
    climate:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlphanumeric:true
        }
       
    },
    health_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isNumber:true
        },
        references: {
            model: 'Health',
            key: 'id',
          }
    }

},{
    sequelize
});

module.exports=Plant