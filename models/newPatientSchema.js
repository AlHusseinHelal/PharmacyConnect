const mongoose = require("mongoose");


// NEW PATIENT  SCHEMA
const newpatient = new mongoose.Schema(
  {
    addpatientname: {
      type: "string",
      required: [true, "Name Is Required"],
    },
    addpatientmrn: {
      type: Number,
      trim: true,
      required: [true, "Name Is Required"],
    },
  },
  {
    timestamps: true,
  }
);



const Newpatient = mongoose.model("NewPatient", newpatient);

module.exports = Newpatient;
