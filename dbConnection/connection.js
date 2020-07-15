const Sequelize = require("sequelize");
const connect = new Sequelize("user", "root", "MySQL#2309", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

try {
  connect.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = connect;
