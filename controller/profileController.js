const profile = require("../model/usersProfile")
const user = require("../model/userModel")
module.exports = {

    profile: (req, res) => {
        if (!req.body.user_id) {
            res.send({ responseCode: 404, responseMessage: "User id is required !" });
        }
        else {
            profile.findOne({ user_id: req.body.user_id }, (error, result) => {
                if (error) {
                    res.send({ responseCode: 500, responseMessage: "Internal server error.", error })
                }
                if (result) {
                    res.send({ responseCode: 409, responseMessage: "User already exist." })
                }
                else {
                    new profile(req.body).save((error, saved) => {
                        if (error) {
                            res.send({ responseCode: 500, responseMessage: "Internal server error.", error })
                        }
                        else {
                            res.send({ responseCode: 200, responseMessage: "profile added successfully", saved })
                        }
                    })
                }
            })
        }
    }
}