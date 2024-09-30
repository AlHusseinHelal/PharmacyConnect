const mongoose = require("mongoose");

// POLICY SCHEMA
const manual = new mongoose.Schema(
  {
  manualtitle : String,
  manualpath : String, 
  manualcode : String
  },
  { timestamps: true }
);

manual.pre("save", function (next) {
  this.manualtitle =
    this.manualtitle.toUpperCase()
  next();
});

const Manual = mongoose.model("Manual", manual);

module.exports = Manual;
