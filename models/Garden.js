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
    user_id: {
         type: DataTypes.INTERGER,
         allowNull:false,
         unique:true,
         validate:{
            isAlphanumeric:true
         }, 
         references: {
                model: 'User',
                key: 'id',
              },
         
    },
    plant_id:{
        type:DataTypes.INTERGER,
        allowNull:false,
        validate:{
            isNumber:true
        },
        references: {
            model: 'Plant',
            key: 'id',
          }
    }
},{
    sequelize
});

module.exports=Garden