const Sequelize = require("sequelize");
const sequelize = new Sequelize("user", "root", "MySQL#2309", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
