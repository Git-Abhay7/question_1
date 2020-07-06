const profile = require("../model/usersProfile");
const user = require("../model/userModel");
var { check, validationResult } = require("express-validator");
module.exports = {
  profile: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const result = await profile.findOne({ user_id: req.body.user_id });

    try {
      if (result) {
        res.json({
          responseCode: 409,
          responseMessage: "UserId already exist.",
        });
      } else {
        new profile(req.body).save((error, saved) => {
          if (error) {
            res.json({
              responseCode: 500,
              responseMessage: "Internal server error.",
            });
          } else {
            res.json({
              responseCode: 200,
              responseMessage: "profile added successfully",
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
