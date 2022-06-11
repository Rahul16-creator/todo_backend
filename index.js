const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("./database");
require("./models");
const todoListRoutes = require("./routes/TodoLists");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/todoList",todoListRoutes);

app.use("*",(req,res)=>{
    res.status(404).send({status:false,code:404,message:`Path ${req.originalUrl} not found!!`})
})

app.listen(PORT, () => {
  console.log(`Application is Running in PORT ${PORT}`);
});
