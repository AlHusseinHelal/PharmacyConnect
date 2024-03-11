const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const Registration = require("../models/newRegSchema");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secretkey", (err) => {
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
    jwt.verify(token, "secretkey", async (err, decoded) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        const currentUser = await Registration.findById(decoded.id);
        res.locals.user = currentUser;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res
    .status(err.statusCode)
    .json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
}

const validatorMiddleware = (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors : errors.array()})
}
next()
};

module.exports = { requireAuth, checkIfUser, globalError, validatorMiddleware };
