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
  avgAge: async (req, res) => {
    var myres = await profile.AVG_AGE(req.body, res);
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
    var result = await profile.DELETEUSER( res);
   try{
    
   }catch{
    res
    .status(utils.Error_Code.InternalError)
    .send(utils.Error_Message.InternalError);
   }
  },
};
