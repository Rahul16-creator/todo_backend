const { Sequelize } = require("sequelize");
const config = require("../configs");
const logger = require("../utils/logger");

const sequelize = new Sequelize(
  config.dbName,
  config.userName,
  config.password,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    logger.Log({
      level: logger.LEVEL.INFO,
      component: "database/index.js",
      code: "DB Connection Test",
      description: "DB Connection has been established successfully.",
      category: "",
      ref: {},
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    logger.Log({
      level: logger.LEVEL.ERROR,
      component: "database/index.js",
      code: "DB Connection Test",
      description: "Connecting to the DB Failed",
      category: "",
      ref: {},
    });
  }
})();

module.exports = sequelize;
