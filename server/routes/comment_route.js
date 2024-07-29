const express = require("express")
const comment_controller = require("../controller/comment_controller")
const route = express.Router()

route.get("/comment/all-comments", comment_controller.GETAllComments)
route.get("/comment/all-comments/:blog_id", comment_controller.GETAllCommentsByBlogId)

module.exports = route