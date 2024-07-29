const CommentTable = require("../models/comment_table")
const BlogTable = require("../models/blog_table")

module.exports = {
    GETAllComments : async(req, res) => {
        try {
            const comments = await CommentTable.findAll()
            res.send(comments)
        } catch (error) {
            console.log(error);
        }
    },
    GETAllCommentsByBlogId : async(req, res) => {
        const {blog_id} = req.params
        try {
            const commments =  await CommentTable.findAll({
                where : {
                    blog_id : blog_id
                }})

            if(commments.length !== 0){
                res.send(commments)
            }
            else{
                res.status(404).json({"message" : "Comments Associated To Blog Not Found"})
            }
        } catch (error) {
            console.log(error);
        }
    }
}