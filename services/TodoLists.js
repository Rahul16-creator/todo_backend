const TodoList = require("../models/TodoList");
const errorCodes = require("../utils/ErrorCodes");
const logger = require("../utils/logger");
class TodoListService {
  getAllTodoLists = () => {
    return new Promise(async (resolve, reject) => {
      try {
        let todolists = await TodoList.findAll();
        resolve({
          message: "TodoList Successfully fetched ||",
          data: todolists,
        });
      } catch (error) {
        logger.Log({
          level: logger.LEVEL.ERROR,
          component: "service/TodoLists.js",
          code: "fetching All todo list",
          description: "Error in fetching All todo list from Db",
          category: "",
          ref: {},
        });
        reject(errorCodes["TODO_FETCH_ALL_ERROR"]);
      }
    });
  };

  createTodoList = (requestData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, uuid = null, completed = false } = requestData;
        await TodoList.create({ name, uuid, completed });
        resolve({
          message: "TodoList Successfully created ||",
        });
      } catch (error) {
        logger.Log({
          level: logger.LEVEL.ERROR,
          component: "service/TodoLists.js",
          code: "Creating todo list",
          description: "Error in creating todo list",
          category: "",
          ref: {},
        });
        reject(errorCodes["TODO_CREATE_ERROR"]);
      }
    });
  };

  deleteTodoList = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        await TodoList.destroy({
          where: {
            uuid: id,
          },
        });
        resolve({
          message: "TodoList Successfully deleted ||",
        });
      } catch (error) {
        logger.Log({
          level: logger.LEVEL.ERROR,
          component: "service/TodoLists.js",
          code: "Deleting todo list",
          description: "Error in deleting todo list",
          category: "",
          ref: {},
        });
        reject(errorCodes["TODO_DELETE_ERROR"]);
      }
    });
  };

  updateTodoList = (id, requestData) => {
    return new Promise(async (resolve, reject) => {
      try {
        await TodoList.update(requestData, { where: { uuid: id } });
        resolve({
          message: "TodoList Successfully Updated. ||",
        });
      } catch (error) {
        logger.Log({
          level: logger.LEVEL.ERROR,
          component: "service/TodoLists.js",
          code: "Updating todo list",
          description: "Error in Updating todo list",
          category: "",
          ref: {},
        });
        reject(errorCodes["TODO_UPDATE_ERROR"]);
      }
    });
  };
}

module.exports = new TodoListService();
