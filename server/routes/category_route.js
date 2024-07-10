const express = require("express")
const category_controller = require("../controller/category_controller")
const route = express.Router()

route.get('/category/all-categories', category_controller.GETAllCategories)
route.get('/category/:category_name', category_controller.GETCategoryByName)
route.post('/category/add-category', category_controller.POSTCategory)
route.put('/category/update-category/:category_id', category_controller.PUTCategory)

module.exports = route