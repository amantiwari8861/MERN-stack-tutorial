import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import exprouter from "./router/userrouters.js";

let expressApp=express();

expressApp.use(cors());
dotenv.config()
let port=process.env.PORT || 5000;

expressApp.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

expressApp.get("/",(req,res)=>{
    res.send("welcome to my website!");
})
// expressApp.get("/about",showAbout(req,res)); //gives error
// expressApp.use("/about",showAbout);

// function showAbout(req,res)
// {
//     res.send("my name is aman");
// }

expressApp.use(exprouter);