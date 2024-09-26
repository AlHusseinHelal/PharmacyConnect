const mongoose = require("mongoose");


// labPGx SCHEMA
const labPGx = new mongoose.Schema(
  {
    patientname: String,
    mrn: String,
    pgxptfloor: String,
    druggene: String,
    drugPhenoType: String,
    drugrecomendation: String,
    sender: String,
    receiver: String,
    time: Date,
    time2 : Date,
    edit : String
  },
  { timestamps: true }
);

const LabPGxschema = mongoose.model("labPGx", labPGx);

module.exports = LabPGxschema;
