const express = require("express")
const contact_controller = require("../controller/contact_controller")
const route = express.Router()

route.get("/contactus/all-message", contact_controller.GET)
route.post("/contactus/add-message", contact_controller.POST)

module.exports = route