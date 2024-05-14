const mongoose = require("mongoose");

// ROWA SCHEMA
const rowa = new mongoose.Schema(
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

const Rowa = mongoose.model("rowa", rowa);

module.exports = Rowa;
