const express=require("express");
const core=require("cors");
const helmet=require("helmet");
// Connecting to database
require("./database");
require("./models")
const app=express();

const PORT=process.env.PORT || 3000;



app.listen(PORT,()=>{
    console.log(`Application is Running in PORT ${PORT}`);
})