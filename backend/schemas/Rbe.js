// const {Schema} = require('mongoose');
import mongoose from 'mongoose';

const RbegsSchema = new mongoose. Schema({
  
  question: String,
  options: [String],
  answer: [Number],
  explanation: { type: String, default: "" }
});

const PoliceSchema = new mongoose. Schema({
  
  question: String,
  options: [String],
  answer: [Number],
  explanation: { type: String, default: "" }
});

export { RbegsSchema ,PoliceSchema };






