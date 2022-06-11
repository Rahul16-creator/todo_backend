const { Sequelize } = require("sequelize");
const  config  = require("../configs");

const sequelize = new Sequelize(config.dbName, config.userName, config.password, {
  host: "localhost",
  dialect: "postgres",
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
