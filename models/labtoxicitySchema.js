const mongoose = require("mongoose");


// INPATIENT SCHEMA
const labtoxicity = new mongoose.Schema(
  {
    patientname: String,
    mrn: String,
    ptfloor: String,
    drugname: String,
    druglevel: String,
    sender: String,
    receiver: String,
    time: Date,
    time2 : Date,
    edit : String
  },
  { timestamps: true }
);

const Labtoxicityschema = mongoose.model("labtoxicity", labtoxicity);

module.exports = Labtoxicityschema;
