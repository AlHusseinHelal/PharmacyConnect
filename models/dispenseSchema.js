const mongoose = require("mongoose");

const {Schema} = mongoose;

// DISPENSE SCHEMA
const dispense = new Schema(
  {
    patientname: String,
    slug: String,
    mrn: String,
    ptfloor: String,
    requestype: String,
    oraliv: String,
    roundcomment: String,
    prepcomment: String,
    attachfile: String,
    commentime : Date,
    commentime2 : Date,
    edit : String
  },
  { timestamps: true }
);

const Dispenseschema = mongoose.model("dispense", dispense);

module.exports = Dispenseschema;