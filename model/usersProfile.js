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

profileModel.SIGNUP = async (body, res) => {
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
};
module.exports = profileModel;
