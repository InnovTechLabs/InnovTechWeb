const { DataTypes } = require("sequelize")
const { sequelize } = require("../config/db")
const MemberTable = require("./member_table")

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
        member_id : {
            type : DataTypes.INTEGER,
            references : {
                model : MemberTable,
                key : 'id'
            }
        }, 
    },
    {
        freezeTableName : true,
    }
)

BlogTable.belongsTo(MemberTable, {foreignKey : 'member_id'})
MemberTable.hasMany(BlogTable, {foreignKey : 'member_id'})

module.exports = BlogTable