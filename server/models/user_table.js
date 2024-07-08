const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

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
    sex: {
      type: DataTypes.ENUM('male', 'female', 'Rather not say'),
      allowNull: false,
    },
    dialcode : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : false,
        validate : {
            min : 1,
            max : 3
        }

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
    timestamps: true,
    underscored: true,
  }
);


module.exports = UserTable;