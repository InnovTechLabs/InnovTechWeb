const BlogTable = require("../models/blog_table")
const CommentTable = require("../models/blog_table")

module.exports = {
    GETAllBlogs : async(req, res) => {
        try {
            const blog = await BlogTable.findAll()
            if(blog.length !== 0){
                res.send(blog)
            }
            else{
                res.status(404).json({"message" : "No Blog Data"})
            }
        } catch (error) {
            console.log(error);
        }
    },


    GETBlogByMemberId : async(req, res) => {
        const {member_id} = req.params
        try {
            const blogs = await BlogTable.findAll({
                where : {
                    member_id : member_id
                }
            })

            if(!blogs.length == 0){
                res.send(blogs)
            }
            else{
                res.status(404).json({"message" : "Blogs Associated To Member Does Not Exist"})
            }
        } catch (error) {
            console.log(error);
        }
    },

    POSTBlog : async(req, res) => {
        const {member_id} = req.params
        const  {blog_title, blog_content, blog_image } = req.body

        try {
            const blog = await BlogTable.build({
                member_id : member_id,
                blog_title : blog_title,
                blog_content : blog_content,
                blog_image : blog_image
            })

            await blog.save();
            res.status(200).json({"message" : "Blogs Saved Successfully"})
        } catch (error) {
            console.log(error);
        }
    },

    PUTBlog : async(req, res) => {
        const {blog_id} = req.params;
        const  {blog_title, blog_content, blog_image } = req.body

        try {
            const findBlog = BlogTable.findByPk(blog_id)

            if(!findBlog){
                res.status(404).json({"message" : "Blog doesnot exist"})
            }
            else{
                findBlog.blog_title = blog_title
                findBlog.blog_content = blog_content
                findBlog.blog_image = blog_image
                await findBlog.save()
            }
        } catch (error) {
            console.log(error);
        }
    },

    DELETEBlog : async(req, res) => {
        const {blog_id} = req.params
        const  {blog_title, blog_content, blog_image } = req.body

        try {
            const findBlog = BlogTable.findOne({
                where : {
                    id : blog_id,
                    blog_title : blog_title,
                    blog_content : blog_content,
                    blog_image : blog_image
                }
            })

            if(!findBlog){
                res.status(404).json({"message" : "Blog doesnot exist"})
            }
            else{

                try {
                    const findComments = await CommentTable.findAll({
                        where : {
                            blog_id : blog_id
                        }
                    })

                    if(findComments){
                        await CommentTable.destroy({
                            where : {
                                blog_id : blog_id
                            }
                        })
                    }
                    
                    await findBlog.destroy()
                    res.status(200).json({"message" : "Blog Deleted Successfully"})

                } catch (error) {
                    console.log(error);
                }
                
            }
            
        } catch (error) {
            console.log(error);
        }

    }
}