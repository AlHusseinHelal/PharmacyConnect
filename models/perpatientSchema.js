const mongoose = require("mongoose");

// PERPATIENT SCHEMA
const perpatient = new mongoose.Schema(
  {
    OrgCode: String,
    ItemNumber: String,
    ItemDescription: String,
    UOM: String,
    ItemCategory: String,
    MedicationsStock: Number,
  },
  { timestamps: true }
);

const Perpatient = mongoose.model("perpatient", perpatient);

module.exports = Perpatient;
