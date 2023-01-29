import express from "express";
import UserController from "../dao/usercontroller.js";

let exprouter=express.Router();

exprouter.get("/about",UserController.showAbout);
exprouter.get("/contact",UserController.contactUs);

export default exprouter