const { DataTypes} = require("sequelize");
const { sequelize } = require("../config/db")

const ContactTable = sequelize.define(
    'contact_table',
    {
        fullname : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        },
        dialcode : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        },
        phonenumber : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        },
        message : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        }
    },
    {
        freezeTableName: true,
    }
)

module.exports = ContactTable
