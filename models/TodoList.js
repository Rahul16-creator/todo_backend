const{DataTypes :{ STRING, BOOLEAN }} = require("sequelize");
const sequelize = require("../database");

const TodoList = sequelize.define("TodoList", {
  name: {
    type: STRING,
    allowNull: false,
  },
  uuid: {
    type: STRING,
  },
  completed: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = TodoList;
