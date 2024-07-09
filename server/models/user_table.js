const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../config/db");

const UserTable = sequelize.define(
  'user_table',
  {
    role: {
      type: DataTypes.ENUM('admin', 'user', 'guest'),
      defaultValue: 'user',
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    dialcode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        min: 1,
        max: 3,
      },
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [10, 10],
      },
    },
  },
  {
    freezeTableName: true, // This option disables pluralization
  }
);

module.exports = UserTable;
