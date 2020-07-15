var utils = require("../commonFunction/utils");
var connect = require("../dbConnection/connection");

const Sequelize = require("sequelize");
const UserModel = connect.define("USER", {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  freezeTableName: true
});

UserModel["SignUp"] = async (body, res) => {
  try {
    console.log(body.email);
    var result = await UserModel.findAll({
      where: {
        email: body.email,
      },
    });
    if (result) {
      if (result.email == body.email) {
        res
          .status(utils.Error_Code.AlreadyExist)
          .send(utils.Error_Message.EmailExist);
      }
    }
  } catch (error) {
    throw error;
  }
};

UserModel.sync({
  force: true,
});

module.exports = UserModel;