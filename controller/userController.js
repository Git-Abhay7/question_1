var user = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  signUp: async (req, res) => {
    if (!req.body.email) {
      res.send({ responseCode: 404, responseMessage: "email is required !" });
    }
    var query = { email: req.body.email };
    const result = await user.findOne(query);
    try {
      if (result) {
        if (result.email == req.body.email) {
          res.json({
            responseCode: 409,
            responseMessage: "Email already exist.",
          });
        }
      } else {
        const saltRounds = 10;
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
          req.body.password = hash;
          new user(req.body).save((error, newuser) => {
            if (error) {
              res.json({
                responseCode: 500,
                responseMessage: "Internal server error.",
              });
            } else {
              res.json({
                responseCode: 200,
                responseMessage: "Signup successfully"
              });
            }
          });
        });
      }
    } catch (error) {
      res.json({
        responseCode: 500,
        responseMessage: "Internal server error.",
      });
    }
  },
};
