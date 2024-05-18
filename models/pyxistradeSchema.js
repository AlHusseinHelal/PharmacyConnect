const mongoose = require("mongoose");

// PYXIS MEDICATION SCHEMA
const pyxistrade = new mongoose.Schema(
  {
    med: String,
    generic: String,
    trade1: String,
    trade2: String,
    trade3: String,
    trade4: String,
    tradeselect : String,
  },
  { timestamps: true }
);

const PyxisTrade = mongoose.model("PyxisTrade", pyxistrade);

module.exports = PyxisTrade;
