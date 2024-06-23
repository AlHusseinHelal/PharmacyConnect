const mongoose = require("mongoose");

// Q&A SCHEMA
const qa = new mongoose.Schema(
  {
    question: String,
    answer: String,
    detector: String,
    sendername: String,
    senderimage: String,
    refrence: String,
    refrencelink:String,
    drugname: String,
  },
  { timestamps: true }
);

const Qa = mongoose.model("Qa", qa);

module.exports = Qa;