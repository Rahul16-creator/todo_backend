const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("./database");
require("./models");
const todoListRoutes = require("./routes/TodoLists");
const errorCodes = require("./utils/ErrorCodes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const colors = {
  GET: '\x1b[32m',
  POST: '\x1b[34m',
  DELETE: '\x1b[31m',
  PUT: '\x1b[33m',
  PATCH: '\x1b[33m',
};

app.use('*', (req, _, next) => {
  console.log(colors[req.method] + req.method, '\x1b[0m' + req.baseUrl);
  next();
});

app.use("/api/v1/todoList", todoListRoutes);

// Global error Handling
app.use((err,req,res,next)=>{
  res.status(500).send(errorCodes["INTERNAL_ERROR"])
})

app.use("*", (req, res) => {
  res.status(404).send({
      status: false,
      code: 404,
      message: `Path ${req.originalUrl} not found!!`,
    });
});

app.listen(PORT, () => {
  console.log(`Application is Running in PORT ${PORT}`);
});
