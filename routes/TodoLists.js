const express = require("express");
const { getAllTodoLists, createTodoList, deleteTodoList, updateTodoList } = require("../services/TodoLists");
const route = express.Router();
const requestHandler = require("../utils/RequestHandler");
const responseHandler = require("../utils/ResponseHandler");

// routes

route.get("/",(req, res, next) => requestHandler(getAllTodoLists)(req, res, next), responseHandler);
route.post("/",(req, res, next) => requestHandler(createTodoList,req.body)(req, res, next), responseHandler);
route.delete("/:id",(req, res, next) => requestHandler(deleteTodoList,req.params.id)(req, res, next), responseHandler);
route.put("/:id",(req, res, next) => requestHandler(updateTodoList,req.params.id,req.body)(req, res, next), responseHandler);


module.exports = route;
