const ContactTable = require("../models/contact_table")
module.exports = {
    GET : async(req, res) => {
        try {
            const contact = await ContactTable.findAll()
            res.send(contact)

        } catch (error) {
            console.log(error);
        }
    },

    POST : async(req, res) => {
        const {fullname, dialcode, phonenumber, email, message} = req.body
        try {
            const contact = await ContactTable.build({
                fullname : fullname,
                dialcode : dialcode,
                phonenumber : phonenumber,
                email : email,
                message : message
            })

            await contact.save()
            res.status(200).json({"message" : "Message Saved Successfully"})
        } catch (error) {
            console.log(error);
        }
    },

}