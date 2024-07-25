const express = require("express")
const team_controller = require("../controller/team_controller")
const route = express.Router()

route.get("/team/all-members", team_controller.GET)
route.post("/team/add-member", team_controller.POST)
route.put("/team/update-member/:member_id", team_controller.PUT)
route.delete("/team/delete-member/:member_id", team_controller.GET)

module.exports = route
