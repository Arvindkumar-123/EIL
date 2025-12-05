
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RbegsModel} from './model/RbeModel.js'; 
import { PoliceModel} from './model/RbeModel.js'; 
import {ScienceModel} from './model/RbeModel.js';
import { StatusCodes } from 'http-status-codes';
// import  User from "./model/UserModel.js";
// import bcrypt, { hash } from "bcrypt";
// import crypto from "crypto";
const app = express();
 app.use(bodyParser.json());
 app.use(cors());


const PORT = process.env.PORT || 5000;
 const MONGO_URL = process.env.MONGO_URL;
  // app.get('/police',async (req,res) => {
  //   let tempPolice =[
       
  //   ];
  //   tempPolice.forEach((item) => {
  //       let newPolice = new PoliceModel({
             
  //           question: item.question,
  //           options: item.options,
  //           answer: item.answer,
  //           explanation: item.explanation
  //       });
  //       return newPolice.save();
  //   });
  //   res.send("Police data added");

  // })

  // app.get('/science',async (req,res) => {
  //   let tempScience =[
       
  //   ];
  //   tempScience.forEach((item) => {
  //       let newScience= new ScienceModel({
             
  //           question: item.question,
  //           options: item.options,
  //           answer: item.answer,
           
  //       });
  //       return newScience.save();
  //   });
  //   res.send("save science question");

  // })



 
app.get('/science', async (req, res) => {
  let scienceData = await ScienceModel.find({});
    res.json(scienceData);
});


app.get('/RBE', async (req, res) => {
  let rbeData = await RbegsModel.find({});
    res.json(rbeData);
});

app.get('/UP_police',async (req,res) => {
  let policeData = await PoliceModel.find({});
  res.json(policeData);
});






app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Exit the app if DB connection fails
  }
});