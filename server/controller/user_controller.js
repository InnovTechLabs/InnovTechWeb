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
    },
    POSTUser : async(req, res) => {
        const {role, username, password, firstname, lastname, email, dialcode, phonenumber} = req.body
        const user = await UserTable.build({
            role : role,
            username : username,
            password : password,
            firstname : firstname,
            lastname : lastname,
            email : email,
            dialcode : dialcode,
            phonenumber : phonenumber
        })

        const checkexistsingUser = await UserTable.findOne({
            where : {
                username : username,
            }
        })

        try {
            if(checkexistsingUser){
                res.status(409).json({message : "User already exists"})
            }
            else{
                await user.save()
                res.status(200).json({"message" : "User saved successfully"})
            }
        } catch (error) {
            console.log(error);
        }
    }
}