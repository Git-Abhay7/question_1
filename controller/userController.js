var user = require("../model/userModel");
const validation = require("../commonFunction/validationFun");
var utils = require("../commonFunction/utils");

const bcrypt = require("bcrypt");

module.exports = {
  signUp: async (req, res) => {
    await user.SignUp(req.body, res);
    try {
      const saltRounds = 10;
      var hash = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hash;
      await new user(req.body).save();
      res
        .status(utils.Success_Code.Success)
        .send(utils.Success_Message.SignUp_Successfully);
    } catch (error) {
      res
        .status(utils.Error_Code.InternalError)
        .send(utils.Error_Message.InternalError);
    }
  },
};
