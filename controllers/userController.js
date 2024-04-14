
//SIGNOUT
exports.signOut = (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, maxAge: 1 });
  res.redirect("/");
};

//FIRSTWELCOME
exports.firstWelcome = (req, res) => {
  res.status(201).render("Entery/firstwelcome");
};

//LOGIN PAGE
exports.loginPage = (req, res) => {
  res.render("Entery/login.ejs");
};

//REGISTERATION
exports.Register = (req, res) => {
  res.render("Entery/registration.ejs");
};

//AVATAR PAGE
exports.Avatar = (req, res) => {
  res.render("Entery/Avatar.ejs");
};

//INTERFACE
exports.interface = (req, res) => {
  res.render("interface.ejs");
};

//ONCOTIPS
exports.OncoTips = (req, res) => {
  res.render("oncotips.ejs");
}

//WELCOME
exports.welcome = (req, res) => {
  res.render("Entery/welcome.ejs");
};

//FORGETPASSWORD
exports.forgetpassword = (req, res) => {
  res.render("Entery/forgetpage.ejs");
};

//CHANGE PASSWORD
exports.changepassword = (req, res) => {
  res.render("Entery/changepasspage.ejs");
};

//STRUCTURE
exports.STRUCTURE = (req, res) => {
  res.render("STRUCTURE.ejs");
};

//FIRSTWELCOME

