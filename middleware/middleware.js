const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/newRegSchema");
//dotenv
require("dotenv").config();

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWTSECRET_KEY, (err) => {
      if (err) {
        res.redirect("/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

const checkIfUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWTSECRET_KEY, async (err, decoded) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        const currentUser = await User.findById(decoded.id);
        res.locals.user = currentUser;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const userid = async (req, res, next) => {
  const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
  const currentUser = await User.findOne({ _id: decoded.id });
  res.locals.hussein = currentUser.firstname;
  return next();

};

const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const validatorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  requireAuth,
  checkIfUser,
  globalError,
  validatorMiddleware,
  userid,
};
