const { DataTypes } = require("sequelize")
const { sequelize } = require("../config/db")
const MemberTable = require("./member_table")

const BlogTable = sequelize.define(
    'blog_table',
    {
        member_id : {
            type : DataTypes.INTEGER,
            references : {
                model : MemberTable,
                key : 'id'
            }
        }, 
        blog_title : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        blog_content : {
            type : DataTypes.TEXT,
            allowNull : false,
            unique : false
        },
        blog_image : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        }
    },
    {
        freezeTableName : true,
    }
)

BlogTable.belongsTo(MemberTable, {foreignKey : 'member_id'})
MemberTable.hasMany(BlogTable, {foreignKey : 'member_id'})

module.exports = BlogTable