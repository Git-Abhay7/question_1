const mongoose = require("mongoose");
var { Error_Code } = require("../commonFunction/utils");
var { Error_Message } = require("../commonFunction/utils");
const schema = mongoose.Schema;
const userKey = new schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//userKey.pre("");
const UserModel = mongoose.model("user", userKey, "user");

UserModel["SIGNUP"] = async (body, res) => {
  try {
    const result = await UserModel.findOne({ email: body.email });
    if (result) {
      if (result.email == body.email) {
        res.status(Error_Code.AlreadyExist).send(Error_Message.EmailExist);
      }
    }
  } catch (error) {
    res.status(Error_Code.InternalError).send(Error_Message.InternalError);
  }
};
module.exports = UserModel;
