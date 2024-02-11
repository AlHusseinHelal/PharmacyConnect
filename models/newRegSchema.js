const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// REGISTRATION SCHEMA
const register = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  code: Number,
});

register.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Registration = mongoose.model("Registration", register);

module.exports = Registration;
