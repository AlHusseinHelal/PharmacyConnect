const mongoose = require("mongoose");

// POLICY SCHEMA
const policy = new mongoose.Schema(
  {
  policytitle : String,
  policypath : String, 
  policycode : String
  },
  { timestamps: true }
);

policy.pre("save", function (next) {
  this.policytitle =
    this.policytitle.toUpperCase()
  next();
});

const Policy = mongoose.model("Policy", policy);

module.exports = Policy;
