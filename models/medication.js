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
  this.ptinformation.replace(/\\n/g, "\n")

  next();
});

const Medication = mongoose.model("Medication", med);

module.exports = Medication;
