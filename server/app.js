require('dotenv').config()

//importing libraries
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.BACKEND_PORT || 5000;

//tables to be synchorized
const CategoryTable = require('./models/category_table');
const ServiceTable = require('./models/services_table');
const UserTable = require('./models/user_table');

//db connection
const { db_connection, sequelize } = require('./config/db');

//parsing of contents
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//start server
app.listen(PORT, async() => {
    await db_connection(); 
    await sequelize.sync({ force: true });
    console.log('Database synced!');
    console.log("Server running successfully");
})

