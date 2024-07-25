const {DataTypes} = require("sequelize")
const {sequelize} = require("../config/db")

const TeamTable = sequelize.define(
    'team_table',
    {
        member_name  : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        },
        member_position  : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        },
        member_role : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        },
        member_image : {
            type : DataTypes.STRING,
            allowNull : true,
            unique : false
        },
        member_facebook : {
            type : DataTypes.STRING,
            allowNull : true,
            unique : true
        },
        member_instagram : {
            type : DataTypes.STRING,
            allowNull : true,
            unique : true
        },
        member_linkedin : {
            type : DataTypes.STRING,
            allowNull : true,
            unique : true
        },
        member_twitter : {
            type : DataTypes.STRING,
            allowNull : true,
            unique : true
        },
    },
    {
        freezeTableName : true,
    }
)

module.exports = TeamTable