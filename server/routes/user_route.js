const express = require("express")
const route = express.Router()
const user_controller = require("../controller/user_controller")

route.get('/user/all-users', user_controller.GETAllUsers)
route.get('/user/:user_id', user_controller.GETUserById)
route.post('/user/add-user', user_controller.POSTUser)
route.put('/user/update-user/:user_id', user_controller.PUTUser)
route.delete('/user/delete-user/:user_id', user_controller.DELETEUser)

module.exports = route