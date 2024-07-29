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
    },
    POST : async (req, res) => {
        const {blog_id} = req.params
        const {fullname, email, comment} = req.body
        try {
            const newComment = await CommentTable.build({
                blog_id : blog_id,
                fullname : fullname,
                email : email,
                comment : comment
            })

            await newComment.save()
            res.json({"message" :  "Comment Saved Succesfully"})

        } catch (error) {
            console.log(error);
        }
    },
    DELETE : async(req, res) => {
        const {comment_id} = req.params
        const {fullname, email, comment} = req.body
        try {
            const findComment = await CommentTable.findOne({
                where : {
                    id : comment_id,
                    fullname : fullname,
                    email : email,
                    comment : comment
                }
            })
            if(!findComment){
                res.status(404).json({"messge" : "Comment Does Not Exist"})
            }
            else{
                await findComment.destroy();
                res.status(200).json({"message" : "Comment Deleted Successfully"});
            }
        }catch (error) {
            console.log(error); 
        }    
    }
}