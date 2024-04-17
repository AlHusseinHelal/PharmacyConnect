const mongoose = require("mongoose");



// OUTPATIENT SCHEMA
const outpatient = new mongoose.Schema(
  {
    patientname: String,
    mrn: String,
    ptfloor: String,
    requestype: String,
    oraliv: String,
    roundcomment: String,
    prepcomment: String,
    attachfile: String,
  },
  { timestamps: true }
);

const Outpatient = mongoose.model("outpatient", outpatient);

module.exports = Outpatient;