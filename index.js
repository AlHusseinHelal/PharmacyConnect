const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
var jwt = require("jsonwebtoken");
var methodOverride = require("method-override");
var cookieParser = require("cookie-parser");
//.env
require("dotenv").config();
//ERROR APIERROR
const ApiError = require(`./utils/apierror`);
//MIDDLEWARE
const {globalError} = require(`./middleware/middleware`);
//allRoutes
const allRoutes = require("./routes/allRoutes");

//req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(express.json());



mongoose
  .connect(process.env.MDB)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })

app.use(allRoutes);
//Error Handling Inside EXPRESS
app.all("*", (req, res, next) => {
  next(new ApiError(`Cant find the page you are looking for!`, 400));
});
//GLOBAL ERROR HANDILING MEDDILEWARE
app.use(globalError);
//ERROE HANDLING OUTSIDE EXPRESS
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors : ${err} `);
  process.exit(1);
})