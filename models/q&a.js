const mongoose = require("mongoose");

// Q&A SCHEMA
const qa = new mongoose.Schema(
  {
    question: String,
    answer: String,
    detector: String,
    sendername: String,
    senderimage: String,
  },
  { timestamps: true }
);

const Qa = mongoose.model("Qa", qa);

module.exports = Qa;