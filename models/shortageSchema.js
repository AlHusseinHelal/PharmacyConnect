const mongoose = require("mongoose");

// ROWA SCHEMA
const shortage = new mongoose.Schema(
  {
    CATEGORYNAME: String,
    OrgName: String,
    ONHANDQTY: String,
    STOCKMONTHS: String,
    tradeselect : String,
  },
  { timestamps: true }
);

const Shortage = mongoose.model("shortage", shortage);

module.exports = Shortage;
