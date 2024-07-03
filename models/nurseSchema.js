const mongoose = require("mongoose");



// OUTPATIENT SCHEMA
const nurse = new mongoose.Schema(
  {
    patientname: String,
    mrn: String,
    ptfloor: String,
    requestype: String,
    oraliv: String,
    roundcomment: String,
    prepcomment: String,
  },
  { timestamps: true }
);

const Nurse = mongoose.model("nurse", nurse);

module.exports = Nurse;