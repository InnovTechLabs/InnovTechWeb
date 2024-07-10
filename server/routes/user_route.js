const express = require("express")
const route = express.Router()
const user_controller = require("../controller/user_controller")

route.get('/users', user_controller.GETAllUsers)
route.get('/user/:id', user_controller.GETUserById)
route.post('/user/add-user', user_controller.POSTUser)

module.exports = route