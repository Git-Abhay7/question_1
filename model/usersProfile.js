const mongoose = require("mongoose");
var { Error_Code } = require("../commonFunction/utils");
var { Error_Message } = require("../commonFunction/utils");
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

profileModel.signUp_1 = async (body, res) => {
  try {
    const result = await profileModel.findOne({ user_id: body.user_id });
    if (result) {
      if (result.user_id == body.user_id) {
        return res.status(Error_Code.AlreadyExist).send(Error_Message.IdExist);
      }
    }
  } catch {
    res.status(Error_Code.InternalError).send(Error_Message.InternalError);
  }
};
module.exports = profileModel;
