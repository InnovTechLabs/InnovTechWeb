const { DataTypes } = require("sequelize")
const { sequelize } = require("../config/db")

const BlogTable = sequelize.define(
    'blog_table',
    {
        title : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        },
        content : {
            type : DataTypes.TEXT,
            allowNull : false,
            unique : false
        },
        author : {
            
        }
    }
)