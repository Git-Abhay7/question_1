const profile = require("../model/usersProfile");
var { Error_Code } = require("../commonFunction/utils");
var { Error_Message } = require("../commonFunction/utils");
var { Success_Message } = require("../commonFunction/utils");
var { Success_Code } = require("../commonFunction/utils");

module.exports = {
  profile: async (req, res) => {
    const result = await profile.signUp_1(req.body, res);
    try {
      var data = await new profile(req.body).save();
      res.status(Success_Code.Success).send(Success_Message.profileAdded);
    } catch (error) {
      res.status(Error_Code.InternalError).send(Error_Message.InternalError);
    }
  },
};
