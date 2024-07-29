const { DataTypes} = require("sequelize");
const { sequelize }= require("../config/db")
const CategoryTable = require("./category_table")

const ServiceTable = sequelize.define(
    'service_table',
    {
        category_id : {
            type : DataTypes.INTEGER,
            references : {
                model : CategoryTable,
                key : 'id'
            },
            allowNull : false
        },
        service_name : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
    },
    {
        freezeTableName: true,
    }
)

ServiceTable.belongsTo(CategoryTable, {foreignKey : 'category_id'})
CategoryTable.hasMany(ServiceTable, {foreignKey : 'category_id'})


module.exports = ServiceTable