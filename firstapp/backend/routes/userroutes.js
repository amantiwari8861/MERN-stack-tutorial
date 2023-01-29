import express from "express";
import defaultIndex from "./UserDAO";
let router=express.Router();

// router.get("/",()=>{
// console.log("get on /");
// })

router.get("/",defaultIndex(req,res));

// Axios is used to send a web request whereas express is used to listen and serve these web requests.
// In simple words, express is used to respond to the web requests sent by axios.
// If you know about the fetch() method in javascript, axios is just an alternative to fetch().
