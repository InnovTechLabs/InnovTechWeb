require('dotenv').config()

//importing libraries
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.BACKEND_PORT || 5000;

const user_route = require("./routes/user_route")
const category_route = require("./routes/category_route")
const service_route = require("./routes/service_route")
const contact_route = require("./routes/contact_route")
const team_route = require("./routes/team_route")

//tables to be synchorized
const CategoryTable = require('./models/category_table');
const ServiceTable = require('./models/service_table');
const UserTable = require('./models/user_table');
const ContactTable = require('./models/contact_table')
const TeamTable = require('./models/team_table')

//db connection
const { db_connection, sequelize } = require('./config/db');

//parsing of contents
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//route
app.use("/", user_route)
app.use("/", category_route)
app.use("/", service_route)
app.use("/", contact_route)
app.use("/", team_route)


//start server
app.listen(PORT, async() => {
//    await db_connection(); 
    //dont touch this comment, this is will re-create the tables and all the records will be deleted
    await sequelize.sync();
    console.log('Database synced!');
    console.log("Server running successfully");
})

