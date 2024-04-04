const moment = require("moment");
const express = require("express");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
//JWT
const jwt = require("jsonwebtoken");
//USERS
const User = require("../models/newRegSchema");
//dotenv
require("dotenv").config();

function formatMessage(username, text) {

  return {
    username,
    text,
    time: moment().format("h:mm a"),
  };
}

module.exports = formatMessage;
