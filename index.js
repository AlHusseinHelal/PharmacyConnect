const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
//.env
require("dotenv").config();
//ERROR APIERROR
const ApiError = require(`./utils/apierror`);
//MIDDLEWARE
const { globalError } = require(`./middleware/middleware`);
//HTTP
const http = require("http");
//SCOCKET.IO
const socketio = require("socket.io");

//allRoutes
const allRoutes = require("./routes/allRoutes");

const server = http.createServer(app);
const io = socketio(server);
//req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(express.json());

io.on("connection", (socket) => {
  //WELCOME MESSAGE
  socket.emit("message", "Welcome To ChatConnect");
  //WHEN USER CONNECT
  socket.broadcast.emit("message", "A User Connected");
  //RECEIVE MESSAGE FROM CLEINT
  socket.on("chatMessage", msg => {
    io.emit("message", msg);
    console.log(msg);
  });
  //WHEN USER DISCONNECT
  socket.on("disconnected", () => {
    io.emit("message", "User Disconnected");

  });
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
