const mongoose = require("mongoose");

// INPATIENT SCHEMA
const lab = new mongoose.Schema(
  {
    labpatientname: String,
    mrnlab: {
      type: Number,
      trim: true,
      isNumeric: true,
    },
    labptfloor: String,
    labrequestype: String,
    medstartdate: {
      type: String,
    },
    phaname: String,
    medstarttime: String,
    samplewddate: String,
    samplewdtime: String,
    levelrequestreason: String,
    comment: String,
    labcomment: String,
    active : {
      type: Boolean,
      default : true
    }
  },
  { timestamps: true }
);

const Labschema = mongoose.model("labSchema", lab);

module.exports = Labschema;
