const express = require("express");
const { getAllTodoLists } = require("../services/TodoLists");
const route = express.Router();
const requestHandler = require("../utils/RequestHandler");
const responseHandler = require("../utils/ResponseHandler");

// routes

route.get("/",(req, res, next) => requestHandler(getAllTodoLists)(req, res, next), responseHandler);

module.exports = route;
