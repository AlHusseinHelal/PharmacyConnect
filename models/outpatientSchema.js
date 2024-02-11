const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// OUTPATIENT SCHEMA
const outpatient = new Schema(
  {
    patientname: String,
    mrn: Number,
    ptfloor: String,
    requestype: String,
    oraliv: String,
    roundcomment: String,
    prepcomment: String,
  },
  { timestamps: true }
);

const Outpatient = mongoose.model("outpatient", outpatient);

module.exports = Outpatient;