const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// INPATIENT SCHEMA
const inpat2 = new Schema(
  {
    patientname: String,
    slug: {
      type: String,
      lowercase: true,
    },
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

const Inpatientschema = mongoose.model("inpatient", inpat2);

module.exports = Inpatientschema;
