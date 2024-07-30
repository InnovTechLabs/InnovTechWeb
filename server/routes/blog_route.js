const express = require("express")
const blog_controller = require("../controller/blog_controller")
const route = express.Router()

route.get("/blog/all-blogs", blog_controller.GETAllBlogs)
route.get("/blog/all-blogs/:member_id", blog_controller.GETBlogByMemberId)
route.post("/blog/add-blog/:member_id", blog_controller.POSTBlog)
route.put("/blog/update-blog/:blog_id", blog_controller.PUTBlog)
route.delete("/blog/delete-blog/:blog_id", blog_controller.DELETEBlog)

module.exports = route

