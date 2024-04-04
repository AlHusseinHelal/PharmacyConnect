const mongoose = require("mongoose");

// INPATIENT SCHEMA
const chat = new mongoose.Schema(
  {
    mess: String,
    
  },
  { timestamps: true }
);

const Chatmessage = mongoose.model("chatMessage", chat);

module.exports = Chatmessage;
