const express = require("express")
const blog_controller = require("../controller/blog_controller")
const route = express.Router()

route.get("/blog/all-blogs", blog_controller.GETAllBlogs)
route.get("/blog/all-blogs/:member_id", blog_controller.GETByMemberId)

module.exports = route

