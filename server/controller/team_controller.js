const TeamTable = require("../models/team_table")
module.exports = {
    GET : async (req, res) => {
        try {
            const team = await TeamTable.findAll()
            res.send(team)

        } catch (error) {
            console.log(error);
        }
    },
    POST : async(req, res) => {
        const {
            member_name,
            member_position,
            member_role,
            member_image,
            member_facebook,
            member_instagram,
            member_linkedin,
            member_twitter} = req.body
        try {
            const team = await TeamTable.build({
                member_name : member_name,
                member_position : member_position,
                member_role : member_role,
                member_image : member_image,
                member_facebook : member_facebook,
                member_instagram : member_instagram,
                member_linkedin : member_linkedin,
                member_twitter : member_twitter
            })

            await team.save()

        } catch (error) {
            console.log(error);
        }
    },
    PUT : async(req, res) => {
        const {member_id} = req.params
        const {
            member_name,
            member_position,
            member_role,
            member_image,
            member_facebook,
            member_instagram,
            member_linkedin,
            member_twitter} = req.body
            try {
                const member = await TeamTable.findByPk(member_id)

                if(!member){
                    res.status(404).json({"message" : "Member Not Found"})
                }
                else{
                    member.member_name = member_name,
                    member.member_position = member_position,
                    member.member_role = member_role,
                    member.member_image = member_image,
                    member.member_facebook = member_facebook,
                    member.member_instagram = member_instagram,
                    member.member_linkedin = member_linkedin,
                    member.member_twitter = member_twitter
                    
                    await member.save()
                    res.status(200).json({"message" : "Member"})
                }
            } catch (error) {
                console.log(error);
            }
    },
    DELETE : async(req, res) => {
        const {member_id} = req.params
        const {
            member_name,
            member_position,
            member_role,
            member_image,
            member_facebook,
            member_instagram,
            member_linkedin,
            member_twitter} = req.body

        try {
            const member = await TeamTable.findOne({
                id : member_id,
                member_name : member_name,
                member_position : member_position,
                member_role : member_role,
                member_image : member_image,
                member_facebook : member_facebook,
                member_instagram : member_instagram,
                member_linkedin : member_linkedin,
                member_twitter : member_twitter
            })
            if(!member){
                res.status(404).json({"message" : "Member Not Found"})
            }
            else{
                await member.destroy();
                res.status(200).json({"message" : "Member Deleted Successfully"})
            }
        } catch (error) {
            console.log(error);
        }
    }
}