var User = require("../model/userModel");
const validation = require("../commonFunction/validationFun");
var utils = require("../commonFunction/utils");

const bcrypt = require("bcrypt");

module.exports = {
  signUp: async (req, res) => {
    var data = await User.SignUp(req.body, res);
    try {
     console.log(data);
      const saltRounds = 10;
      var hash = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hash
      var saved = await User.create(req.body);
      console.log(saved)
      res
        .status(utils.Success_Code.Success)
        .send(utils.Success_Message.SignUp_Successfully);
    } catch (err) {
      return res
        .status(utils.Error_Code.Internal_Error)
        // .send(utils.Error_Message.InternalError)
        .send(err)
    }
  },
};
