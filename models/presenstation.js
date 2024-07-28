const mongoose = require("mongoose");

// INPATIENT SCHEMA
const presenstation = new mongoose.Schema(
  {
  title : String,
  prepath : String, 
  precode : String
  },
  { timestamps: true }
);

presenstation.pre("save", function (next) {
  this.title =
    this.title.toUpperCase()
  next();
});

const Presenstation = mongoose.model("Presenstation", presenstation);

module.exports = Presenstation;
