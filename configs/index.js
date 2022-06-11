require("dotenv").config();

 const  config = {
    dbName: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    userName:process.env.DB_USER_NAME
}

module.exports=config