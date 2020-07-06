const mongoose = require("mongoose");
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
module.exports = mongoose.model("profile", userProfilesKey, "profile");
