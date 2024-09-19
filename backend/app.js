const express = require("express");
const app = express();
require("./conn/conn");
require("dotenv").config();
app.use("/",(req,res)=>{
    res.send("Hello from backend");
});
const PORT =3000;
app.listen(PORT,()=>{
    console.log("Server started");
});