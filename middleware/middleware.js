const jwt = require("jsonwebtoken");
//UNIQUE ID
const { v4: uuidv4 } = require("uuid");
//IMAGE PROCESSING
const sharp = require("sharp");
//ERROR HANDILING TRY_CATCH OR THEN_CATCH
const asyncHandler = require("express-async-handler");
//MULTER
const multer = require("multer");
//URL
const url = require('node:url');
//ERROR HANDILING
const ApiError = require("../utils/apierror");
const User = require("../models/newRegSchema");
const Qa = require("../models/q&a");
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
        const qa = await Qa.find()
        res.locals.user = currentUser;
        res.locals.qa = qa;
        res.locals.myUrl = url.parse(req.url)
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

//RESIZE IMAGE FOR ATTACH DISPENSE
const imageresizefordispense = asyncHandler(async (req, res, next) => {
  const filename = `DISupload-${uuidv4()}-${Date.now()}.jpeg `;
  await sharp(req.file.buffer)
    .toFormat("jpeg")
    .jpeg({ quality: 80 })
    .toFile(`uploads/DISupload/${filename}`);

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



module.exports = {
  requireAuth,
  checkIfUser,
  globalError,
  imageresizeforinpatient,
  imageresizeforoutpatient,
  profileimage,
  uploadSingleImage,
  imageresizefordispense
};
