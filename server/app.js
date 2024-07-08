//to use the env files
require('dotenv').config()
//importing libraries
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
//connection to the database
const {db_connection} = require("./config/db")

//runs the server
app.listen(process.env.BACKEND_PORT, () => {
    db_connection()
    console.log("Server running successfully");
})

