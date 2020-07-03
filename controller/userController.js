var user = require("../model/userModel")
const bcrypt = require("bcrypt")

module.exports = {

    signUp: (req, res) => {

        var query = { email: req.body.email }
        user.findOne(query, (error, result) => {
            if (error) {
                res.send({ responseCode: 500, responseMessage: "Internal server error.", error })
            }
            else if (result) {
                if (result.email == req.body.email) {
                    res.send({ responseCode: 409, responseMessage: "Email already exist." })
                }
            }
            else {
                const saltRounds = 10;
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    req.body.password = hash
                 
                    new user(req.body).save((error, saved) => {
                        if (error) {
                            res.send({ responseCode: 500, responseMessage: "Internal server error.", error })
                        }
                        else {
                            res.send({ responseCode: 200, responseMessage: "Signup successfully", saved })
                        }
                    })
                });
            }
        })
    },
}