const express = require("express");
//MONGOOSE
const mongoose = require("mongoose");
//SCOCKET.IO
const client = require("socket.io");

const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

//ERROR APIERROR
const ApiError = require(`./utils/apierror`);
//MIDDLEWARE
const { globalError } = require(`./middleware/middleware`);
//HTTP
const http = require("http");

//FORMAT MESSAGE FOR CHAT
const formatMessage = require("./utils/messages");
//USERS
const User = require("./models/newRegSchema");
//dotenv
require("dotenv").config();

//allRoutes
const allRoutes = require("./routes/allRoutes");

const server = http.createServer(app);
// const io = socketio(server);
//req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(express.json());

// io.on("connection", (socket) => {
//   //WELCOME MESSAGE
//   socket.emit(
//     "message",
//     formatMessage("ChatConnect", "Welcome To ChatConnect")
//   );
//   //WHEN USER CONNECT
//   socket.broadcast.emit("message", "A User Connected");
//   //RECEIVE MESSAGE FROM CLEINT
//   socket.on("chatMessage" , msg => {

//       io.emit("message", formatMessage( "" , msg));

//   });
//   //WHEN USER DISCONNECT
//   socket.on("disconnected", () => {
//     io.emit("message", "User Disconnected");
//   });
// });

mongoose.connect(process.env.MDB).then((db) => {
  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  // CONNECT TO SOCKET.IO
  client.on("connection", () => {
    let chat = db.collection("chats");

    //CREATE FUNCTION TO SEND STATUS
    sendStatus = (s) => {
      socket.emit("status", s);
    };
    // GET CHATS FROM MONGO COLLECTION
    chat
      .find()
      .limit(100)
      .sort({ _id: 1 })
      .toArray((error, res) => {
        if (error) {
          throw error;
        }
      });
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
