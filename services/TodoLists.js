const { reject } = require("lodash");
const TodoList = require("../models/TodoList");

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
        reject({
          status: false,
          code: 400,
          message: "Error in fetching All todo list from Db",
        });
      }
    });
  };

  createTodoList = (requestData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name } = requestData;
        await TodoList.create({ name });
        resolve({
          message: "TodoList Successfully created ||",
        });
      } catch (error) {
        reject({
          status: false,
          code: 400,
          message: "Error in creating todo list",
        });
      }
    });
  };

  deleteTodoList = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        await TodoList.destroy({
          where: {
            id,
          },
        });
        resolve({
          message: "TodoList Successfully deleted ||",
        });
      } catch (error) {
        reject({
          status: false,
          code: 400,
          message: "Error in deleting todo list",
        });
      }
    });
  };

  updateTodoList = (id, requestData) => {
    return new Promise(async (resolve, reject) => {
      try {
        await TodoList.update(requestData, { where: { id } });
        resolve({
            message: "TodoList Successfully Updated. ||",
          });
      } catch (error) {
          console.log(error);
        reject({
          status: false,
          code: 400,
          message: "Error in Updating todo list",
        });
      }
    });
  };
}

module.exports = new TodoListService();
