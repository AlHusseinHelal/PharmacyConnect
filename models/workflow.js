const mongoose = require("mongoose");

// INPATIENT SCHEMA
const workflow = new mongoose.Schema(
  {
  wftitle : String,
  wfpath : String, 
  wfcode : String
  },
  { timestamps: true }
);

workflow.pre("save", function (next) {
  this.wftitle =
    this.wftitle.toUpperCase()
  next();
});

const Workflow = mongoose.model("Workflow", workflow);

module.exports = Workflow;

