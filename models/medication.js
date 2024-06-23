const mongoose = require("mongoose");

// INPATIENT SCHEMA
const med = new mongoose.Schema(
  {
    generic: String,
    trade: String,
    code : String,
    classname: String,
    origin : String,
    mechanism: String,
    dosageform: String,
    dose: String,
    administration: String,
    ptinformation: String,
    sideeffect: String,
    monitor: String,
    interaction: String, 
    toxicity : String, 
    specialprecaution: String, 
    miscellaneous: String, 
  },
  { timestamps: true }
);

med.pre("save", function (next) {
  this.generic =
    this.generic.toUpperCase()
  next();
});

const Medication = mongoose.model("Medication", med);

module.exports = Medication;
