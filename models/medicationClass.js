const mongoose = require("mongoose");


const medclass = new mongoose.Schema(
  {
    classname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    
    }  
  },
  { timestamps: true }
);

medclass.pre("save", function(next) {
  this.classname =
    this.classname.trim()[0].toUpperCase() + this.classname.slice(1).toLowerCase();
    next();
});

const Medicationclass = mongoose.model("Medicationclass", medclass);

module.exports = Medicationclass;
