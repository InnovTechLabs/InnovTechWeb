const express = require("express")
const member_controller = require("../controller/member_controller")
const route = express.Router()

route.get("/member/all-members", member_controller.GET)
route.post("/member/add-member", member_controller.POST)
route.put("/member/update-member/:member_id", member_controller.PUT)
route.delete("/member/delete-member/:member_id", member_controller.GET)

module.exports = route
