const errorCodes = {
  UNKNOWN_ERROR: {
    status: false,
    code: 500,
    message: "Something went wrong!!",
  },
  INTERNAL_ERROR: {
    status: false,
    code: 500,
    message: "Internal Server Error!!",
  },
  NOT_FOUND: {
    status: false,
    code: 400,
    message: "Page Not Found!!",
  },
  TODO_FETCH_ALL_ERROR: {
    status: false,
    code: 400,
    message: "Error in fetching All todo list from Db",
  },
  TODO_CREATE_ERROR: {
    status: false,
    code: 400,
    message: "Error in creating todo list",
  },
  TODO_DELETE_ERROR: {
    status: false,
    code: 400,
    message: "Error in deleting todo list",
  },
  TODO_UPDATE_ERROR: {
    status: false,
    code: 400,
    message: "Error in Updating todo list",
  },
};
module.exports = errorCodes;
