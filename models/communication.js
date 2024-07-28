const mongoose = require("mongoose");

// INPATIENT SCHEMA
const communication = new mongoose.Schema(
  {
  dictitle : String,
  diccode : String,
  dicpath : String,
  },
  { timestamps: true }
);

communication.pre("save", function (next) {
  this.dictitle =
    this.dictitle.toUpperCase()
  next();
});

const Communication = mongoose.model("Communication", communication);

module.exports = Communication;
