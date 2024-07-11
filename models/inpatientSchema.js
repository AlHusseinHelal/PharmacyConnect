const mongoose = require("mongoose");


// INPATIENT SCHEMA
const inpat2 = new mongoose.Schema(
  {
    patientname: String,
    mrn: String,
    ptfloor: String,
    requestype: String,
    sender: String,
    oraliv: String,
    roundcomment: String,
    prepcomment: String,
    attachfile: String,
    commentime : Date,
    commentime2 : Date,
    edit : String,
  },
  { timestamps: true }
);

const Inpatientschema = mongoose.model("inpatient", inpat2);

module.exports = Inpatientschema;
