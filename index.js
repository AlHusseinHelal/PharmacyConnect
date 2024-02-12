const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
var jwt = require('jsonwebtoken');
var methodOverride = require("method-override");
var cookieParser = require('cookie-parser')
require('dotenv').config()



//allRoutes
const allRoutes = require('./routes/allRoutes')


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(cookieParser())
app.use(express.json())



mongoose
  .connect(
    process.env.MDB
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


  app.use(allRoutes)