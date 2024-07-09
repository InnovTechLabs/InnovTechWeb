const express = require("express")
const route = express.Router()
const user_controller = require("../controller/user_controller")

route.get('/users', user_controller.GETAllUsers)
route.get('/user/:id', user_controller.GETUserById)

module.exports = route