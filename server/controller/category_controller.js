const CategoryTable = require("../models/category_table")

module.exports = {
    GETAllCategories : async(req, res) => {
        try {
            const categories = await CategoryTable.findAll();
            res.send(categories)
        } catch (error) {
            console.log(error);
        }
    },
    GETCategoryByName : async(req, res) => {
        const {category_name} = req.params
        const decodedName = category_name.toLowerCase().replace(/-/g, ' ')
        try {
            const category = await CategoryTable.findOne({
                where : {
                    category_name : decodedName
                }
            })
            if(category){
                res.send(category)
            }
            else{
                res.status(404).json({message : "Category Not Found"})
            }
        } catch (error) {
            console.log(error);
        }
    },
    POSTCategory : async(req, res) => {
        const {category_name, category_description} = req.body

        const category = await CategoryTable.build({
            category_name : category_name,
            category_description : category_description
        })

        const checkCategoryExists = await CategoryTable.findOne({
            where : {
                category_name : category_name
            }
        });
        
        try {
            if(checkCategoryExists){
                res.status(409).json({message : "Category already exists"})
            }
            else{
                await category.save();
                res.status(200).json({message : "Category Saved Successfully"})
            }
        } catch (error) {
            console.log(error);
        }
    },
    PUTCategory : async(req, res) => {
        const {category_id} = req.params
        const {category_name, category_description} = req.body
        
        try {
            const category = await CategoryTable.findByPk(category_id)

            if(!category){
                res.status(404).json({"message" : "Category Not Found"})
            }
            else{
                category.category_name = category_name
                category.category_description = category_description
                
                await category.save()
                res.status(200).json({"message" : "Category Updated Successfully"})
            }

        } catch (error) {
            console.log(error);
        }
    }
}