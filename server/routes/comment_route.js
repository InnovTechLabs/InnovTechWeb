const express = require("express")
const comment_controller = require("../controller/comment_controller")
const route = express.Router()

route.get("/comment/all-comments", comment_controller.GETAllComments)
route.get("/comment/all-comments/:blog_id", comment_controller.GETAllCommentsByBlogId)
route.post("/comment/add-comment/:blog_id", comment_controller.POST)
route.delete("/comment/delete-comment/:comment_id", comment_controller.DELETE)

module.exports = route