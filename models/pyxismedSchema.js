const mongoose = require("mongoose");

// PYXIS MEDICATION SCHEMA
const pyxis = new mongoose.Schema(
  {
    med: String,
    generic: String,
    unit: String
  },
  { timestamps: true }
);

const PyxisMed = mongoose.model("PyxisMed", pyxis);

module.exports = PyxisMed;
