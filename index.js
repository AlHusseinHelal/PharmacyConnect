const express = require("express");
//MONGOOSE
const mongoose = require("mongoose");
//SCOCKET.IO
const socketio = require("socket.io");
//HTTP
const http = require("http");

const path = require("path");

const app = express();
//SERVER
const server = http.createServer(app);
//SOCKETIO SERVER
const io = socketio(server);
//PORT
const port = process.env.PORT || 7777;
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

//ERROR APIERROR
const ApiError = require(`./utils/apierror`);
//MIDDLEWARE
const { globalError } = require(`./middleware/middleware`);
//FORMAT MESSAGE FOR CHAT
const formatMessage = require("./utils/messages");
//dotenv
require("dotenv").config();
//allRoutes
const allRoutes = require("./routes/allRoutes");
//req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));

io.on("connection", (socket) => {
console.log('helloo-client')
});

mongoose.connect(process.env.MDB).then(() => {
  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});



app.use(allRoutes);
//Error Handling Inside EXPRESS
app.all("*", (req, res, next) => {
  next(new ApiError(`Cant find the page you are looking for!`, 400));
});
//GLOBAL ERROR HANDILING MEDDILEWARE
app.use(globalError);
//ERROE HANDLING OUTSIDE EXPRESS
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors : ${err.name} | ${err.message} `);
  server.close(() => {
    process.exit(1);
  });
});
