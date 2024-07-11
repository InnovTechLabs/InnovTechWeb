const ServiceTable = require("../models/service_table")
module.exports = {
    GETAllServices : async(req, res) => {
        try {
            const services = await ServiceTable.findAll();
            res.send(services);
        } catch (error) {
            console.log(error);
        }
    },
    GETAllServicesByCategory : async(req, res) => {
        const {category_id} = req.params
        try {
            const services = await ServiceTable.findAll({
                where : {
                    category_id : category_id
                }
            });
            if(services.length === 0){
                res.status(404).json({message : "Service Affiliated to the Category Does Not Exist"})
            }
            else{
                res.send(services);
            }
        } catch (error) {
            console.log(error);
        }
    },
    POSTService : async(req, res) => {
        const {category_id} = req.params
        const {service_name} = req.body
        try {
            const service = await ServiceTable.build({
                category_id : category_id,
                service_name : service_name
            })

            const checkServiceExists = await ServiceTable.findOne({
                where : {
                    service_name : service_name
                }
            })

            if(checkServiceExists){
                res.status(409).json({message : "Service Already Exists"})
            }
            else{
                await service.save()
                res.status(200).json({message : "Service Added Successfully"})
            }
        
        } catch (error) {
            console.log(error);    
        }
    },
    PUTService : async(req, res) => {
        const {service_id} = req.params
        const {service_name} = req.body
        
        try {
            const service = await ServiceTable.findByPk(service_id)

            if(!service){
                res.status(404).json({"message" : "Service Not Found"})
            }
            else{
                service.service_name = service_name 
                await service.save();
                res.status(200).json({"message" : "Service Updated Successfully"})
            }

        } catch (error) {
            console.log(error);
        }
    },
    DELETEService : async(req, res) => {
        const {service_id} = req.params
        const {service_name} = req.body

        
        try {
            const service = await ServiceTable.findOne({
                where : {
                    id : service_id,
                    service_name : service_name
                }
            })

            if(!service){
                res.status(404).json({message : "Service Not Found"})
            }
            else{
                await service.destroy();
                res.status(200).json({message : "Service Removed Successfully"})
            }
            
            
        } catch (error) {
            console.log(error);
        }
    }
}