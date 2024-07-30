const mongoose = require("mongoose");

// RARE PROTOCOLS SCHEMA
const rareprotocols = new mongoose.Schema(
  {
  raretitle : String,
  rarepath : String, 
  rarecode : String
  },
  { timestamps: true }
);

rareprotocols.pre("save", function (next) {
  this.raretitle =
    this.raretitle.toUpperCase()
  next();
});

const Rareprotocols = mongoose.model("Rareprotocols", rareprotocols);

module.exports = Rareprotocols;
