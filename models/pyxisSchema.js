const mongoose = require("mongoose");

// PYXIS SCHEMA
const pyxis = new mongoose.Schema(
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

const Pyxis = mongoose.model("pyxis", pyxis);

module.exports = Pyxis;
