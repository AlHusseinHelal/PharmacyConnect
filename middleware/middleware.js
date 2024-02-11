
const Registration = require("../models/newRegSchema");
var jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  
   if (token) {
      jwt.verify(token, "secretkey", (err) => {
    if (err) { res.redirect("/login"); } else {next();}
     });
     } else {
      res.redirect("/login");
  }};

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
  

  module.exports = {requireAuth, checkIfUser}