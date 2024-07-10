const express = require("express")
const service_controller = require("../controller/service_controller")
const route = express()

route.get('/service/all-services', service_controller.GETAllServices)
route.get('/service/service-by-category/:category_id', service_controller.GETAllServicesByCategory);
route.post('/service/add-service/:category_id', service_controller.POSTService)
route.post('/service/update-service/:service_id', service_controller.PUTService)
route.post('/service/delete-service/:service_id', service_controller.DELETEService)

module.exports = route