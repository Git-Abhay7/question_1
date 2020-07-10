const mongoose = require("mongoose");
var utils = require("../commonFunction/utils");
const schema = mongoose.Schema;
const userProfilesKey = new schema(
  {
    user_id: {
      type: schema.Types.ObjectId,
      ref: "user",
    },
    dob: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const profileModel = mongoose.model("profile", userProfilesKey, "profile");

(profileModel.SIGNUP = async (body, res) => {
  try {
    const result = await profileModel.findOne({ user_id: body.user_id });
    if (result) {
      if (result.user_id == body.user_id) {
        return res
          .status(utils.Error_Code.AlreadyExist)
          .send(utils.Error_Message.IdExist);
      }
    }
  } catch {
    res
      .status(utils.Error_Code.InternalError)
      .send(utils.Error_Message.InternalError);
  }
}),
  (profileModel["AVG_AGE"] = async (res) => {
    try {
      var data = await profileModel.find();
      var sum = 0;
      data.forEach((word) => {
        dateofbirth = word.dob;
        spl = dateofbirth.split("-");
        var age = new Date().getFullYear() - spl[0];
        sum = sum + age;
        avg = sum / data.length;
      });
      return Math.round(avg);
    } catch {
      res
        .status(utils.Error_Code.InternalError)
        .send(utils.Error_Message.InternalError);
    }
  }),
  (profileModel.DELETEUSER = async (res) => {
    try {
      var year = new Date().getFullYear() - 25;
      var month = new Date().getMonth() + 1;
      var date = new Date().getDate();
      DATE = year + "-" + month + "-" + date;
      console.log(DATE);
      var trash = await profileModel.deleteMany({ dob: { $lt: DATE } });
      return trash;
    } catch (error) {
      res
        .status(utils.Error_Code.Internal_Error)
        .send(utils.Error_Message.InternalError);
    }
  });
module.exports = profileModel;
