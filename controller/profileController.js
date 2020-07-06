const profile = require("../model/usersProfile");
const user = require("../model/userModel");
module.exports = {
  profile: async (req, res) => {
    if (!req.body.user_id) {
      res.send({ responseCode: 404, responseMessage: "User id is required !" });
    }
    const result = await profile.findOne({ user_id: req.body.user_id });

    try {
      if (result) {
        res.json({
          responseCode: 409,
          responseMessage: "User already exist.",
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
