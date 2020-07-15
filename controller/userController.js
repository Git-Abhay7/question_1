var User = require("../model/userModel")
const validation = require("../commonFunction/validationFun");
var utils = require("../commonFunction/utils");

const bcrypt = require("bcrypt");

module.exports = {
  signUp: async (req, res) => {

    await User.SignUp(req.body, res);
    try {
      const saltRounds = 10;
      var hash = await bcrypt.hash(req.body.password, saltRounds);
      await userModel.save(req.body);
      res
        .status(utils.Success_Code.Success)
        .send(utils.Success_Message.SignUp_Successfully);
    } catch (err) {
      return res
        .status(utils.Error_Code.Internal_Error)
        .send(utils.Error_Message.InternalError);

    }
  },
};