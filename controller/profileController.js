const profile = require("../model/usersProfile");
var utils = require("../commonFunction/utils");

module.exports = {
  profile: async (req, res) => {
    await profile.SIGNUP(req.body, res);
    try {
      await new profile(req.body).save();
      res
        .status(utils.Success_Code.Success)
        .send(utils.Success_Message.profileAdded);
    } catch (error) {
      res
        .status(utils.Error_Code.InternalError)
        .send(utils.Error_Message.InternalError);
    }
  },
};
