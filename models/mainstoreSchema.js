const mongoose = require("mongoose");

// ROWA SCHEMA
const mainstore = new mongoose.Schema(
  {
    OrganizationCode: String,
    CategoryName: String,
    ItemName: String,
    ItemDescription: String,
    ItemUnit: String,
    ExpirationDate: String,
  },
  { timestamps: true }
);

const MainStore = mongoose.model("MainStore", mainstore);

module.exports = MainStore;
