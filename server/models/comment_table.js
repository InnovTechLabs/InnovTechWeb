const {sequelize} = require("../config/db")
const {DataTypes} = require("sequelize")
const BlogTable = require("./blog_table")

const CommentTable = sequelize.define(
    'comment_table',
    {
        blog_id : {
            type : DataTypes.INTEGER,
            references : {
                model : BlogTable,
                key : 'id'
            },
            allowNull : false
        },
        fullname : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false,
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false   
        },
        comment : {
            type : DataTypes.TEXT,
            allowNull : false,
            unique : false
        },
    },
    {
        freezeTableName : true
    }
)

CommentTable.belongsTo(BlogTable, {foreignKey : 'blog_id'})
BlogTable.hasMany(CommentTable, {foreignKey : 'blog_id'})

module.exports = CommentTable