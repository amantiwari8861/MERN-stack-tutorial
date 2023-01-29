import cors from "cors";
import express from "express";
import users from "./routes/users.routes.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users",users)
app.use("*",(req,res)=>res.status(404).json({error:"no page found"}))

export default app