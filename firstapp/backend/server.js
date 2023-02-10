import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');
// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get("/*",(req,res)=>{
  // res.sendStatus(404);
  res.status(404).send("something !!");
})