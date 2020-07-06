var user = require("../model/userModel");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");

module.exports = {
  signUp: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors });
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
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
          try {
            req.body.password = hash;
            const newUser = await new user(req.body).save();
            res.json({
              responseCode: 200,
              responseMessage: "Signup successfully",
            });
          } catch (err) {
            res.json({
              responseCode: 500,
              responseMessage: "Internal server error.",
            });
          }
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
