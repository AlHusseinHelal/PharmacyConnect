const mongoose = require("mongoose");

// INPATIENT SCHEMA
const med = new mongoose.Schema(
  {
    generic: {
      type : String,
      trim : true,
    },
    trade: {
      type : String,
      trim : true,
    },
    classname: String,
    mechanism: String,
    dosageform: String,
    dose: String,
    adminstration: String,
    ptinformation: String,
    sideeffect: String,
    monitor: String,
    interaction: String,  
    specialprecaution: String, 
    miscellaneous: String, 
  },
  { timestamps: true }
);

const Medication = mongoose.model("Medication", med);

module.exports = Medication;
