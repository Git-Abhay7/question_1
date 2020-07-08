var user = require("../model/userModel");
const validation = require("../commonFunction/validationFun");
var { Error_Code } = require("../commonFunction/utils");
var { Error_Message } = require("../commonFunction/utils");
var { Success_Message } = require("../commonFunction/utils");
var { Success_Code } = require("../commonFunction/utils");

const bcrypt = require("bcrypt");

module.exports = {
  signUp: async (req, res) => {
    const result1 = await user.signUp_1(req.body, res);
    try {
      const saltRounds = 10;
      var hash = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hash;
      var saved = await new user(req.body).save();
      res
        .status(Success_Code.Success)
        .send(Success_Message.SignUp_Successfully);
    } catch (error) {
      res.status(Error_Code.InternalError).send(Error_Message.InternalError);
    }
  },
};
