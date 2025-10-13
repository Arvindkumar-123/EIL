const {Schema} = require('mongoose');


const RbegsSchema = new Schema({
  
  question: String,
  options: [String],
  answer: [Number],
  explanation: String
});

module.exports = { RbegsSchema };

