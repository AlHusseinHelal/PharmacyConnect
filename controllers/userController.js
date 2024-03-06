const asyncHandler = require('express-async-handler')
//SIGNOUT
exports.signOut = (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, maxAge: 1 });
  res.redirect("/");
}

//FIRSTWELCOME
exports.firstWelcome = (req, res) => {
  res.status(201).render("Entery/firstwelcome");
}

//LOGIN PAGE
exports.loginPage = (req, res) => {
  res.render("Entery/login.ejs");
}

//REGISTERATION
exports.Register = (req, res) => {
  res.render("Entery/registration.ejs");
}