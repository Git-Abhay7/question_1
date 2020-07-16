const profile = require("../model/usersProfile");
var utils = require("../commonFunction/utils");

module.exports = {
  profile: async (req, res) => {
    await profile.SignUp(req.body, res);
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
  avgAge: async (req, res) => {
    var myres = await profile.AvgAge(req.body, res);
    try {
      res.send({
        responseCode: 200,
        resposneMessage: "Avergae Age Of all Users => " + myres + "yr ",
      });
    } catch (error) {
      res
        .status(utils.Error_Code.InternalError)
        .send(utils.Error_Message.InternalError);
    }
  },
  deleteUser: async (req, res) => {
    var data = await profile.DeleteUser(res);
    console.log(data);
    try {
      res.send({
        responseCode: 200,
        resposneMessage: "more than 25 yr old users Deleted .",
        data,
      });
    } catch (error) {
      res
        .status(utils.Error_Code.InternalError)
        .send(utils.Error_Message.InternalError);
    }
  },
};
