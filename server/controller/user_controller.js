const UserTable = require("../models/user_table")

module.exports = {
    GETAllUsers : async(req, res) => {
        try {
            const users = await UserTable.findAll()
            res.send(users);
        } catch (error) {
            console.log(error);
        }
    },
    GETUserById : async(req, res) => {
        const {id} = req.params
        try {
            const user = await UserTable.findOne({
                where : {
                    id : id
                }
            })
            res.send(user)
        } catch (error) {
            console.log(error);
        }
    }
}