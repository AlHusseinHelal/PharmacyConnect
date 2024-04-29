const jwt = require("jsonwebtoken");
//UNIQUE ID
const { v4: uuidv4 } = require("uuid");
//IMAGE PROCESSING
const sharp = require("sharp");
//ERROR HANDILING TRY_CATCH OR THEN_CATCH
const asyncHandler = require("express-async-handler");
//MULTER
const multer = require("multer");
//MOMMENT TIMESTAMP
const moment = require("moment");
//ERROR HANDILING
const ApiError = require("../utils/apierror");
const User = require("../models/newRegSchema");
//dotenv
require("dotenv").config();

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWTSECRET_KEY, (err) => {
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
    jwt.verify(token, process.env.JWTSECRET_KEY, async (err, decoded) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        const currentUser = await User.findById(decoded.id);
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
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

//MULTER UPLOAD IMAGE
const uploadSingleImage = (fileName) => {
  //MULTER MEMORYSTORAGE
  const multerStorage = multer.memoryStorage();

  //UPLOAD IMAGE ONLY
  const multerFilter = function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(
        new ApiError("Invalid image type! Only JPEG or PNG is supported."),
        false
      );
    }
  };
  const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
  return upload.single(fileName);
};

//RESIZE IMAGE FOR ATTACH INPATIENT
const imageresizeforinpatient = asyncHandler(async (req, res, next) => {
  const filename = `INupload-${uuidv4()}-${Date.now()}.jpeg `;
  await sharp(req.file.buffer)
    .toFormat("jpeg")
    .jpeg({ quality: 80 })
    .toFile(`uploads/INupload/${filename}`);

  req.body.attachfile = filename;
  next();
});

//RESIZE IMAGE FOR ATTACH OUTPATIENT
const imageresizeforoutpatient = asyncHandler(async (req, res, next) => {
  const filename = `OUTupload-${uuidv4()}-${Date.now()}.jpeg `;
  await sharp(req.file.buffer)
    .toFormat("jpeg")
    .jpeg({ quality: 80 })
    .toFile(`uploads/OUTupload/${filename}`);

  req.body.attachfile = filename;
  next();
});

//RESIZE IMAGE FOR PROFILEIMAGE
const profileimage = asyncHandler(async (req, res, next) => {
  const filename = `user-${uuidv4()}-${Date.now()}.jpeg `;
  await sharp(req.file.buffer)
    .toFormat("jpeg")
    .jpeg({ quality: 80 })
    .toFile(`uploads/ProfileImage/${filename}`);

  req.body.updateprofile = filename;
  next();
});

function watchreceiver(req, res, cb) {
  const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
  const date = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
  const startDate = `${date}T14:00:00.000+00:00`;
  const endDate = `${tomorrow}T13:59:59.000+00:00`;
  const currentUser = User.findOne({ _id: decoded.id });
  const receiver = currentUser.watchreceiver.filter((item) => {
    const createdAt = moment(item.createdAt);
    return createdAt.isBetween(startDate, endDate);
  });
  console.log(receiver);
   cb(receiver);
}

module.exports = {
  requireAuth,
  checkIfUser,
  globalError,
  imageresizeforinpatient,
  imageresizeforoutpatient,
  profileimage,
  uploadSingleImage,
  watchreceiver,
};
