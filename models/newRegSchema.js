const mongoose = require("mongoose");

const bcrypt = require("bcrypt");



// REGISTRATION SCHEMA
const user = new mongoose.Schema(
  {
    firstname: {
      type: "string",
      trim: true,
      required: [true, "Name Is Required"],
    },
    lastname: {
      type: "string",
      trim: true,
      required: [true, "Name Is Required"],
    },
    email: {
      type: "string",
      trim: true,
      required: [true, "Email Is Required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: "string",
      hide: true,
      required: [true, "Password is required"],
    },
  
    code: Number,
    role: {
      type: "string",
      enum: ["User", "Admin"],
      default: "User",
    },
    active: {
      type: Boolean,
      default: true,
    },
    profileimage: String,
  },
  {
    timestamps: true,
  }
);

user.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  this.cpassword = undefined
  next();
});

const User = mongoose.model("User", user);

module.exports = User;
