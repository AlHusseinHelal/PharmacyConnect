const express = require("express");
const http = require('http');
const mongoose = require('mongoose');
const socketio = require('socket.io');
const path = require("path");
//MOMMENT TIMESTAMP
const moment = require("moment");

const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
//allRoutes
const allRoutes = require("./routes/allRoutes");


const app = express();
const server = http.createServer(app);
const io = socketio(server);





const Inpatientschema = require("./models/inpatientSchema");





const PORT = process.env.PORT || 7777;

// MongoDB connection
mongoose.connect(process.env.MDB);
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

//req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(allRoutes);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send existing messages to the connected client
  // const date = moment().format("YYYY-MM-DD");
  // const startDate = `${date}T00:00:00.000+03:00`;
  // const endDate = `${date}T23:59:59.000+03:00`;
  // Inpatientschema.find({
  //   requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
  //   createdAt: { $gte: startDate, $lte: endDate },
  // }).then((result) => {
  //   socket.emit('init', result);
  // });

  // Listen for new messages from the client
  // socket.on('message', (msg) => {
  //   const message = new Inpatientschema(msg);
  //   message.save().then(() => {
  //     io.emit('message', message); // Broadcast the message to all connected clients
  //   });
  // });

  socket.on('sendinpatient', () => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      createdAt: { $gte: startDate, $lte: endDate },
    }).then((result) => {
      console.log(result);
      socket.broadcast.emit('init', result);
    });
  });

  // socket.on('sendinpatient', ()=> {
  //   console.log("inpatient");
  //   socket.broadcast.emit('response', ()=> {
  //     console.log("message sent");
  //   })
  // } )

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});













//ERROR APIERROR
const ApiError = require(`./utils/apierror`);
//MIDDLEWARE
const { globalError } = require(`./middleware/middleware`);
//FORMAT MESSAGE FOR CHAT
const formatMessage = require("./utils/messages");
//dotenv
require("dotenv").config();





// mongoose.connect("mongodb://localhost:27017/all-Data").then(() => {
//   server.listen(port, () => {
//     console.log(`Listening on port ${port}`);
//   });
//   io.on("connection", socket => {
//     console.log('helloo-client')
//     console.log(socket)
//     });
// });




//Error Handling Inside EXPRESS
app.all("*", (req, res, next) => {
  next(new ApiError(`Cant find the page you are looking for!`, 400));
});
// //GLOBAL ERROR HANDILING MEDDILEWARE
app.use(globalError);
// //ERROE HANDLING OUTSIDE EXPRESS
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors : ${err.name} | ${err.message} `);
  server.close(() => {
    process.exit(1);
  });
});
