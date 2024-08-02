const { DataTypes} = require("sequelize");
const { sequelize } = require("../config/db")

const CategoryTable = sequelize.define(
    'category_table',
    {
        category_name : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        category_description : {
            type : DataTypes.STRING,
            allowNull : true,
            unique : false
        },
        category_image : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        }  
    },
    {
        freezeTableName: true
    }
)

module.exports = CategoryTable