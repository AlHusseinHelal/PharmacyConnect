const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
  },
  { timestamps: true }
);

const Dispenseschema = mongoose.model("dispense", dispense);

module.exports = Dispenseschema;