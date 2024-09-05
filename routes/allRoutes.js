const crypto = require("crypto");
const express = require("express");
//PASSWORD HACH
const bcrypt = require("bcrypt");
//ROUTER
const router = express.Router();
//ERROR HANDILING TRY_CATCH OR THEN_CATCH
const asyncHandler = require("express-async-handler");
//MOMMENT TIMESTAMP
const moment = require("moment");
//JWT TOKEN
const jwt = require("jsonwebtoken");
//VALIDATION RULE
const { check, validationResult } = require("express-validator");
//TO EXCELL FILE
const xlsx = require("xlsx");
//UNIQUE ID
const { v4: uuidv4 } = require("uuid");
//MULTER
const multer = require("multer");
//FS
const fs = require("fs");
//ERROR HANDILING
const ApiError = require("../utils/apierror");
//MULTER DISKSTORAGE
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/Presentation");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `user-${uuidv4()}-${Date.now()}.${ext}`;
    cb(null, filename);
  },
})
//MULTER IMAGE ONLY
const multerFilter = function (req, file, cb) {
  if (file.mimetype.startsWith("application")) {
    cb(null, true);
  } else {
    cb(
      new ApiError("Invalid image type! Only PDF is supported."),
      false
    );
  }
};
const upload = multer({ storage: multerStorage, fileFilter : multerFilter})


//MULTER DISKSTORAGE FOR DIC COMMUNICATION
const multerStorageDic = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/Dicomunication");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `user-${uuidv4()}-${Date.now()}.${ext}`;
    cb(null, filename);
  },
})
//MULTER IMAGE ONLY
const multerFilterDic = function (req, file, cb) {
  if (file.mimetype.startsWith("application")) {
    cb(null, true);
  } else {
    cb(
      new ApiError("Invalid image type! Only PDF is supported."),
      false
    );
  }
};
const uploadic = multer({ storage: multerStorageDic, fileFilter : multerFilterDic})

//MULTER DISKSTORAGE FOR POLICY
const multerStoragePolicy = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/Policy");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `user-${uuidv4()}-${Date.now()}.${ext}`;
    cb(null, filename);
  },
})
//MULTER IMAGE ONLY
const multerFilterPolicy = function (req, file, cb) {
  if (file.mimetype.startsWith("application")) {
    cb(null, true);
  } else {
    cb(
      new ApiError("Invalid image type! Only PDF is supported."),
      false
    );
  }
};
const uploadpolicy = multer({ storage: multerStoragePolicy, fileFilter : multerFilterPolicy})

//MULTER DISKSTORAGE FOR RARE PROTOCOLS
const multerStorageRare = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/Rare");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `user-${uuidv4()}-${Date.now()}.${ext}`;
    cb(null, filename);
  },
})
//MULTER IMAGE ONLY
const multerFilterRare = function (req, file, cb) {
  if (file.mimetype.startsWith("application")) {
    cb(null, true);
  } else {
    cb(
      new ApiError("Invalid image type! Only PDF is supported."),
      false
    );
  }
};
const uploadrare = multer({ storage: multerStorageRare, fileFilter : multerFilterRare})

//MULTER DISKSTORAGE FOR WORKFLOW
const multerStorageWF = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/WorkFlow");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `user-${uuidv4()}-${Date.now()}.${ext}`;
    cb(null, filename);
  },
})
//MULTER IMAGE ONLY
const multerFilterWF = function (req, file, cb) {
  if (file.mimetype.startsWith("application")) {
    cb(null, true);
  } else {
    cb(
      new ApiError("Invalid image type! Only PDF is supported."),
      false
    );
  }
};
const uploadWF = multer({ storage: multerStorageWF, fileFilter : multerFilterWF})



//SCHEMA
const Inpatientschema = require("../models/inpatientSchema");
const User = require("../models/newRegSchema");
const Outpatient = require("../models/outpatientSchema");
const Nurse = require("../models/nurseSchema");
const Dispenseschema = require("../models/dispenseSchema");
const Newpatient = require("../models/newPatientSchema");
const Labschema = require("../models/labSchema");
const Chatmessage = require("../models/chatMessage");
const Medication = require("../models/medication");
const Medicationclass = require("../models/medicationClass");
const Perpatient = require("../models/perpatientSchema");
const Pyxis = require("../models/pyxisSchema");
const Rowa = require("../models/rowaSchema");
const Shortage = require("../models/shortageSchema");
const PyxisTrade = require("../models/pyxistradeSchema");
const Score = require("../models/score");
const Qa = require("../models/q&a");
const Communication = require("../models/communication");
const Labtoxicityschema = require("../models/labtoxicitySchema");
const Presenstation = require("../models/presenstation");
const Policy = require("../models/policy");
const Rareprotocols = require("../models/rareprotocols");
const Workflow = require("../models/workflow");

//MIDDLEWARE
const { requireAuth } = require("../middleware/middleware");
const { checkIfUser } = require("../middleware/middleware");
const { uploadSingleImage } = require("../middleware/middleware");
const { uploadSinglePdf } = require("../middleware/middleware");
const { imageresizeforinpatient } = require("../middleware/middleware");
const { imageresizeforoutpatient } = require("../middleware/middleware");
const { imageresizefordispense } = require("../middleware/middleware");
const { profileimage } = require("../middleware/middleware");
//CONTROLLER
const { signOut } = require("../controllers/userController");
const { firstWelcome } = require("../controllers/userController");
const { loginPage } = require("../controllers/userController");
const { Register } = require("../controllers/userController");
const { Avatar } = require("../controllers/userController");
const { interface } = require("../controllers/userController");
const { OncoTips } = require("../controllers/userController");
const { welcome } = require("../controllers/userController");
const { forgetpassword } = require("../controllers/userController");
const { changepassword } = require("../controllers/userController");
const { STRUCTURE } = require("../controllers/userController");
const { VERIFIY } = require("../controllers/userController");

router.use(express.static("public"));
//dotenv
require("dotenv").config();
//SEND EMAIL
const sendEmail = require(`../utils/sendEmail`);


router.get(
  "/admin",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findById({ _id: decoded.id });
    const results = await Score.find();
    const custmer = await User.find().sort({ firstname: "asc" });

    const exam = user.examchoose;
    const ldsearch = user.ldsearch;
    const searchcode = ldsearch.searchText;
    const searchtext = ldsearch.searchText;
    const scoreSchema = await Score.find();
    const find = scoreSchema.filter(
      (item) =>
        item.code.match(searchcode) ||
        item.examname.toLowerCase().match(searchtext.toLowerCase())
    );
    // const find = user.results.filter( item => item.code.match(searchcode) || item.examname.match(searchtext))
    if (custmer) {
      res.render("admin.ejs", {
        array: custmer,
        exam,
        results,
        moment: moment,
        find,
      });
    }
  })
);

//EXAM
router.get(
  "/exam",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.findById({ _id: decoded.id });
    const exam = results.examchoose;
    const examname = exam.examname;
    if (exam) {
      res.render("Exam/exam.ejs", { exam });
    }
  })
);

//SIGNOUT
router.get("/signout", signOut);

//firstwelcome
router.get("/", firstWelcome);

//LOGIN PAGE
router.get("/login", loginPage);

//User PAGE
router.get("/register", Register);

//AVATAR PAGE
router.get("/Avatar", Avatar);

//INTERFACE
router.get("/interface", checkIfUser, requireAuth, interface);

//ONCOTIPS
router.get("/oncotips", checkIfUser, requireAuth, OncoTips);

//welcomw
router.get("/welcome", checkIfUser, requireAuth, welcome);

//FORGETPASSWORD
router.get("/forgetpassword", forgetpassword);

//VERIFY USER
router.get("/verifiyuser", VERIFIY);

//FORGETPASSWORD
router.get("/changepasswordpage", changepassword);

//STRUCTURE
router.get("/STRUCTURE", checkIfUser, requireAuth, STRUCTURE);

//CHAT
router.get(
  "/chat",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const ChatMessage = await Chatmessage.find();
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const currentUser = await User.findOne({ _id: decoded.id });
    const curentuserid = currentUser.id;
    const currentusername = currentUser.firstname;
    const results = await User.find({ _id: { $ne: curentuserid } }).sort({
      firstname: "asc",
    });
    if (results) {
      res.render("Chat/chat.ejs", {
        array: results,
        currentusername,
        ChatMessage,
      });
    }
  })
);

//TODOLIST
router.get(
  "/todolist",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const currentUser = await User.findOne({ _id: decoded.id });
    const { todolist } = currentUser;
    if (todolist) {
      res.render("todolist/Todolist.ejs", {
        array: todolist,
        moment: moment,
      });
    }
  })
);

//TODOLIST
router.get(
  "/Added_date",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const currentUser = await User.findOne({ _id: decoded.id }).sort({
      createdAt: "asc",
    });
    const { todolist } = currentUser;

    if (todolist) {
      res.render("todolist/Todolist.ejs", {
        array: todolist,
        moment: moment,
      });
    }
  })
);

//TODOLIST
router.get(
  "/due_date",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const currentUser = await User.findOne({ _id: decoded.id }).sort({
      due: "asc",
    });
    const { todolist } = currentUser;

    if (todolist) {
      res.render("todolist/Todolist.ejs", {
        array: todolist,
        moment: moment,
      });
    }
  })
);

//WATCH
router.get(
  "/watch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const currentUser = await User.findOne({ _id: decoded.id });
    const curentuserid = currentUser.id;
    const { firstname } = currentUser;
    const { lastname } = currentUser;
    const results = await User.find({ _id: { $ne: curentuserid } }).sort({
      firstname: "asc",
    });
    const sender = currentUser.watchsender;
    if (results) {
      res.render("Watch/watch.ejs", {
        users: results,
        moment: moment,
        sender: sender,
        firstname,
        lastname,
      });
    }
  })
);

//WATCH RECEIVER
router.get(
  "/receiver",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const date = moment().format("YYYY-MM-DD");
    const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const currentUser = await User.findOne({ _id: decoded.id });
    const { firstname } = currentUser;
    const { lastname } = currentUser;
    const receiver = currentUser.watchreceiver;
    const sender = currentUser.dicsender
    const array = []
    for (let i = 0; i < sender.length; i++) {
      const ele = sender[i].answer;
      array.push(ele)
  } 

    if (receiver) {
      res.render("Watch/receiver.ejs", {
        moment: moment,
        receiver: receiver,
        firstname,
        lastname,array
      });
    }
  })
);

//DIC RECEIVER
router.get(
  "/dic",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const currentUser = await User.findById({ _id: decoded.id });
    const medclass = await Medicationclass.find().sort({ classname: "asc" });
    const med = await Medication.find().sort({ generic: "asc" });
    const date = moment().format("YYYY-MM-DD");
    const startDate = date + "T00:00:00.000+00:00";
    const endDate = date + "T23:59:59.000+00:00";
    const search = currentUser.dicsearch;
    const qa = await Qa.find()
    const dic = qa.filter(item => item.answer === "" );
    console.log(dic);
    if (medclass) {
      res.render("Dic/dic.ejs", {
        medclass,
        med,
        dic,
        moment: moment,
        search,
      });
    }
  })
);

//DIC SENDER
router.get(
  "/dicsender",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.findOne({ _id: decoded.id });
    const receive = results.dicsender;
    const usersearch = results.userquestionsearch 


    if (receive) {
      res.render("Dic/dicsender.ejs", { usersearch, receive, moment: moment });
    }
  })
);

//DIC EXTRACT
router.get(
  "/excel",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const find = await User.findOne({ _id: decoded.id });
    const results = find.dicsearch;
    if (results.length > 0) {
      const response = JSON.parse(JSON.stringify(results));
      //CREATE NEW WORKBOOK
      const workbook = xlsx.utils.book_new();
      //CONVERT JSON ARRAY TO WORKSHEET
      const worksheet = xlsx.utils.json_to_sheet(response);
      //ADD WORKSHEET TO WORKBOOK
      xlsx.utils.book_append_sheet(workbook, worksheet, "Users");
      //DOWNLOAD EXCEL FILE
      const filePath = 'uploads/DicExtract/Users.xlsx';
      xlsx.writeFile(workbook, filePath);
      res.download('uploads/DicExtract/Users.xlsx', 'Users.xlsx', err => {console.log(err)})
    }
  })
);

//WORKFLOW
router.get(
  "/WorkFlow",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    res.render("WorkFlow.ejs");
  })
);

//PHARMACY DEPARTMENT
router.get(
  "/index2",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    res.render("index2");
  })
);

//PERPATIENT STORE
router.get(
  "/perpatient",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const array = await Perpatient.find().sort({ItemDescription : "asc"});
    res.render("Store/perpatient.ejs", { array: array });
  })
);

//PYXIS STORE
router.get(
  "/pyxis",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const array = await Pyxis.find().sort({ItemDescription : "asc"});
    res.render("Store/pyxis.ejs", { array: array });
  })
);

//ROWA STORE
router.get(
  "/rowa",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const array = await Rowa.find().sort({ItemDescription : "asc"});
    res.render("Store/rowa.ejs", { array: array });
  })
);

//SHORTAGE STORE
router.get(
  "/shortage",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const array = await Shortage.find().sort({ CATEGORYNAME: "asc" });
    res.render("Store/shortage.ejs", { array: array });
  })
);

// INPATIENT OVERVIEW
router.get(
  "/inpatient3",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const pageNumber = (req.query.page === null) ? 1 : req.query.page
    const sk = (pageNumber - 1) * limit
    const skip = Math.abs(sk)
    
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;

    const toxicity = await Labtoxicityschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
      edit : { $not: { $in: [ /DONE/i ] }},
    })
    
    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Inpatient/inpatient3.ejs", {

        inpatientarray: results,
        moment: moment,
        page,
        limit,
        skip,
        firstname,
        lastname,
        num,
        toxicity,pageNumber
      });
    }
  })
);

// INPATIENT ICU
router.get(
  "/ICU",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ICU",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ICU",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
    
    if (results) {
      res.render("Inpatient/icu", {
        inpatientarray: results,
        moment: moment,
        floor: "ICU",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT ICU NOT DONE
router.get(
  "/icunotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ICU", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    
    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ICU", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })

    if (results) {
      res.render("Inpatient/icunotdoneview", {
        inpatientarray: results,
        moment: moment,
        floor: "ICU",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT SICU
router.get(
  "/surgical",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "SICU",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "SICU",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
    
    if (results) {
      res.render("Inpatient/surgical", {
        inpatientarray: results,
        moment: moment,
        floor: "SICU",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT SICU NOT DONE
router.get(
  "/surgicalnotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "SICU", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    
    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "SICU", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
  
    if (results) {
      res.render("Inpatient/surgicalnotdoneview", {
        inpatientarray: results,
        moment: moment,
        floor: "SICU",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT OR
router.get(
  "/or",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "OR",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "OR",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
    
    if (results) {
      res.render("Inpatient/or", {
        inpatientarray: results,
        moment: moment,
        floor: "OR",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT OR NOT DONE
router.get(
  "/ornotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "OR", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    
    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "OR", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
  
    if (results) {
      res.render("Inpatient/ornotdoneview", {
        inpatientarray: results,
        moment: moment,
        floor: "OR",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT ICC
router.get(
  "/ICC",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ICC",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
  
    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ICC",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
  
      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })

    if (results) {
      res.render("Inpatient/icc", {
        inpatientarray: results,
        moment: moment,
        floor: "ICC",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT ICC NOT DONE VIEW
router.get(
  "/iccnotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ICC", prepcomment: { $not: { $regex: "DONE" } }, 
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ICC", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
  
      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })

    if (results) {
      res.render("Inpatient/iccnotdone", {
        inpatientarray: results,
        moment: moment,
        floor: "ICC",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);


// INPATIENT 3rdO
router.get(
  "/3rdO",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "3rd O",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "3rd O",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
    
    if (results) {
      res.render("Inpatient/3rdo", {
        inpatientarray: results,
        moment: moment,
        floor: "3rd O",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT 3rdO NOT DONE
router.get(
  "/3rdonotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "3rd O", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "3rd O", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
    
    if (results) {
      res.render("Inpatient/3rdonotdone", {
        inpatientarray: results,
        moment: moment,
        floor: "3rd O",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT 3rdN
router.get(
  "/3rdN",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "3rd N",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "3rd N",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
    
    if (results) {
      res.render("Inpatient/3rdn", {
        inpatientarray: results,
        moment: moment,
        floor: "3rd N",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT 3rdN NOT DONE VIEW
router.get(
  "/3rdnnotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "3rd N", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "3rd N", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
    
    if (results) {
      res.render("Inpatient/3rdnnotdone", {
        inpatientarray: results,
        moment: moment,
        floor: "3rd N",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT 4th
router.get(
  "/4th",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "4th",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "4th",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
  
    if (results) {
      res.render("Inpatient/4th", {
        inpatientarray: results,
        moment: moment,
        floor: "4th",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT 4th NOT DONE VIEW
router.get(
  "/4thnotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "4th", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "4th", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
  
    if (results) {
      res.render("Inpatient/4thnotdone", {
        inpatientarray: results,
        moment: moment,
        floor: "4th",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT 5th
router.get(
  "/5th",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "5th",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
  

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "5th",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
  
    if (results) {
      res.render("Inpatient/5th", {
        inpatientarray: results,
        moment: moment,
        floor: "5th",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT 5th NOT DONE VIEW
router.get(
  "/5thnotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "5th", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "5th", prepcomment: { $not: { $regex: "DONE" } } ,
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })

    if (results) {
      res.render("Inpatient/5thnotdone", {
        inpatientarray: results,
        moment: moment,
        floor: "5th",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT BMT
router.get(
  "/BMT",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "BMT",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
  

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "BMT",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
    
    if (results) {
      res.render("Inpatient/bmt", {
        inpatientarray: results,
        moment: moment,
        floor: "BMT",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT BMT NOT DONE VIEW
router.get(
  "/bmtnotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "BMT", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "BMT", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
  
    if (results) {
      res.render("Inpatient/bmtnotdone", {
        inpatientarray: results,
        moment: moment,
        floor: "BMT",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT ER
router.get(
  "/ER",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ER",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
  

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ER",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
    
    if (results) {
      res.render("Inpatient/er", {
        inpatientarray: results,
        moment: moment,
        floor: "ER",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

// INPATIENT ER NOT DONE VIEW
router.get(
  "/ernotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ER", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    

    const results = await Inpatientschema.find({
      requestype : { $not: { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] }},
      ptfloor: "ER", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

      const toxicity = await Labtoxicityschema.find({
        createdAt: { $gte: startDate, $lte: endDate },
        edit : { $not: { $in: [ /DONE/i ] }},
      })
  
    if (results) {
      res.render("Inpatient/ernotdone", {
        inpatientarray: results,
        moment: moment,
        floor: "ER",
        firstname,
        lastname,
        num,toxicity
      });
    }
  })
);

//INPATIENT EXTRACT
router.get(
  "/excelin",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const find = await User.findOne({ _id: decoded.id });
    const results = find.infinddate;
    if (results.length > 0) {
      const response = JSON.parse(JSON.stringify(results));
      //CREATE NEW WORKBOOK
      const workbook = xlsx.utils.book_new();
      //CONVERT JSON ARRAY TO WORKSHEET
      const worksheet = xlsx.utils.json_to_sheet(response);
      //ADD WORKSHEET TO WORKBOOK
      xlsx.utils.book_append_sheet(workbook, worksheet, "Inpatient");
      //DOWNLOAD EXCEL FILE
      const filePath = 'uploads/InExtract/Inpatient.xlsx';
      xlsx.writeFile(workbook, filePath);
      res.download('uploads/InExtract/Inpatient.xlsx', 'Inpatient.xlsx', err => {console.log(err)})
    }
  })
);

//OUTPATIENT EXTRACT
router.get(
  "/excelout",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const find = await User.findOne({ _id: decoded.id });
    const results = find.outfinddate;

    if (results.length > 0) {
      const response = JSON.parse(JSON.stringify(results));
      //CREATE NEW WORKBOOK
      const workbook = xlsx.utils.book_new();
      //CONVERT JSON ARRAY TO WORKSHEET
      const worksheet = xlsx.utils.json_to_sheet(response);
      //ADD WORKSHEET TO WORKBOOK
      xlsx.utils.book_append_sheet(workbook, worksheet, "Outpatient");
      //DOWNLOAD EXCEL FILE
      const filePath = 'uploads/OutExtract/Outpatient.xlsx';
      xlsx.writeFile(workbook, filePath);
      res.download('uploads/OutExtract/Outpatient.xlsx', 'Outpatient.xlsx', err => {console.log(err)})
    }
  })
);

// OUPATIENT OVERVIEW
router.get(
  "/outpatient3",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
  
    
    const results = await Outpatient.find({
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("Outpatient/outpatient3", {
        outpatientarray: results,
        num,
        firstname,
        lastname,
        moment: moment,
      });
    }
  })
);

// OUTPATIENT DAYCARE
router.get(
  "/daycare",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      ptfloor: "DayCare",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Outpatient.find({
      ptfloor: "DayCare",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Outpatient/outpatientdaycare", {
        outpatientarray: results,
        moment: moment,
        floor: "DayCare", oral : "Oral",
        firstname,
        lastname,
        num,
      });
    }
  })
);

// OUTPATIENT DAYCARE NOT DONE
router.get(
  "/daycarenotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      ptfloor: "DayCare", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    
    const results = await Outpatient.find({
      ptfloor: "DayCare", prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Outpatient/outpatientdaycarenotdone.ejs", {
        outpatientarray: results,
        moment: moment,
        floor: "DayCare", oral : "Oral",
        firstname,
        lastname,
        num,
      });
    }
  })
);

// OUTPATIENT CLINIC HEMATOLOGY
router.get(
  "/clinich",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      ptfloor: "Clinic Hematology",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Outpatient.find({
      ptfloor: "Clinic Hematology",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Outpatient/outpatientclinich", {
        outpatientarray: results,
        moment: moment,
        floor: "Clinic Hematology", iv : "IV",
        firstname,
        lastname,
        num,
      });
    }
  })
);

// OUTPATIENT CLINIC HEMATOLOGY NOT DONE
router.get(
  "/clinichnotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      prepcomment: { $not: { $regex: "DONE" } },
      ptfloor: "Clinic Hematology",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Outpatient.find({
      prepcomment: { $not: { $regex: "DONE" } },
      ptfloor: "Clinic Hematology",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Outpatient/outpatientclinichnotdone", {
        outpatientarray: results,
        moment: moment,
        floor: "Clinic Hematology", iv : "IV",
        firstname,
        lastname,
        num,
      });
    }
  })
);

// OUTPATIENT CLINIC SOLID
router.get(
  "/clinics",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      ptfloor: "Clinic Solid",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Outpatient.find({
      ptfloor: "Clinic Solid",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    
    if (results) {
      res.render("Outpatient/outpatientclinics.ejs", {
        outpatientarray: results,
        moment: moment,
        floor: "Clinic Solid", iv : "IV",
        firstname,
        lastname,
        num,
      });
    }
  })
);

// OUTPATIENT CLINIC SOLID NOT DONE
router.get(
  "/clinicsnotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      prepcomment: { $not: { $regex: "DONE" } },
      ptfloor: "Clinic Solid",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Outpatient.find({
      prepcomment: { $not: { $regex: "DONE" } },
      ptfloor: "Clinic Solid",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Outpatient/outpatientclinicsnotdone", {
        outpatientarray: results,
        moment: moment,
        floor: "Clinic Hematology", iv : "IV",
        firstname,
        lastname,
        num,
      });
    }
  })
);

// OUTPATIENT SUPPORTIVE
router.get(
  "/supportive",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      ptfloor: "Supportive",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Outpatient.find({
      ptfloor: "Supportive",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);


    if (results) {
      res.render("Outpatient/outpatientsupportive", {
        outpatientarray: results,
        moment: moment,
        floor: "Supportive", 
        firstname,
        lastname,
        num,
      });
    }
  })
);

// OUTPATIENT SUPPORTIVE NOT DONE
router.get(
  "/supportivenotdone",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      prepcomment: { $not: { $regex: "DONE" } },
      ptfloor: "Supportive",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const results = await Outpatient.find({
      prepcomment: { $not: { $regex: "DONE" } },
      ptfloor: "Supportive",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);


    if (results) {
      res.render("Outpatient/outpatientsupportivenotdone", {
        outpatientarray: results,
        moment: moment,
        floor: "Supportive", 
        firstname,
        lastname,
        num,
      });
    }
  })
);

//IVPREP
router.get(
  "/ivprep",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    res.render("IvPrep/ivprep");
  })
);

//IVPREP INPATIENT
router.get(
  "/prepin",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    

    const outpatient = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const dispense = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    
    const results = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
      
    

    if (results) {
      res.render("IvPrep/ivprepin", {
        inarray: results,
        moment: moment,
        outpatient,
        dispense,
        num,
      });
    }
  })
);

//IVPREP INPATIENT EXTRADOSE
router.get(
  "/ed",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "IV",
      requestype: "ExtraDose",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const outpatient = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const dispense = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const inpatient = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      requestype: { $not: { $regex: "ExtraDose" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    
    const results = await Inpatientschema.find({
      oraliv: "IV",
      requestype: "ExtraDose",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("IvPrep/ivprepinextradose", {
        inarray: results,
        moment: moment,
        num,
        outpatient,
        dispense,inpatient,
      });
    }
  })
);

//IVPREP INPATIENT BMT
router.get(
  "/tpnview",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "IV",
      requestype: "TPN",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const outpatient = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const dispense = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });

    const inpatient = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      requestype: { $not: { $regex: "TPN" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
  
    const results = await Inpatientschema.find({
      oraliv: "IV",
      requestype: "TPN",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("IvPrep/ivprepinbmt", {
        inarray: results,
        moment: moment,
        outpatient,
        dispense,
        num,inpatient
      });
    }
  })
);

//IVPREP INPATIENT DONE VIEW
router.get(
  "/doneview",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const outpatient = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const dispense = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });

    const inpatient = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
    
    
    const results = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("IvPrep/ivprepindoneview", {
        inarray: results,
        moment: moment,inpatient,
        outpatient,
        dispense,num
      });
    }
  })
);

//IVPREP DISPENSE
router.get(
  "/prepdis",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const inarray = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const outpatient = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    
    const results = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("IvPrep/ivprepdis", {
        outarray: results,
        moment: moment,
        inarray,
        outpatient,
        num,
      });
    }
  })
);

//IVPREP DISPENSE DONE VIEW
router.get(
  "/ivprepdispensedoneview",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const dispense = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const outpatient = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const inarray = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
  
    const results = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("IvPrep/ivprepdispensedoneview", {
        disarray: results,
        moment: moment,
        outpatient,
        inarray,
        num,
        dispense,
      });
    }
  })
);

//IVPREP OUTPATIENT
router.get(
  "/prepout",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
  
    const dispense = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const inarray = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    
    const results = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("IvPrep/ivprepout", {
        outarray: results,
        moment: moment,
        inarray,
        dispense,
        num,
      });
    }
  })
);

//IVPREP OUTPATIENT  EXTRADOSE
router.get(
  "/edout",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      oraliv: "IV",
      requestype: "ExtraDose",
      prepcomment : { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const inarray = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const outpatient = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      requestype: { $not: { $regex: "ExtraDose" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const dispense = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
  
    const results = await Outpatient.find({
      oraliv: "IV",
      requestype: "ExtraDose",
      prepcomment : { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("IvPrep/ivprepoutextradose", {
        outarray: results,
        moment: moment,
        num,
        inarray,
        dispense,
        outpatient,
      });
    }
  })
);

//IVPREP OUTPATIENT DONE VIEW
router.get(
  "/doneviewout",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Outpatient.find({
      oraliv: "IV",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const inarray = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const outpatient = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const dispense = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    
    const results = await Outpatient.find({
      oraliv: "IV",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("IvPrep/ivprepoutdoneview", {
        outarray: results,
        moment: moment,
        inarray,
        dispense,
        num,
        outpatient,
      });
    }
  })
);

//PHARMACY LAB
router.get(
  "/lab",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Labschema.find({
      labcomment: { $not: { $in: [ /RECEIVED/i, /DELETED/i ] }},
      
    }).countDocuments()

    const limit = req.query.limit * 1 || 6;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const result = await Labschema.find({
      labcomment: { $not: { $in: [ /RECEIVED/i, /DELETED/i ] }},
      
    }).skip(skip).limit(limit)
      
    const results = result
    // .sort((a,b) => b.createdAt - a.createdAt).skip(skip).limit(limit);
      

    if (results) {
      res.render("Lab/lab.ejs", {
        labarray: results,
        moment: moment,
        num,
        page,
      });
    }
  })
);

//PHARMACY LAB RECEIVED VIEW
router.get(
  "/labreceivedview",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const results = await Labschema.find({ labcomment: "RECEIVED", updatedAt: { $gte: startDate, $lte: endDate }, }
      
    )
    if (results) {
      res.render("Lab/labreceivedview.ejs", {
        labarray: results,
        moment: moment,
      });
    }
  })
);

//LAB EXTRACT
router.get(
  "/excellab",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const find = await User.findOne({ _id: decoded.id });
    const results = find.labfinddate;

    if (results.length > 0) {
      const response = JSON.parse(JSON.stringify(results));
      //CREATE NEW WORKBOOK
      const workbook = xlsx.utils.book_new();
      //CONVERT JSON ARRAY TO WORKSHEET
      const worksheet = xlsx.utils.json_to_sheet(response);
      //ADD WORKSHEET TO WORKBOOK
      xlsx.utils.book_append_sheet(workbook, worksheet, "Lab");
      //DOWNLOAD EXCEL FILE
    const filePath = 'uploads/LabExtract/Lab.xlsx';
    xlsx.writeFile(workbook, filePath);
    res.download('uploads/LabExtract/Lab.xlsx', 'Lab.xlsx', err => {console.log(err)})
    }
  })
);

//PHARMACY LAB TOXICITY VIEW
router.get(
  "/labtoxicityview",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Labtoxicityschema.find({  
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments()

    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const result = await Labtoxicityschema.find({  
      createdAt: { $gte: startDate, $lte: endDate },
    }).skip(skip).limit(limit)
      
  
    if (result) {
      res.render("Lab/labtoxicityview.ejs", {
        labarray: result,
        moment: moment,
        num,
        page,
      });
    }
  })
);

//INPATIENT LAB TOXICITY
router.get(
  "/labtoxixity",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Labtoxicityschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments()

    const limit = req.query.limit * 1 || 6;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const result = await Labtoxicityschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    }).skip(skip).limit(limit)
    
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
  
    // .sort((a,b) => b.createdAt - a.createdAt).skip(skip).limit(limit);
      
    if (result) {
      res.render("Lab/labtoxicity.ejs", {
        labarray: result,
        moment: moment,
        num,
        page,firstname,lastname
      });
    }
  })
);

// DISPENSE OVERVIEW
router.get(
  "/dispense3",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Dispenseschema.find({
    
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const inarray = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });

    const pyxis = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    
    const results = await Dispenseschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("Dispense/dispense3", {
        dispensearray: results,
        moment: moment,
        outpatient,
        inarray,
        num,pyxis
      });
    }
  })
);

// DISPENSE INPATIENT
router.get(
  "/dispin",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
      
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
  
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });

    const pyxis = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });

    const results = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("Dispense/dispense3in", {
        dispensearray: results,
        moment: moment,
        num,
        outpatient,pyxis
      });
    }
  })
);

//DISPENSE INPATIENT EXTRADOSE
router.get(
  "/edindispense",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "Oral",
      requestype: "ExtraDose",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const inarray = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      requestype: { $not: { $regex: "ExtraDose" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const pyxis = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const results = await Inpatientschema.find({
      oraliv: "Oral",
      requestype: "ExtraDose",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Dispense/edindispense", {
        dispensearray: results,
        outpatient,
        inarray,
        num,
        moment: moment,pyxis
      });
    }
  })
);

//DISPENSE INPATIENT DISCHARGE
router.get(
  "/dischargeindispense",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "Oral",
      requestype: "DisCharge Medication",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const inarray = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      requestype: { $not: { $regex: "DisCharge Medication" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const pyxis = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    
    const results = await Inpatientschema.find({
      oraliv: "Oral",
      requestype: "DisCharge Medication",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Dispense/dischargeindispense", {
        dispensearray: results,
        inarray,
        outpatient,
        moment: moment,pyxis,
        num,
      });
    }
  })
);

//DISPENSE INPATIENT DONE VIEW
router.get(
  "/dispensedoneviewin",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const inarray = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });

    const pyxis = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
  
    const results = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Dispense/doneviewindispense", {
        dispensearray: results,
        moment: moment,
        num,
        outpatient,
        inarray,pyxis
      });
    }
  })
);

// DISPENSE OUTPATIENT
router.get("/dispout", checkIfUser, requireAuth, async (req, res) => {
  const date = moment().format("YYYY-MM-DD");
  const startDate = `${date}T00:00:00.000+00:00`;
  const endDate = `${date}T23:59:59.000+00:00`;
  const num = await Outpatient.find({
    oraliv: "Oral",
    prepcomment: { $not: { $regex: "DONE" } },
    createdAt: { $gte: startDate, $lte: endDate },
  }).countDocuments();
  const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
  

  const inarray = await Inpatientschema.find({
    oraliv: "Oral",
    prepcomment: { $not: { $regex: "DONE" } },
    createdAt: { $gte: startDate, $lte: endDate },
  })

  const pyxis = await Inpatientschema.find({
    oraliv: "Pyxis",
    prepcomment: { $not: { $regex: "DONE" } },
    createdAt: { $gte: startDate, $lte: endDate },
  });

  const results = await Outpatient.find({
    oraliv: "Oral",
    prepcomment: { $not: { $regex: "DONE" } },
    createdAt: { $gte: startDate, $lte: endDate },
  }).skip(skip)
  .limit(limit);
  
  if (results) {
    res.render("Dispense/dispense3out", {
      dispensearray: results,
      moment: moment,
      num,
      inarray,pyxis
    });
  }
});

//DISPENSE VIEW DELETE
router.get("/viewdis/:id", checkIfUser, requireAuth, (req, res) => {
  Dispenseschema.findById(req.params.id)
    .then((result) => {
      res.render("Dispense/dispense4", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

//DISPENSE EXTRACT
router.get(
  "/exceldis",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const find = await User.findOne({ _id: decoded.id });
    const results = find.disfinddate;

    if (results.length > 0) {
      const response = JSON.parse(JSON.stringify(results));
      //CREATE NEW WORKBOOK
      const workbook = xlsx.utils.book_new();
      //CONVERT JSON ARRAY TO WORKSHEET
      const worksheet = xlsx.utils.json_to_sheet(response);
      //ADD WORKSHEET TO WORKBOOK
      xlsx.utils.book_append_sheet(workbook, worksheet, "Dispense");
      //DOWNLOAD EXCEL FILE
      const filePath = 'uploads/DispExtract/Dispense.xlsx';
      xlsx.writeFile(workbook, filePath);
      res.download('uploads/DispExtract/Dispense.xlsx', 'Dispense.xlsx', err => {console.log(err)})
    }
  })
);

//PYXIS TRADE
router.get(
  "/pyxismed",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;
    const results = await PyxisTrade.find();
    const num = await PyxisTrade.find().countDocuments();
    if (results) {
      res.render("Pyxis/pyxismed.ejs", { results, num });
    }
  })
);

// PYXIS VIEW
router.get(
  "/pyxisview",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
  
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });

    
    const inpatient = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })

    const pyxis = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (pyxis) {
      res.render("Dispense/dispensepyxis", {
        pyxisarray: pyxis,
        moment: moment,
        num, inpatient,
        outpatient,
      });
    }
  })
);

//PYXIS DONE VIEW
router.get(
  "/pyxisdoneview",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;

    const num = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const inarray = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const pyxis = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const results = await Inpatientschema.find({
      oraliv: "Pyxis",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Dispense/pyxisdoneview", {
        pyxisarray: results,
        moment: moment,
        num,
        outpatient,
        inarray,pyxis
      });
    }
  })
);

//PYXIS REFILL
router.get(
  "/pyxisrefill",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "Pyxis",
      requestype: { $in : [ /Refill/i , /Pyxis Refill/i] } ,
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)

    const results = await Inpatientschema.find({
      oraliv: "Pyxis",
      requestype: { $in : [ /Refill/i , /Pyxis Refill/i] } ,
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    const inarray = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const pyxis = await Inpatientschema.find({
      oraliv: "Pyxis",
      requestype: { $not: { $regex: "Refill" } },
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
  

    if (results) {
      res.render("Dispense/pyxisrefill", {
        pyxisarray: results,
        outpatient,
        inarray,
        num,
        moment: moment,pyxis
      });
    }
  })
);

//PYXIS PRODUCT ASSGIN
router.get(
  "/pyxisproductassgin",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      oraliv: "Pyxis",
      requestype: "Product Assign",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    
    const inarray = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const pyxis = await Inpatientschema.find({
      oraliv: "Pyxis",
      requestype: { $not: { $regex: "Product Assign" } },
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });
    
    const results = await Inpatientschema.find({
      oraliv: "Pyxis",
      requestype: "Product Assign",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
console.log(results);
    if (results) {
      res.render("Dispense/pyxisproduct", {
        pyxisarray: results,
        inarray,
        outpatient,
        moment: moment,pyxis,
        num,
      });
    }
  })
);

// NURSE OVERVIEW
router.get(
  "/nurse",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+03:00`;
    const endDate = `${date}T23:59:59.000+03:00`;
    const num = await Inpatientschema.find({
      requestype : { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const limit = req.query.limit * 1 || 9;
    const page = req.query.page * 1 || Math.ceil(num / limit);
    const sk = (page - 1) * limit
    const skip = Math.abs(sk)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
  
    
    const results = await Inpatientschema.find({
      requestype : { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("Nurse/nurse", {
        nursearray: results,
        num,
        firstname,
        lastname,
        moment: moment,
      });
    }
  })
);



// ---------------------------------
//POST REQUEST
// ----------------------------------

//L&D SEARCH
router.post(
  "/ldsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const custmer = await User.findByIdAndUpdate(
      { _id: decoded.id },
      { $set: { ldsearch: req.body } }
    );
    if (custmer) {
      res.redirect("/admin");
    }
  })
);

// Register USER
router.post(
  "/adduser",
  [
    // check("email", "Please provide a valid email").isEmail(),
    check(
      "password",
      "Password must be at least 8 characters with 1 upper case letter and 1 number"
    ).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
  ],
  asyncHandler(async (req, res, next) => {
    const usercode = await User.findOne({ code: req.body.code });
    if (usercode) {
      return res.json({ codeexist: "The Code Is Already Existing" });
    }

    const useremail = await User.findOne({ email: req.body.email });
    if (useremail) {
      return res.json({ emailexist: "The Email Is Already Existing" });
    }

    const objError = validationResult(req);
    if (!objError.isEmpty()) {
      return res.json({ validationerrors: objError.errors });
    }

    const confirmPassword = req.body.cpassword;

    const { password } = req.body;
    const { email } = req.body;

    if (password !== confirmPassword) {
      return res.json({ passwordnotmatch: "Password Not Match" });
    }

    // if (!email.includes("@57357.org")) {
    //   return res.json({ invalidemail: "Invalid Email"})
    // }


    const newUser = await User.create(req.body);
    const token = jwt.sign({ id: newUser._id }, process.env.JWTSECRET_KEY);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });

    const newUserRequest = req.body;
    const validationCode = Math.floor(Math.random() * 900000).toString();
    const hashedResetCode = crypto
      .createHash("sha256")
      .update(validationCode)
      .digest("hex");
    newUser.verificationcode = hashedResetCode;
    newUser.verificationcodeExpire = Date.now() + 10 * 60 * 1000;
    newUser.verificationcodeVerified = false;
    await newUser.save({ validateBeforeSave: false });
    const message = `HI ${newUserRequest.email.split(".")[0]},\n One Step For your PharmacyConnct Account. \n ${validationCode} \n Enter this code to complete Registiration. \n THANKS \n PharmacyConnect Support Team`;
    try {
      await sendEmail({
        email: newUserRequest.email,
        subject: "Your password Reset Code Valid For 10min",
        message,
      });
    } catch (error) {
      newUser.verificationcode = undefined;
      newUser.verificationcodeExpire = undefined;
      newUser.verificationcodeVerified = undefined;
      await newUser.save({ validateBeforeSave: false });
      return next(new ApiError("Ther is an error ending email", 500));
    }

    res.status(201).json({ user: newUser });
  })
);



// ACTIVATION
// router.post(
//   "/activation",
//   asyncHandler(async (req, res, next) => {
//     const usercode = await User.findOne({ code: req.body.code });
  

//     const newUserRequest = req.body;
//     const validationCode = Math.floor(Math.random() * 900000).toString();
//     const hashedResetCode = crypto
//       .createHash("sha256")
//       .update(validationCode)
//       .digest("hex");
//       usercode.verificationcode = hashedResetCode;
//       usercode.verificationcodeExpire = Date.now() + 10 * 60 * 1000;
//       usercode.verificationcodeVerified = false;
//     await usercode.save({ validateBeforeSave: false });
//     const message = `HI ${newUserRequest.email.split(".")[0]},\n One Step For your PharmacyConnct Account. \n ${validationCode} \n Enter this code to complete Registiration. \n THANKS \n PharmacyConnect Support Team`;
//     try {
//       await sendEmail({
//         email: newUserRequest.email,
//         subject: "Your password Reset Code Valid For 10min",
//         message,
//       });
//     } catch (error) {
//       usercode.verificationcode = undefined;
//       usercode.verificationcodeExpire = undefined;
//       usercode.verificationcodeVerified = undefined;
//       await usercode.save({ validateBeforeSave: false });
//       return next(new ApiError("Ther is an error ending email", 500));
//     }

//     res.status(201).json({ user: usercode });
//   })
// );


//LOGIN CHECK
router.post(
  "/checklogin",
  [check("code").isNumeric()],
  asyncHandler(async (req, res) => {
    const objError = validationResult(req);
    if (!objError.isEmpty()) {
      return res.json({ validationerrors: objError.errors });
    }

    const loginuser = await User.findOne({ code: req.body.code });

    if (!loginuser) {
      return res.json({ codenotfound: "You Are Not Registered" });
    }

      if (loginuser.active === false) {
      return res.json({ inactiveuser: "You Are Not Authorized" });
    }

    const match = await bcrypt.compare(req.body.password, loginuser.password);
    if (!match) {
      return res.json({ wrongpassword: "Wrong Password" });
    }
    if (match) {
      const token = jwt.sign({ id: loginuser._id }, process.env.JWTSECRET_KEY);
      res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
      res.json({ loginuser: loginuser });
    }
  })
);

//Forget Password
router.post(
  "/forgetpassword",
  asyncHandler(async (req, res, next) => {
    const loginuser = await User.findOne({ code: req.body.code });
    if (!loginuser) {
      return res.json({ status: "User Not Found" });
    }
    if (loginuser) {
      const resstCode = Math.floor(Math.random() * 900000).toString();
      const hashedResetCode = crypto
        .createHash("sha256")
        .update(resstCode)
        .digest("hex");
      loginuser.passwordResetCode = hashedResetCode;
      loginuser.passwordResetExpire = Date.now() + 10 * 60 * 1000;
      loginuser.passwordResetVerified = false;
      await loginuser.save({ validateBeforeSave: false });
      const message = `HI ${loginuser.firstname},\n We received a request to reset the password on your PharmacyConnct Account. \n ${resstCode} \n Enter this code to complete the reset. \n THANKS \n PharmacyConnect Support Team`;
      try {
        await sendEmail({
          email: loginuser.email,
          subject: "Your password Reset Code Valid For 10min",
          message,
        });
      } catch (error) {
        loginuser.passwordResetCode = undefined;
        loginuser.passwordResetExpire = undefined;
        loginuser.passwordResetVerified = undefined;
        await loginuser.save({ validateBeforeSave: false });
        return next(new ApiError("Ther is an error ending email", 500));
      }
      return res.json({ loginuser });
    }
  })
);

//VERIFIY RESET CODE
router.post(
  "/verifiyresetcode",
  asyncHandler(async (req, res, next) => {
    const hashedResetCode = crypto
      .createHash("sha256")
      .update(req.body.resetcode)
      .digest("hex");
    const user = await User.findOne({
      passwordResetCode: hashedResetCode,
      passwordResetExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.json({ message: "ResetCode Didn't Match Or Expired" });
    }

    if (user) {
      user.passwordResetVerified = true;
      await user.save();
      res.json({ verified: "verified", user });
    }
  })
);

//VERIFIY User
router.post(
  "/verifiyuser",
  asyncHandler(async (req, res,) => {
    const hashedResetCode = crypto
      .createHash("sha256")
      .update(req.body.verifiycode)
      .digest("hex");
    const user = await User.findOne({
      verificationcode: hashedResetCode,
      verificationcodeExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.json({ message: "VerificationCode Didn't Match Or Expired" });
    }

    if (user) {
      user.verificationcodeVerified = true;
      user.active = true;
      await user.save();
      res.json({ verified: "verified", user });
    }
  })
);

// CHANGE IMAGE POST REQUEST
router.post(
  "/updateavatar",
  uploadSingleImage("updateprofile"),
// upload.single("updateprofile"),
  profileimage,
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    console.log(req.file);
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      // { profileimage: req.file.filename }
      { profileimage: req.body.updateprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

//WATCH LIST
router.post(
  "/watchform",
  [
    check("message").notEmpty(),
    check("dome").notEmpty(),
    check("ptfloor").notEmpty(),
    check("patientmrn").isNumeric().trim(),
    check("nightpharmacist").notEmpty(),
  ],
  asyncHandler(async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ validationerrors: error.errors });
    }

    const patient = await Newpatient.findOne({
      addpatientmrn: req.body.patientmrn,
    });

    if (patient == null) {
      return res.json({ nopatientmrn: "Patient not found" });
    }

    const patientname = patient.addpatientname;
    req.body.patientname = patientname;

    const number = Math.random() * 10000;
    req.body.detector = number;
    const night = req.body.nightpharmacist;
    const pharmacist = night.split("/")[1];
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const currentUserid = decoded.id;
    const currentUser = await User.findOneAndUpdate(
      { _id: currentUserid },
      {
        $push: {
          watchsender: {
            nightpharmacist: req.body.nightpharmacist,
            ptname: req.body.patientname,
            comment: req.body.comment,
            ptmrn: req.body.patientmrn,
            message: req.body.message,
            high: req.body.high,
            medium: req.body.medium,
            floor: req.body.ptfloor,
            dome: req.body.dome,
            detector: req.body.detector,
            createdAt: new Date(),
          },
        },
      }
    );
    const watch = await User.findOneAndUpdate(
      { code: pharmacist },
      {
        $push: {
          watchreceiver: {
            nightpharmacist: req.body.nightpharmacist,
            comment: req.body.comment,
            ptname: req.body.patientname,
            ptmrn: req.body.patientmrn,
            message: req.body.message,
            high: req.body.high,
            medium: req.body.medium,
            floor: req.body.ptfloor,
            dome: req.body.dome,
            sendername: req.body.sendername,
            detector: req.body.detector,
            createdAt: new Date(),
          },
        },
      }
    );
    res.json({ created: watch });
  })
);

//PYXIS MEDICATION SUBMIT
router.post(
  "/medsubmit",
  [check("generic").notEmpty()],
  asyncHandler(async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ validationerrors: error.errors });
    }
    const results = await PyxisTrade.create(req.body);
    if (results) {
      res.json({ created: results });
    }
  })
);

// AVATAR SELECTION
router.post(
  "/avatarselection1",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-1.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.findByIdAndUpdate(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection2",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-2.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection3",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-3.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection4",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-4.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection5",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-5.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection6",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-6.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection7",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-7.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection8",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-8.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection9",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-9.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection10",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-10.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection11",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-11.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection12",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-12.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection13",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-13.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection14",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-14.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection15",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-15.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection16",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-16.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection17",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-17.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection18",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-18.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection19",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-19.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection20",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-20.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection21",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-21.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection22",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-22.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection23",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-23.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection24",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-24.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection25",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-25.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection26",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-26.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection27",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-27.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection28",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-28.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection29",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-29.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection30",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-30.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection31",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-31.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection32",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-32.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection33",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-33.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection34",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-34.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection35",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-35.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection36",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-36.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection37",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-37.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection38",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-38.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection39",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-39.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection40",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-40.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection41",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-41.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection42",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-42.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection43",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-43.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection44",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-44.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection45",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-45.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection46",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-46.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection47",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-47.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection48",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-48.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection49",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-49.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection50",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-50.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection51",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-51.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection52",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-52.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);
router.post(
  "/avatarselection53",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-53.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect("/login");
    }
  })
);


// UPDATE AVATAR
router.post(
  "/avatar1",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-1.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.findByIdAndUpdate(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar2",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-2.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar3",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-3.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar4",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-4.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar5",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-5.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar6",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-6.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar7",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-7.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar8",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-8.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar9",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-9.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar10",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-10.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar11",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-11.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar12",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-12.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar13",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-13.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar14",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-14.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar15",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-15.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar16",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-16.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar17",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-17.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar18",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-18.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar19",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-19.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar20",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-20.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar21",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-21.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar22",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-22.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar23",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-23.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar24",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-24.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar25",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-25.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
)
;router.post(
  "/avatar26",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-26.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar27",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-27.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar28",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-28.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar29",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-29.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar30",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-30.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar31",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-31.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar32",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-32.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar33",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-33.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar34",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-34.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar35",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-35.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar36",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-36.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar37",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-37.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar38",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-38.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar39",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-39.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar40",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-40.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar41",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-41.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar42",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-42.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar43",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-43.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar44",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-44.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar45",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-45.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar46",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-46.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar47",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-47.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar48",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-48.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar49",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-49.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar50",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-50.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar51",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-51.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar52",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-52.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
router.post(
  "/avatar53",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-53.png";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.inputprofile }
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);
// router.post("/avatarselection24", checkIfUser, requireAuth, (req, res) => {
//   cloudinary.uploader.upload(
//     "./public/img/Avatar/Untitled-1-25.png",
//     { folder: "PharmacyConnect/AVATAR" },
//     async (error, result) => {
//       if (result) {
//         const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
//         await User.updateOne(
//           { _id: decoded.id },
//           { profileimage: result.secure_url }
//         );
//         res.redirect("/login");
//       } else {
//         console.log(error);
//       }
//     }
//   );
// });

// INPATIENT ADD PATIENT

router.post(
  "/add_patient_in",
  [
    check("oraliv").notEmpty(),
    check("requestype").notEmpty(),
    check("ptfloor").notEmpty(),
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    const mrn = req.body.mrn
  
    if (mrn === "") {
      return res.json({ mrninempty: "You Must Enter This Field" });
    }
    
    if (mrn.match(/[a-zA-z]/)){
      return res.json({ mrnnotnumber: "Please Enter A Valid MRN" });
    }
    
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.mrn });
    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }
    
    
    if (patient) {
      req.body.patientname = patient.addpatientname;
    }

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    req.body.commentime = moment()
    req.body.commentime2 = moment()

    const inpatientAddpatient = await Inpatientschema.create(req.body);
    res.json({ inpatient_add_patient: inpatientAddpatient });
    
})
)
;

// INPATIENT ADD PATIENT
router.post(
  "/add_stat_in",
  [
    check("ptfloor").notEmpty(),
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    const mrn = req.body.mrn
  
    if (mrn === "") {
      return res.json({ mrninempty: "You Must Enter This Field" });
    }
    
    if (mrn.match(/[a-zA-z]/)){
      return res.json({ mrnnotnumber: "Please Enter A Valid MRN" });
    }
    
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.mrn });
    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }
    
    
    if (patient) {
      req.body.patientname = patient.addpatientname;
    }

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    req.body.commentime = moment()
    req.body.commentime2 = moment()

    const inpatientAddpatient = await Inpatientschema.create(req.body);
    res.json({ inpatient_add_patient: inpatientAddpatient });
  })
);

// INPATIENT ADD NEW PATIENT
router.post(
  "/addnewpatient",
  [check("addpatientname").notEmpty()],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const patient = await Newpatient.findOne({
      addpatientmrn: req.body.addpatientmrn,
    });

    if (patient) {
      return res.json({ patientexist: "This Patient Is Already Exist" });
    }
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }
    if (!patient) {
      await Newpatient.create(req.body);
      res.json({ done: "Patient Added" });
    }
  })
);

// UPDATE PATIENT
router.post(
  "/updatepatient",
  [check("addpatientname2").notEmpty()],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    const mrn = req.body.addpatientmrn2
  
    if (mrn === "") {
      return res.json({ mrnupdateempty: "You Must Enter This Field" });
    }
    
    if (mrn.match(/[a-zA-z]/)){
      return res.json({ mrnupdatenumber: "Please Enter A Valid MRN" });
    }
    
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.addpatientmrn2 });
    if (patient == null) {
      return res.json({ noupdatepatient: "This Patient Not Found" });
    }

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }
    
    
    if (patient) {
      await Newpatient.findOneAndUpdate({ addpatientmrn: req.body.addpatientmrn2 }, {addpatientname : req.body.addpatientname2});
      res.json({ done: "Patient Added" });
    }

  })
);

// INPATIENT ADD LAB PATIENT
router.post(
  "/add_lab_in",
  [check("mrnlab").isNumeric()],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const validationerrors = validationResult(req);

    if (!validationerrors.isEmpty()) {
      return res.json({ errors: validationerrors.errors });
    }

    const patient = await Newpatient.findOne({
      addpatientmrn: req.body.mrnlab,
    });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.labpatientname = patient.addpatientname;
    }

    if (req.body.labptfloor === "Choose...") {
      return res.json({ nolabptfloor: "You Must Enter This Field" });
    }

    if (req.body.labrequestype === "Choose...") {
      return res.json({ nolabrequestype: "You Must Enter This Field" });
    }

    if (req.body.levelrequestreason === "") {
      return res.json({ levelrequestreasonempty: "You Must Enter This Field" });
    }

    const labAddpatient = await Labschema.create(req.body);
    res.json({ lab_add_patient: labAddpatient });
  })
);

// floor ADD LAB PATIENT
router.post(
  "/add_lab_floor",
  [check("mrnlab").isNumeric()],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const validationerrors = validationResult(req);

    if (!validationerrors.isEmpty()) {
      return res.json({ errors: validationerrors.errors });
    }

    const patient = await Newpatient.findOne({
      addpatientmrn: req.body.mrnlab,
    });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.labpatientname = patient.addpatientname;
    }

    if (req.body.labrequestype === "Choose...") {
      return res.json({ nolabrequestype: "You Must Enter This Field" });
    }

    if (req.body.levelrequestreason === "") {
      return res.json({ levelrequestreasonempty: "You Must Enter This Field" });
    }

    const labAddpatient = await Labschema.create(req.body);
    res.json({ lab_add_patient: labAddpatient });
  })
);

// INPATIENT POST SEARCH
router.post(
  "/inpatientsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim();
    const date = moment().format("YYYY-MM-DD");
    const startDate = date + "T00:00:00.000+00:00";
    const endDate = date + "T23:59:59.000+00:00";
    const result = await Inpatientschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const results = result.filter( item => item.mrn.match(req.body.searchText))
    console.log(results)

    res.render("Inpatient/inpatientsearch", { array: results, moment: moment });
  })
);

// INPATIENT SEARCH DATE
router.post(
  "/findDateForm",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const sdate = req.body.sDate;
    const edate = req.body.eDate;
    const startDate = sdate + "T00:00:00.000+03:00";
    const endDate = edate + "T23:59:59.000+03:00";
    const results = await Inpatientschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });
    if (results === undefined) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { infinddate: [] } }
      );
    }

    if (results) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { infinddate: results } }
      );
    }

    if (results) {
      res.render("Inpatient/inpatientfinddate.ejs", {
        searcharray: results,
        moment: moment,
      });
    }
  })
);

// INPATIENT LAB TOXICITY SEARCH
router.post(
  "/inlabtoxicitysearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim();
    const date = moment().format("YYYY-MM-DD");
    const startDate = date + "T00:00:00.000+00:00";
    const endDate = date + "T23:59:59.000+00:00";
    const result = await Labtoxicityschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const results = result.filter( item => item.mrn.match(req.body.searchText))
    console.log(results)

    res.render("Inpatient/inpatientsearchtoxicity", { array: results, moment: moment });
  })
);

// INPATIENT FIND DATE SEARCH
router.post(
  "/inpatientfinddatesearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim();
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({_id : decoded.id})
    const find = user.infinddate.filter( item => item.mrn.match(searchText))
  

    res.render("Inpatient/inpatientfinddate.ejs", { searcharray: find, moment: moment });
  })
);

// INPATIENT/PREP POST SEARCH
router.post("/inpatientprepsearch", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const searchText = req.body.searchText.trim();
  const date = moment().format("YYYY-MM-DD");
  const startDate = date + "T00:00:00.000+03:00";
  const endDate = date + "T23:59:59.000+03:00";
  const result = await Inpatientschema.find({createdAt: { $gte: startDate, $lte: endDate }})
  const find = result.filter( item => item.mrn.match(searchText))
  if (find) {
    res.render("IvPrep/ivprepinsearch", { array: find, moment: moment });
  }  
}))



// OUTPATIENT POST REQUEST
router.post("/outpt2", checkIfUser, requireAuth, (req, res) => {
  Outpatient.create(req.body)
    .then(() => {
      res.redirect("/outpatient2");
    })
    .catch((err) => {
      console.log(err);
    });
});

// OUTPATIENT SEARCH DATE
router.post(
  "/findDateOut",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const sdate = req.body.sDate;
    const edate = req.body.eDate;
    const startDate = sdate + "T00:00:00.000+03:00";
    const endDate = edate + "T23:59:59.000+03:00";
    const results = await Outpatient.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });

    if (results === undefined) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { outfinddate: [] } }
      );
    }

    if (results) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { outfinddate: results } }
      );
    }

    if (results) {
      res.render("Outpatient/outpatientfinddate.ejs", {
        searcharray: results,
        moment: moment,
      });
    }
  })
);

// OUTPATIENT ADD PATIENT
router.post(
  "/add_patient_out",
  [
    check("oraliv").notEmpty(),
    check("requestype").notEmpty(),
    check("ptfloor").notEmpty(),
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    const mrn = req.body.mrn
  
    if (mrn === "") {
      return res.json({ mrnoutempty: "You Must Enter This Field" });
    }
    
    if (mrn.match(/[a-zA-z]/)){
      return res.json({ mrnnotnumber: "Please Enter A Valid MRN" });
    }
  
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.mrn });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.patientname = patient.addpatientname;
    }


    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    req.body.commentime = moment()
    req.body.commentime2 = moment()

    const outpatientAddpatient = await Outpatient.create(req.body);
    res.json({ outpatient_add_patient: outpatientAddpatient , patient : patient.addpatientname });
  })
);

// OUTPATIENT DAYCARE ADD PATIENT
router.post(
  "/add_patient_out_daycare",
  [
    check("oraliv").notEmpty(),
    check("requestype").notEmpty(),
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    const mrn = req.body.mrn
  
    if (mrn === "") {
      return res.json({ mrnoutempty: "You Must Enter This Field" });
    }
    
    if (mrn.match(/[a-zA-z]/)){
      return res.json({ mrnnotnumber: "Please Enter A Valid MRN" });
    }
  
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.mrn });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.patientname = patient.addpatientname;
    }


    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    req.body.commentime = moment()
    req.body.commentime2 = moment()

    const outpatientAddpatient = await Outpatient.create(req.body);
    res.json({ outpatient_add_patient: outpatientAddpatient });
  })
);

// OUTPATIENT CLINIC HEMATOLOGY ADD PATIENT
router.post(
  "/add_patient_out_clinich",
  [
    check("oraliv").notEmpty(),
    check("requestype").notEmpty(),
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    const mrn = req.body.mrn
  
    if (mrn === "") {
      return res.json({ mrnoutempty: "You Must Enter This Field" });
    }
    
    if (mrn.match(/[a-zA-z]/)){
      return res.json({ mrnnotnumber: "Please Enter A Valid MRN" });
    }
  
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.mrn });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.patientname = patient.addpatientname;
    }


    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    req.body.commentime = moment()
    req.body.commentime2 = moment()

    const outpatientAddpatient = await Outpatient.create(req.body);
    res.json({ outpatient_add_patient: outpatientAddpatient });
  })
);

// OUTPATIENT CLINIC SOLID ADD PATIENT
router.post(
  "/add_patient_out_clinics",
  [
    check("oraliv").notEmpty(),
    check("requestype").notEmpty(),
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    const mrn = req.body.mrn
  
    if (mrn === "") {
      return res.json({ mrnoutempty: "You Must Enter This Field" });
    }
    
    if (mrn.match(/[a-zA-z]/)){
      return res.json({ mrnnotnumber: "Please Enter A Valid MRN" });
    }
  
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.mrn });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.patientname = patient.addpatientname;
    }


    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    req.body.commentime = moment()
    req.body.commentime2 = moment()

    const outpatientAddpatient = await Outpatient.create(req.body);
    res.json({ outpatient_add_patient: outpatientAddpatient });
  })
);

// OUTPATIENT SUPPORTIVE ADD PATIENT
router.post(
  "/add_patient_out_supportive",
  [
    check("oraliv").notEmpty(),
    check("requestype").notEmpty(),
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    const mrn = req.body.mrn
  
    if (mrn === "") {
      return res.json({ mrnoutempty: "You Must Enter This Field" });
    }
    
    if (mrn.match(/[a-zA-z]/)){
      return res.json({ mrnnotnumber: "Please Enter A Valid MRN" });
    }
  
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.mrn });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.patientname = patient.addpatientname;
    }


    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    req.body.commentime = moment()
    req.body.commentime2 = moment()

    const outpatientAddpatient = await Outpatient.create(req.body);
    res.json({ outpatient_add_patient: outpatientAddpatient });
  })
);

// OUTPATIENT ADD LAB PATIENT
router.post(
  "/add_lab_out",
  [check("mrnlab").isNumeric()],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const validationerrors = validationResult(req);

    if (!validationerrors.isEmpty()) {
      return res.json({ errors: validationerrors.errors });
    }

    const patient = await Newpatient.findOne({
      addpatientmrn: req.body.mrnlab,
    });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.labpatientname = patient.addpatientname;
    }

    if (req.body.labptfloor === "Choose...") {
      return res.json({ nolabptfloor: "You Must Enter This Field" });
    }

    if (req.body.labrequestype === "Choose...") {
      return res.json({ nolabrequestype: "You Must Enter This Field" });
    }

    if (req.body.levelrequestreason === "") {
      return res.json({ levelrequestreasonempty: "You Must Enter This Field" });
    }

    const labAddpatient = await Labschema.create(req.body);
    res.json({ lab_add_patient: labAddpatient });
  })
);

// OUTPATIENT POST SEARCH
router.post("/outpatientsearch", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const searchText = req.body.searchText.trim();
  const date = moment().format("YYYY-MM-DD");
  const startDate = date + "T00:00:00.000+03:00";
  const endDate = date + "T23:59:59.000+03:00";
  const result = await Outpatient.find( {createdAt: { $gte: startDate, $lte: endDate } })
  const find = result.filter( item => item.mrn.match(searchText))
if (find) {
  res.render("Outpatient/outpatientsearch.ejs", {array : find, moment: moment})
}
}) );

// OUTPATIENT FIND DATE SEARCH
router.post(
  "/outpatientfindsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim();
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({_id : decoded.id})
    const find = user.outfinddate.filter( item => item.mrn.match(searchText))
  

    res.render("Outpatient/outpatientfinddate.ejs", { searcharray: find, moment: moment });
  })
);

// OUTPATIENT/PREP POST SEARCH
router.post("/outpatientprepsearch", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const searchText = req.body.searchText.trim();
  const date = moment().format("YYYY-MM-DD");
  const startDate = date + "T00:00:00.000+03:00";
  const endDate = date + "T23:59:59.000+03:00";
  const result = await Outpatient.find({createdAt: { $gte: startDate, $lte: endDate }})
  const find = result.filter(item => item.mrn.match(searchText))
  if (find) {
    res.render("IvPrep/ivprepoutsearch", { array: result, moment: moment });
  }
}) );

// DISPENSE ADD PATIENT
router.post(
  "/add_patient_dis",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.mrn });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.patientname = patient.addpatientname;
    }

    if (req.body.oraliv === "Choose....") {
      return res.json({ oraliv: "You Must Enter This Field" });
    }

    req.body.commentime = moment()
    req.body.commentime2 = moment()

    const dispenseAddpatient = await Dispenseschema.create(req.body);
    res.json({ dispense_add_patient: dispenseAddpatient });
  })
);

// DISPENSE ADD NEW PATIENT
router.post(
  "/addnewpatientdispense",
  [check("addpatientname").notEmpty()],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const patient = await Newpatient.findOne({
      addpatientmrn: req.body.addpatientmrn,
    });
    if (patient) {
      return res.json({ patientexist: "This Patient Is Already Exist" });
    }
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    if (!patient) {
      await Newpatient.create(req.body);
      res.json({ done: "Patient Added" });
    }
  })
);

// DISPENSE POST SEARCH
router.post(
  "/dispensesearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim();
    const date = moment().format("YYYY-MM-DD");
    const startDate = date + "T00:00:00.000+03:00";
    const endDate = date + "T23:59:59.000+03:00";
    const result = await Dispenseschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const find = result.filter( item => item.mrn.match(searchText))

    res.render("Dispense/dispensesearch", { array: find, moment: moment });
  })
);

// DISPENSE SEARCH DATE
router.post(
  "/findDateFormdispense",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const sdate = req.body.sDate;
    const edate = req.body.eDate;
    const startDate = sdate + "T00:00:00.000+03:00";
    const endDate = edate + "T23:59:59.000+03:00";
    const results = await Dispenseschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });

    if (results === undefined) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { disfinddate: [] } }
      );
    }

    if (results) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { disfinddate: results } }
      );
    }
    if (results) {
      res.render("Dispense/dispensefinddate.ejs", {
        searcharray: results,
        moment: moment,
      });
    }
  })
);

// DISPENSE INPATIENT SEARCH
router.post(
  "/dispenseinsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim();
    const date = moment().format("YYYY-MM-DD");
    const startDate = date + "T00:00:00.000+03:00";
    const endDate = date + "T23:59:59.000+03:00";
    const result = await Inpatientschema.find({
      oraliv : "Oral" ,
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const find = result.filter( item => item.mrn.match(searchText))


    res.render("Dispense/dispenseinsearch", { array: find, moment: moment });
  })
);

// DISPENSE PYXIS SEARCH
router.post(
  "/dispensepyxissearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim();
    const date = moment().format("YYYY-MM-DD");
    const startDate = date + "T00:00:00.000+03:00";
    const endDate = date + "T23:59:59.000+03:00";
    const result = await Inpatientschema.find({
      oraliv : "Pyxis" ,
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const find = result.filter( item => item.mrn.match(searchText))


    res.render("Dispense/dispensepyxissearch", { array: find, moment: moment });
  })
);

// DISPENSE/PREP POST SEARCH
router.post("/dispenseprepsearch", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const searchText = req.body.searchText.trim();
  const date = moment().format("YYYY-MM-DD");
  const startDate = date + "T00:00:00.000+03:00";
  const endDate = date + "T23:59:59.000+03:00";
  const result = await Dispenseschema.find({createdAt: { $gte: startDate, $lte: endDate }})
  const find = result.filter( item => item.mrn.match(searchText))
  console.log(find)

  if (find) {
    res.render("IvPrep/ivprepdissearch", { array: find, moment: moment });
  }  
  
}))

// LAB TOXICITY
router.post(
  "/add_lab_toxicity",
  [
    check("druglevel").notEmpty(),
    check("drugname").notEmpty(),
    check("ptfloor").notEmpty(),
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const mrn = req.body.mrn
  
    if (mrn === "") {
      return res.json({ mrnlabempty: "You Must Enter This Field" });
    }
    
    if (mrn.match(/[a-zA-z]/)){
      return res.json({ mrnnotnumber: "Please Enter A Valid MRN" });
    }

    const patient = await Newpatient.findOne({
      addpatientmrn: req.body.mrn,
    });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.patientname = patient.addpatientname;
    }

    const validationerrors = validationResult(req);
    if (!validationerrors.isEmpty()) {
      return res.json({ errors: validationerrors.errors });
    }

    req.body.time = moment()
    req.body.time2 = moment()
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne( {_id : decoded.id})
    req.body.sender = `${user.firstname}.${user.lastname}`
    
    
    

    const labtoxicity = await Labtoxicityschema.create(req.body);
    res.json({ lab_add_toxicity: labtoxicity });
  })
);

// LAB SEARCH DATE
router.post(
  "/findDatelab",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const sdate = req.body.sDate;
    const edate = req.body.eDate;
    const startDate = sdate + "T00:00:00.000+03:00";
    const endDate = edate + "T23:59:59.000+03:00";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await Labschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    })
      
    

    if (results === undefined) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { labfinddate: [] } }
      );
    }

    if (results) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { labfinddate: results } }
      );
    }

    if (results) {
      res.render("Lab/labfinddate.ejs", {
        searcharray: results,
        moment: moment,
        
      });
    }
  })
);

// LAB SEARCH
router.post(
  "/labsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim();
    const date = moment().format("YYYY-MM-DD");
    const startDate = date + "T00:00:00.000+03:00";
    const endDate = date + "T23:59:59.000+03:00";
    const result = await Labschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
      labcomment: { $not: { $in: [ /DELETED/ ] }},
    });
    console.log(result)
    const array = result.filter( item => item.mrnlab.match(searchText)) 
    console.log(array)

    res.render("Lab/labsearch", { labarray: array, moment: moment });
  })
);

// LAB SEARCH IN FIND DATE
router.post(
  "/labsearchfinddate",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim();
    const date = moment().format("YYYY-MM-DD");
    const startDate = date + "T00:00:00.000+03:00";
    const endDate = date + "T23:59:59.000+03:00";
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY)
    const user = await User.findOne({ _id : decoded.id})
    const find = user.labfinddate.filter( item => item.mrnlab.match(req.body.searchText))
    console.log(find)
    
    // const result = await Labschema.find({
    //   createdAt: { $gte: startDate, $lte: endDate },
    //   labcomment: { $not: { $in: [ /DELETED/ ] }},
    // });
    // console.log(result)
    // const array = result.filter( item => item.mrnlab.match(searchText)) 
    // console.log(array)

    res.render("Lab/labsearch", { labarray: find, moment: moment });
  })
);

//ADD TO DO LIST
router.post(
  "/addtodolist",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);

    const add = await User.updateOne(
      { _id: decoded.id },
      {
        $push: {
          todolist: {
            title: req.body.title,
            due: req.body.due,
            description: req.body.description,
            completed: req.body.completed,
            createdAt: moment().format("YYYY-MM-DD"),
          },
        },
      }
    );

    if (add) {
      res.redirect("/todolist");
    }
  })
);

//ADD Medication
router.post(
  "/addmedication",[
    check("code").notEmpty(),
    check("trade").notEmpty(),
    check("generic").notEmpty(),  
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }
    const generic = await Medication.findOne({ generic : req.body.generic});
    if (generic) {
      return res.json({ generic: "This Name Is Already Exist" });
    }
    const results = await Medication.findOne({ code: req.body.code });
    if (results) {
      return res.json({ code: "This Code Is Already Exist" });
    }
    if (req.body.classname === "Select Class...") {
      return res.json({ classname: "You Must Enter This Field" });
    }
    const result = await Medication.create(req.body);
    if (result) {
      return res.json({ done: result });
    }
  })
);

//ADD DIC QUESTION
router.post(
  "/addquestion",
  [check("question").notEmpty()],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    req.body.detector = Date.now();
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const dic = await Qa.create(req.body)


    const results = await User.findOneAndUpdate(
      { _id: decoded.id },
      {
        $push: {
          dicsender: {
            question: req.body.question,
            answer: req.body.answer,
            detector: req.body.detector,
            createdAt: moment(Date.now()),
          },
        },
      }
    );

    if (results) {
      res.json({ done: results });
    }
  })
);


// DIC SEARCH DATE
router.post(
  "/findDatedic",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const sdate = req.body.sDate;
    const edate = req.body.eDate;
    const startDate = `${sdate}T00:00:00.000+00:00`;
    const endDate = `${edate}T23:59:59.000+00:00`;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const search = await Qa.find()
    const searchdate = search.filter((item) => {
      const createdAt = moment(item.createdAt);
      return createdAt.isBetween(startDate, endDate);
    });
    if (searchdate === undefined) {
      await User.findByIdAndUpdate({ _id: decoded.id }, { $set: { dicsearch: [] } });
    }
    if (searchdate) {
      await User.findByIdAndUpdate(
        { _id: decoded.id },
        { $set: { dicsearch: searchdate } }
      );
    }
    res.redirect("/dic");
  })
);

// CLEAR DIC SEARCH QUESTION
router.post(
  "/cleardicsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    await User.findByIdAndUpdate({ _id: decoded.id }, { $set : {dicsearch : [] }});  
    res.redirect("/dic");
  })
);

// USER SEARCH QUESTION
router.post(
  "/searchquestion",
  [
    check("search").notEmpty()
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }
    const search = await Qa.find()
    const findquestion = req.body.search 
    const searchquestion = search.filter(item => 
    item.question.toLowerCase().match(findquestion.toLowerCase()))
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const usersearch = await User.findByIdAndUpdate({ _id: decoded.id }, { $set : {userquestionsearch : searchquestion }});
    if (searchquestion.length === 0) { 
      return res.json({ nodata : "No Data"})
    } 
    
    
   
    if (usersearch) {
      res.json({ done: usersearch });
    }
    
  })
);

// USER SEARCH QUESTION
router.post(
  "/searchmedication",
  [
    check("searchinput").notEmpty()
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }
    const search = await Medication.find()
    
    const findmed = req.body.searchinput 
    
    const searchmed = search.find(item => item.generic.toLowerCase().match(findmed.toLowerCase()))
    if (!searchmed) { 
      return res.json({ nodata : "No Data"})
    } 

    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const searchmedselect = searchmed.generic
    const usersearch = await User.findOneAndUpdate({ _id: decoded.id },  {searchmedication : searchmedselect });
    if (!usersearch) {
      res.json({ notdone : "notDONE" });
    }
    if (usersearch) {
      res.json({ done : searchmedselect });
    }
    
  })
);



// CLEAR USER SEARCH QUESTION
router.post(
  "/clearsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findByIdAndUpdate({ _id: decoded.id }, { $set : {userquestionsearch : [] }});  
    res.redirect("/dicsender");
  })
);

//ADD Medication CLASS
router.post(
  "/addmedicationclass",
  [check("classname").notEmpty()],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    const unique = await Medicationclass.findOne({
      classname: req.body.classname,
    });
    if (unique) {
      return res.json({ unique: "This Class Is Already Exist" });
    }
    const medclass = await Medicationclass.create(req.body);
    if (medclass) {
      res.json({ done: medclass });
    }
  })
);

//EXAM FORM
router.post(
  "/examform",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const PHA = await User.findOne({ _id: decoded.id });
    const pharmacist = PHA.selectedpharmacist;
    const arr = Object.values(pharmacist);
    req.body.detector = Date.now();
    const results = await User.findOneAndUpdate(
      { _id: decoded.id },
      { examchoose: req.body }
    );
    arr.forEach(async (item) => {
      await User.findOneAndUpdate({ code: item }, { examchoose: req.body });
    });

    console.log(req.body);

    if (results) {
      res.redirect("/admin");
    }
  })
);

//SELECTED PHARMACIST FOR EXAM
router.post(
  "/select",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);

    const results = await User.findOneAndUpdate(
      { _id: decoded.id },
      { selectedpharmacist: req.body }
    );
    if (results) {
      res.redirect("/admin");
    }
  })
);

// PERPATIENT SEARCH
router.post(
  "/perpatientsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchtext = req.body.searchText
    const results = await Perpatient.find();
    const array = results.filter(
      (item) =>
        item.ItemDescription.toLowerCase().match(searchtext.toLowerCase()) ||
        item.ItemNumber.match(searchtext) ||
        item.ItemCategory.toLowerCase().match(searchtext.toLowerCase())
    );

    if (array) {
      res.render("Store/perpatientsearch.ejs", { array });
    }
  })
);

// PYXIS SEARCH
router.post(
  "/pyxissearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchtext = req.body.searchText
    const results = await Pyxis.find();
    const array = results.filter(
      (item) =>
        item.ItemDescription.toLowerCase().match(searchtext.toLowerCase()) || item.ItemNumber.match(searchtext) 
    );
    if (array) {
      res.render("Store/pyxissearch.ejs", { array });
    }
  })
);

// ROWA SEARCH
router.post(
  "/rowasearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchtext = req.body.searchText
    const results = await Rowa.find();
    const array = results.filter(
      (item) =>
        item.ItemDescription.toLowerCase().match(searchtext.toLowerCase()) || item.ItemNumber.match(searchtext) 
    );
    if (array) {
      res.render("Store/rowasearch.ejs", { array });
    }
  })
);

// SHORTAGE SEARCH
router.post(
  "/shortagesearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchtext = req.body.searchText
    const results = await Shortage.find();
    const array = results.filter(
      (item) =>
        item.CATEGORYNAME.toLowerCase().match(searchtext.toLowerCase()) );
    if (array) {
      res.render("Store/shortagesearch.ejs", { array });
    }
  })
);

// PYXIS TRADE SEARCH
router.post(
  "/pyxismedsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const searchText = req.body.searchText.trim().toLowerCase();
    const pyxistrade = await PyxisTrade.find();
    const results = pyxistrade.filter(
      (item) =>
        item.generic.toLowerCase().match(searchText) ||
        item.trade1.toLowerCase().match(searchText)
    );
    if (results) {
      res.render("Pyxis/pyxismedsearch.ejs", { results });
    }
  })
);

// EXAM ANSWER
router.post(
  "/answer",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const selectedObject = user.examchoose;
    const examname = selectedObject.examname;

    const searchassy1 = req.body.answerassy1.toLowerCase();
    const searchassy2 = req.body.answerassy2.toLowerCase();
    const searchassy3 = req.body.answerassy3.toLowerCase();
    const searchassy4 = req.body.answerassy4.toLowerCase();
    const searchassy5 = req.body.answerassy5.toLowerCase();
    const searchassy6 = req.body.answerassy6.toLowerCase();
    const searchassy7 = req.body.answerassy7.toLowerCase();
    const searchassy8 = req.body.answerassy8.toLowerCase();
    const searchassy9 = req.body.answerassy9.toLowerCase();
    const searchassy10 = req.body.answerassy10.toLowerCase();
    const searchassy11 = req.body.answerassy11.toLowerCase();
    const searchassy12 = req.body.answerassy12.toLowerCase();
    const searchassy13 = req.body.answerassy13.toLowerCase();
    const searchassy14 = req.body.answerassy14.toLowerCase();
    const searchassy15 = req.body.answerassy15.toLowerCase();
    const searchassy16 = req.body.answerassy16.toLowerCase();
    const searchassy17 = req.body.answerassy17.toLowerCase();
    const searchassy18 = req.body.answerassy18.toLowerCase();
    const searchassy19 = req.body.answerassy19.toLowerCase();
    const searchassy20 = req.body.answerassy20.toLowerCase();



    const resultassy1 =
      searchassy1.includes(selectedObject.key1forquestion1) &&
      searchassy1.includes(selectedObject.key2forquestion1) &&
      searchassy1.includes(selectedObject.key3forquestion1) &&
      searchassy1.includes(selectedObject.key4forquestion1);
    const resultassy2 =
      searchassy2.includes(selectedObject.key1forquestion2) &&
      searchassy2.includes(selectedObject.key2forquestion2) &&
      searchassy2.includes(selectedObject.key3forquestion2) &&
      searchassy2.includes(selectedObject.key4forquestion2);
    const resultassy3 =
      searchassy3.includes(selectedObject.key1forquestion3) &&
      searchassy3.includes(selectedObject.key2forquestion3) &&
      searchassy3.includes(selectedObject.key3forquestion3) &&
      searchassy3.includes(selectedObject.key4forquestion3);
    const resultassy4 =
      searchassy4.includes(selectedObject.key1forquestion4) &&
      searchassy4.includes(selectedObject.key2forquestion4) &&
      searchassy4.includes(selectedObject.key3forquestion4) &&
      searchassy4.includes(selectedObject.key4forquestion4);
    const resultassy5 =
      searchassy5.includes(selectedObject.key1forquestion5) &&
      searchassy5.includes(selectedObject.key2forquestion5) &&
      searchassy5.includes(selectedObject.key3forquestion5) &&
      searchassy5.includes(selectedObject.key4forquestion5);
    const resultassy6 =
      searchassy6.includes(selectedObject.key1forquestion6) &&
      searchassy6.includes(selectedObject.key2forquestion6) &&
      searchassy6.includes(selectedObject.key3forquestion6) &&
      searchassy6.includes(selectedObject.key4forquestion6);
    const resultassy7 =
      searchassy7.includes(selectedObject.key1forquestion7) &&
      searchassy7.includes(selectedObject.key2forquestion7) &&
      searchassy7.includes(selectedObject.key3forquestion7) &&
      searchassy7.includes(selectedObject.key4forquestion7);
    const resultassy8 =
      searchassy8.includes(selectedObject.key1forquestion8) &&
      searchassy8.includes(selectedObject.key2forquestion8) &&
      searchassy8.includes(selectedObject.key3forquestion8) &&
      searchassy8.includes(selectedObject.key4forquestion8);
    const resultassy9 =
      searchassy9.includes(selectedObject.key1forquestion9) &&
      searchassy9.includes(selectedObject.key2forquestion9) &&
      searchassy9.includes(selectedObject.key3forquestion9) &&
      searchassy9.includes(selectedObject.key4forquestion9);
    const resultassy10 =
      searchassy10.includes(selectedObject.key1forquestion10) &&
      searchassy10.includes(selectedObject.key2forquestion10) &&
      searchassy10.includes(selectedObject.key3forquestion10) &&
      searchassy10.includes(selectedObject.key4forquestion10);
    const resultassy11 =
      searchassy11.includes(selectedObject.key1forquestion11) &&
      searchassy11.includes(selectedObject.key2forquestion11) &&
      searchassy11.includes(selectedObject.key3forquestion11) &&
      searchassy11.includes(selectedObject.key4forquestion11); 
    const resultassy12 =
      searchassy12.includes(selectedObject.key1forquestion12) &&
      searchassy12.includes(selectedObject.key2forquestion12) &&
      searchassy12.includes(selectedObject.key3forquestion12) &&
      searchassy12.includes(selectedObject.key4forquestion12); 
    const resultassy13 =
      searchassy13.includes(selectedObject.key1forquestion13) &&
      searchassy13.includes(selectedObject.key2forquestion13) &&
      searchassy13.includes(selectedObject.key3forquestion13) &&
      searchassy13.includes(selectedObject.key4forquestion13);
    const resultassy14 =
      searchassy14.includes(selectedObject.key1forquestion14) &&
      searchassy14.includes(selectedObject.key2forquestion14) &&
      searchassy14.includes(selectedObject.key3forquestion14) &&
      searchassy14.includes(selectedObject.key4forquestion14);
    const resultassy15 =
      searchassy15.includes(selectedObject.key1forquestion15) &&
      searchassy15.includes(selectedObject.key2forquestion15) &&
      searchassy15.includes(selectedObject.key3forquestion15) &&
      searchassy15.includes(selectedObject.key4forquestion15);
    const resultassy16 =
      searchassy16.includes(selectedObject.key1forquestion16) &&
      searchassy16.includes(selectedObject.key2forquestion16) &&
      searchassy16.includes(selectedObject.key3forquestion16) &&
      searchassy16.includes(selectedObject.key4forquestion16);
    const resultassy17 =
      searchassy17.includes(selectedObject.key1forquestion17) &&
      searchassy17.includes(selectedObject.key2forquestion17) &&
      searchassy17.includes(selectedObject.key3forquestion17) &&
      searchassy17.includes(selectedObject.key4forquestion17);
    const resultassy18 =
      searchassy18.includes(selectedObject.key1forquestion18) &&
      searchassy18.includes(selectedObject.key2forquestion18) &&
      searchassy18.includes(selectedObject.key3forquestion18) &&
      searchassy18.includes(selectedObject.key4forquestion18);
    const resultassy19 =
      searchassy19.includes(selectedObject.key1forquestion19) &&
      searchassy19.includes(selectedObject.key2forquestion19) &&
      searchassy19.includes(selectedObject.key3forquestion19) &&
      searchassy19.includes(selectedObject.key4forquestion19);
    const resultassy20 =
      searchassy20.includes(selectedObject.key1forquestion20) &&
      searchassy20.includes(selectedObject.key2forquestion20) &&
      searchassy20.includes(selectedObject.key3forquestion20) &&
      searchassy20.includes(selectedObject.key4forquestion20); 
      
      
      const searchcomplete1 = req.body.answercomplete1.toLowerCase();
      const searchcomplete2 = req.body.answercomplete2.toLowerCase();
      const searchcomplete3 = req.body.answercomplete3.toLowerCase();
      const searchcomplete4 = req.body.answercomplete4.toLowerCase();
      const searchcomplete5 = req.body.answercomplete5.toLowerCase();
      const searchcomplete6 = req.body.answercomplete6.toLowerCase();
      const searchcomplete7 = req.body.answercomplete7.toLowerCase();
      const searchcomplete8 = req.body.answercomplete8.toLowerCase();
      const searchcomplete9 = req.body.answercomplete9.toLowerCase();
      const searchcomplete10 = req.body.answercomplete10.toLowerCase();
      const searchcomplete11 = req.body.answercomplete11.toLowerCase();
      const searchcomplete12 = req.body.answercomplete12.toLowerCase();
      const searchcomplete13 = req.body.answercomplete13.toLowerCase();
      const searchcomplete14 = req.body.answercomplete14.toLowerCase();
      const searchcomplete15 = req.body.answercomplete15.toLowerCase();
      const searchcomplete16 = req.body.answercomplete16.toLowerCase();
      const searchcomplete17 = req.body.answercomplete17.toLowerCase();
      const searchcomplete18 = req.body.answercomplete18.toLowerCase();
      const searchcomplete19 = req.body.answercomplete19.toLowerCase();
      const searchcomplete20 = req.body.answercomplete20.toLowerCase();

    const resultcomplete1 = searchcomplete1.includes(
      selectedObject.key1forquestioncomplete1
    );
    const resultcomplete2 = searchcomplete2.includes(
      selectedObject.key1forquestioncomplete2
    );
    const resultcomplete3 = searchcomplete3.includes(
      selectedObject.key1forquestioncomplete3
    );
    const resultcomplete4 = searchcomplete4.includes(
      selectedObject.key1forquestioncomplete4
    );
    const resultcomplete5 = searchcomplete5.includes(
      selectedObject.key1forquestioncomplete5
    );
    const resultcomplete6 = searchcomplete6.includes(
      selectedObject.key1forquestioncomplete6
    );
    const resultcomplete7 = searchcomplete7.includes(
      selectedObject.key1forquestioncomplete7
    );
    const resultcomplete8 = searchcomplete8.includes(
      selectedObject.key1forquestioncomplete8
    );
    const resultcomplete9 = searchcomplete9.includes(
      selectedObject.key1forquestioncomplete9
    );
    const resultcomplete10 = searchcomplete10.includes(
      selectedObject.key1forquestioncomplete10
    );
    const resultcomplete11 = searchcomplete11.includes(
      selectedObject.key1forquestioncomplete11
    );
    const resultcomplete12 = searchcomplete12.includes(
      selectedObject.key1forquestioncomplete12
    );
    const resultcomplete13 = searchcomplete13.includes(
      selectedObject.key1forquestioncomplete13
    );
    const resultcomplete14 = searchcomplete14.includes(
      selectedObject.key1forquestioncomplete14
    );
    const resultcomplete15 = searchcomplete15.includes(
      selectedObject.key1forquestioncomplete15
    );
    const resultcomplete16 = searchcomplete16.includes(
      selectedObject.key1forquestioncomplete16
    );
    const resultcomplete17 = searchcomplete17.includes(
      selectedObject.key1forquestioncomplete17
    );
    const resultcomplete18 = searchcomplete18.includes(
      selectedObject.key1forquestioncomplete18
    );
    const resultcomplete19 = searchcomplete19.includes(
      selectedObject.key1forquestioncomplete19
    );
    const resultcomplete20 = searchcomplete20.includes(
      selectedObject.key1forquestioncomplete20
    );

    req.body.resultassy1 = resultassy1;
    req.body.resultassy2 = resultassy2;
    req.body.resultassy3 = resultassy3;
    req.body.resultassy4 = resultassy4;
    req.body.resultassy5 = resultassy5;
    req.body.resultassy6 = resultassy6;
    req.body.resultassy7 = resultassy7;
    req.body.resultassy8 = resultassy8;
    req.body.resultassy9 = resultassy9;
    req.body.resultassy10 = resultassy10;
    req.body.resultassy11 = resultassy11;
    req.body.resultassy12 = resultassy12;
    req.body.resultassy13 = resultassy13;
    req.body.resultassy14 = resultassy14;
    req.body.resultassy15 = resultassy15;
    req.body.resultassy16 = resultassy16;
    req.body.resultassy17 = resultassy17;
    req.body.resultassy18 = resultassy18;
    req.body.resultassy19 = resultassy19;
    req.body.resultassy20 = resultassy20;

    req.body.resultcomplete1 = resultcomplete1;
    req.body.resultcomplete2 = resultcomplete2;
    req.body.resultcomplete3 = resultcomplete3;
    req.body.resultcomplete4 = resultcomplete4;
    req.body.resultcomplete5 = resultcomplete5;
    req.body.resultcomplete6 = resultcomplete6;
    req.body.resultcomplete7 = resultcomplete7;
    req.body.resultcomplete8 = resultcomplete8;
    req.body.resultcomplete9 = resultcomplete9;
    req.body.resultcomplete10 = resultcomplete10;
    req.body.resultcomplete11 = resultcomplete11;
    req.body.resultcomplete12 = resultcomplete12;
    req.body.resultcomplete13 = resultcomplete13;
    req.body.resultcomplete14 = resultcomplete14;
    req.body.resultcomplete15 = resultcomplete15;
    req.body.resultcomplete16 = resultcomplete16;
    req.body.resultcomplete17 = resultcomplete17;
    req.body.resultcomplete18 = resultcomplete18;
    req.body.resultcomplete19 = resultcomplete19;
    req.body.resultcomplete20 = resultcomplete20;

    const newObject = Object.assign(selectedObject, req.body);
    await User.findByIdAndUpdate(decoded.id, {
      $set: { examchoose: newObject },
    });

    function answchoose1() {
      if (
        req.body.answerc1 === selectedObject.correctanswerquestion1 &&
        req.body.answerc1 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc1 !== selectedObject.correctanswerquestion1) {
        return 0;
      }
      if (req.body.answerc1 === undefined) {
        return 0;
      }
    }

    function answchoose2() {
      if (
        req.body.answerc2 === selectedObject.correctanswerquestion2 &&
        req.body.answerc2 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc2 !== selectedObject.correctanswerquestion2) {
        return 0;
      }
      if (req.body.answerc2 === undefined) {
        return 0;
      }
    }

    function answchoose3() {
      if (
        req.body.answerc3 === selectedObject.correctanswerquestion3 &&
        req.body.answerc3 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc3 !== selectedObject.correctanswerquestion3) {
        return 0;
      }
      if (req.body.answerc3 === undefined) {
        return 0;
      }
    }

    function answchoose4() {
      if (
        req.body.answerc4 === selectedObject.correctanswerquestion4 &&
        req.body.answerc4 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc4 !== selectedObject.correctanswerquestion4) {
        return 0;
      }
      if (req.body.answerc4 === undefined) {
        return 0;
      }
    }

    function answchoose5() {
      if (
        req.body.answerc5 === selectedObject.correctanswerquestion5 &&
        req.body.answerc5 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc5 !== selectedObject.correctanswerquestion5) {
        return 0;
      }
      if (req.body.answerc5 === undefined) {
        return 0;
      }
    }

    function answchoose6() {
      if (
        req.body.answerc6 === selectedObject.correctanswerquestion6 &&
        req.body.answerc6 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc6 !== selectedObject.correctanswerquestion6) {
        return 0;
      }
      if (req.body.answerc6 === undefined) {
        return 0;
      }
    }

    function answchoose7() {
      if (
        req.body.answerc7 === selectedObject.correctanswerquestion7 &&
        req.body.answerc7 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc7 !== selectedObject.correctanswerquestion7) {
        return 0;
      }
      if (req.body.answerc7 === undefined) {
        return 0;
      }
    }

    function answchoose8() {
      if (
        req.body.answerc8 === selectedObject.correctanswerquestion8 &&
        req.body.answerc8 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc8 !== selectedObject.correctanswerquestion8) {
        return 0;
      }
      if (req.body.answerc8 === undefined) {
        return 0;
      }
    }

    function answchoose9() {
      if (
        req.body.answerc9 === selectedObject.correctanswerquestion9 &&
        req.body.answerc9 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc9 !== selectedObject.correctanswerquestion9) {
        return 0;
      }
      if (req.body.answerc9 === undefined) {
        return 0;
      }
    }

    function answchoose10() {
      if (
        req.body.answerc10 === selectedObject.correctanswerquestion10 &&
        req.body.answerc10 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc10 !== selectedObject.correctanswerquestion10) {
        return 0;
      }
      if (req.body.answerc10 === undefined) {
        return 0;
      }
    }

    function answchoose11() {
      if (
        req.body.answerc11 === selectedObject.correctanswerquestion11 &&
        req.body.answerc11 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc11 !== selectedObject.correctanswerquestion11) {
        return 0;
      }
      if (req.body.answerc11 === undefined) {
        return 0;
      }
    }

    function answchoose12() {
      if (
        req.body.answerc12 === selectedObject.correctanswerquestion12 &&
        req.body.answerc12 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc12 !== selectedObject.correctanswerquestion12) {
        return 0;
      }
      if (req.body.answerc12 === undefined) {
        return 0;
      }
    }

    function answchoose13() {
      if (
        req.body.answerc13 === selectedObject.correctanswerquestion13 &&
        req.body.answerc13 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc13 !== selectedObject.correctanswerquestion13) {
        return 0;
      }
      if (req.body.answerc13 === undefined) {
        return 0;
      }
    }

    function answchoose14() {
      if (
        req.body.answerc14 === selectedObject.correctanswerquestion14 &&
        req.body.answerc14 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc14 !== selectedObject.correctanswerquestion14) {
        return 0;
      }
      if (req.body.answerc14 === undefined) {
        return 0;
      }
    }

    function answchoose15() {
      if (
        req.body.answerc15 === selectedObject.correctanswerquestion15 &&
        req.body.answerc15 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc15 !== selectedObject.correctanswerquestion15) {
        return 0;
      }
      if (req.body.answerc15 === undefined) {
        return 0;
      }
    }

    function answchoose16() {
      if (
        req.body.answerc16 === selectedObject.correctanswerquestion16 &&
        req.body.answerc16 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc16 !== selectedObject.correctanswerquestion16) {
        return 0;
      }
      if (req.body.answerc16 === undefined) {
        return 0;
      }
    }

    function answchoose17() {
      if (
        req.body.answerc17 === selectedObject.correctanswerquestion17 &&
        req.body.answerc17 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc17 !== selectedObject.correctanswerquestion17) {
        return 0;
      }
      if (req.body.answerc17 === undefined) {
        return 0;
      }
    }

    function answchoose18() {
      if (
        req.body.answerc18 === selectedObject.correctanswerquestion18 &&
        req.body.answerc18 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc18 !== selectedObject.correctanswerquestion18) {
        return 0;
      }
      if (req.body.answerc18 === undefined) {
        return 0;
      }
    }

    function answchoose19() {
      if (
        req.body.answerc19 === selectedObject.correctanswerquestion19 &&
        req.body.answerc19 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc19 !== selectedObject.correctanswerquestion19) {
        return 0;
      }
      if (req.body.answerc19 === undefined) {
        return 0;
      }
    }

    function answchoose20() {
      if (
        req.body.answerc20 === selectedObject.correctanswerquestion20 &&
        req.body.answerc20 !== undefined
      ) {
        return 1;
      }
      if (req.body.answerc20 !== selectedObject.correctanswerquestion20) {
        return 0;
      }
      if (req.body.answerc20 === undefined) {
        return 0;
      }
    }

    function answassy1() {
      if (resultassy1 === true) {
        return 1;
      }
      if (resultassy1 === false) {
        return 0;
      }
    }

    function answassy2() {
      if (resultassy2 === true) {
        return 1;
      }
      if (resultassy2 === false) {
        return 0;
      }
    }

    function answassy3() {
      if (resultassy3 === true) {
        return 1;
      }
      if (resultassy3 === false) {
        return 0;
      }
    }

    function answassy4() {
      if (resultassy4 === true) {
        return 1;
      }
      if (resultassy4 === false) {
        return 0;
      }
    }

    function answassy5() {
      if (resultassy5 === true) {
        return 1;
      }
      if (resultassy5 === false) {
        return 0;
      }
    }

    function answassy6() {
      if (resultassy6 === true) {
        return 1;
      }
      if (resultassy6 === false) {
        return 0;
      }
    }

    function answassy7() {
      if (resultassy7 === true) {
        return 1;
      }
      if (resultassy7 === false) {
        return 0;
      }
    }

    function answassy8() {
      if (resultassy8 === true) {
        return 1;
      }
      if (resultassy8 === false) {
        return 0;
      }
    }

    function answassy9() {
      if (resultassy9 === true) {
        return 1;
      }
      if (resultassy9 === false) {
        return 0;
      }
    }

    function answassy10() {
      if (resultassy10 === true) {
        return 1;
      }
      if (resultassy10 === false) {
        return 0;
      }
    }

    function answassy11() {
      if (resultassy11 === true) {
        return 1;
      }
      if (resultassy11 === false) {
        return 0;
      }
    }

    function answassy12() {
      if (resultassy12 === true) {
        return 1;
      }
      if (resultassy12 === false) {
        return 0;
      }
    }

    function answassy13() {
      if (resultassy13 === true) {
        return 1;
      }
      if (resultassy13 === false) {
        return 0;
      }
    }

    function answassy14() {
      if (resultassy14 === true) {
        return 1;
      }
      if (resultassy14 === false) {
        return 0;
      }
    }

    function answassy15() {
      if (resultassy15 === true) {
        return 1;
      }
      if (resultassy15 === false) {
        return 0;
      }
    }

    function answassy16() {
      if (resultassy16 === true) {
        return 1;
      }
      if (resultassy16 === false) {
        return 0;
      }
    }

    function answassy17() {
      if (resultassy17 === true) {
        return 1;
      }
      if (resultassy17 === false) {
        return 0;
      }
    }

    function answassy18() {
      if (resultassy18 === true) {
        return 1;
      }
      if (resultassy18 === false) {
        return 0;
      }
    }

    function answassy19() {
      if (resultassy19 === true) {
        return 1;
      }
      if (resultassy19 === false) {
        return 0;
      }
    }

    function answassy20() {
      if (resultassy20 === true) {
        return 1;
      }
      if (resultassy20 === false) {
        return 0;
      }
    }

    function answcomplete1() {
      if (resultcomplete1 === true) {
        return 1;
      }
      if (resultcomplete1 === false) {
        return 0;
      }
    }

    function answcomplete2() {
      if (resultcomplete2 === true) {
        return 1;
      }
      if (resultcomplete2 === false) {
        return 0;
      }
    }

    function answcomplete3() {
      if (resultcomplete3 === true) {
        return 1;
      }
      if (resultcomplete3 === false) {
        return 0;
      }
    }

    function answcomplete4() {
      if (resultcomplete4 === true) {
        return 1;
      }
      if (resultcomplete4 === false) {
        return 0;
      }
    }

    function answcomplete5() {
      if (resultcomplete5 === true) {
        return 1;
      }
      if (resultcomplete5 === false) {
        return 0;
      }
    }

    function answcomplete6() {
      if (resultcomplete6 === true) {
        return 1;
      }
      if (resultcomplete6 === false) {
        return 0;
      }
    }

    function answcomplete7() {
      if (resultcomplete7 === true) {
        return 1;
      }
      if (resultcomplete7 === false) {
        return 0;
      }
    }

    function answcomplete8() {
      if (resultcomplete8 === true) {
        return 1;
      }
      if (resultcomplete8 === false) {
        return 0;
      }
    }

    function answcomplete9() {
      if (resultcomplete9 === true) {
        return 1;
      }
      if (resultcomplete9 === false) {
        return 0;
      }
    }

    function answcomplete10() {
      if (resultcomplete10 === true) {
        return 1;
      }
      if (resultcomplete10 === false) {
        return 0;
      }
    }

    function answcomplete11() {
      if (resultcomplete11 === true) {
        return 1;
      }
      if (resultcomplete11 === false) {
        return 0;
      }
    }

    function answcomplete12() {
      if (resultcomplete12 === true) {
        return 1;
      }
      if (resultcomplete12 === false) {
        return 0;
      }
    }

    function answcomplete13() {
      if (resultcomplete13 === true) {
        return 1;
      }
      if (resultcomplete13 === false) {
        return 0;
      }
    }

    function answcomplete14() {
      if (resultcomplete14 === true) {
        return 1;
      }
      if (resultcomplete14 === false) {
        return 0;
      }
    }

    function answcomplete15() {
      if (resultcomplete15 === true) {
        return 1;
      }
      if (resultcomplete15 === false) {
        return 0;
      }
    }

    function answcomplete16() {
      if (resultcomplete16 === true) {
        return 1;
      }
      if (resultcomplete16 === false) {
        return 0;
      }
    }

    function answcomplete17() {
      if (resultcomplete17 === true) {
        return 1;
      }
      if (resultcomplete17 === false) {
        return 0;
      }
    }

    function answcomplete18() {
      if (resultcomplete18 === true) {
        return 1;
      }
      if (resultcomplete18 === false) {
        return 0;
      }
    }

    function answcomplete19() {
      if (resultcomplete19 === true) {
        return 1;
      }
      if (resultcomplete19 === false) {
        return 0;
      }
    }

    function answcomplete20() {
      if (resultcomplete20 === true) {
        return 1;
      }
      if (resultcomplete20 === false) {
        return 0;
      }
    }

    function answtf1() {
      if (
        req.body.answertf1 === selectedObject.correctanswertruefalse1 &&
        req.body.answertf1 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf1 !== selectedObject.correctanswertruefalse1) {
        return 0;
      }
      if (req.body.answertf1 === undefined) {
        return 0;
      }
    }

    function answtf2() {
      if (
        req.body.answertf2 === selectedObject.correctanswertruefalse2 &&
        req.body.answertf2 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf2 !== selectedObject.correctanswertruefalse2) {
        return 0;
      }
      if (req.body.answertf2 === undefined) {
        return 0;
      }
    }

    function answtf3() {
      if (
        req.body.answertf3 === selectedObject.correctanswertruefalse3 &&
        req.body.answertf3 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf3 !== selectedObject.correctanswertruefalse3) {
        return 0;
      }
      if (req.body.answertf3 === undefined) {
        return 0;
      }
    }

    function answtf4() {
      if (
        req.body.answertf4 === selectedObject.correctanswertruefalse4 &&
        req.body.answertf4 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf4 !== selectedObject.correctanswertruefalse4) {
        return 0;
      }
      if (req.body.answertf4 === undefined) {
        return 0;
      }
    }

    function answtf5() {
      if (
        req.body.answertf5 === selectedObject.correctanswertruefalse5 &&
        req.body.answertf5 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf5 !== selectedObject.correctanswertruefalse5) {
        return 0;
      }
      if (req.body.answertf5 === undefined) {
        return 0;
      }
    }

    function answtf6() {
      if (
        req.body.answertf6 === selectedObject.correctanswertruefalse6 &&
        req.body.answertf6 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf6 !== selectedObject.correctanswertruefalse6) {
        return 0;
      }
      if (req.body.answertf6 === undefined) {
        return 0;
      }
    }

    function answtf7() {
      if (
        req.body.answertf7 === selectedObject.correctanswertruefalse7 &&
        req.body.answertf7 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf7 !== selectedObject.correctanswertruefalse7) {
        return 0;
      }
      if (req.body.answertf7 === undefined) {
        return 0;
      }
    }

    function answtf8() {
      if (
        req.body.answertf8 === selectedObject.correctanswertruefalse8 &&
        req.body.answertf8 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf8 !== selectedObject.correctanswertruefalse8) {
        return 0;
      }
      if (req.body.answertf8 === undefined) {
        return 0;
      }
    }

    function answtf9() {
      if (
        req.body.answertf9 === selectedObject.correctanswertruefalse9 &&
        req.body.answertf9 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf9 !== selectedObject.correctanswertruefalse9) {
        return 0;
      }
      if (req.body.answertf9 === undefined) {
        return 0;
      }
    }

    function answtf10() {
      if (
        req.body.answertf10 === selectedObject.correctanswertruefalse10 &&
        req.body.answertf10 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf10 !== selectedObject.correctanswertruefalse10) {
        return 0;
      }
      if (req.body.answertf10 === undefined) {
        return 0;
      }
    }

    function answtf11() {
      if (
        req.body.answertf11 === selectedObject.correctanswertruefalse11 &&
        req.body.answertf11 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf11 !== selectedObject.correctanswertruefalse11) {
        return 0;
      }
      if (req.body.answertf11 === undefined) {
        return 0;
      }
    }

    function answtf12() {
      if (
        req.body.answertf12 === selectedObject.correctanswertruefalse12 &&
        req.body.answertf12 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf12 !== selectedObject.correctanswertruefalse12) {
        return 0;
      }
      if (req.body.answertf12 === undefined) {
        return 0;
      }
    }

    function answtf13() {
      if (
        req.body.answertf13 === selectedObject.correctanswertruefalse13 &&
        req.body.answertf13 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf13 !== selectedObject.correctanswertruefalse13) {
        return 0;
      }
      if (req.body.answertf13 === undefined) {
        return 0;
      }
    }

    function answtf14() {
      if (
        req.body.answertf14 === selectedObject.correctanswertruefalse14 &&
        req.body.answertf14 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf14 !== selectedObject.correctanswertruefalse14) {
        return 0;
      }
      if (req.body.answertf14 === undefined) {
        return 0;
      }
    }

    function answtf15() {
      if (
        req.body.answertf15 === selectedObject.correctanswertruefalse15 &&
        req.body.answertf15 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf15 !== selectedObject.correctanswertruefalse15) {
        return 0;
      }
      if (req.body.answertf15 === undefined) {
        return 0;
      }
    }

    function answtf16() {
      if (
        req.body.answertf16 === selectedObject.correctanswertruefalse16 &&
        req.body.answertf16 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf16 !== selectedObject.correctanswertruefalse16) {
        return 0;
      }
      if (req.body.answertf16 === undefined) {
        return 0;
      }
    }

    function answtf17() {
      if (
        req.body.answertf17 === selectedObject.correctanswertruefalse17 &&
        req.body.answertf17 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf17 !== selectedObject.correctanswertruefalse17) {
        return 0;
      }
      if (req.body.answertf17 === undefined) {
        return 0;
      }
    }

    function answtf18() {
      if (
        req.body.answertf18 === selectedObject.correctanswertruefalse18 &&
        req.body.answertf18 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf18 !== selectedObject.correctanswertruefalse18) {
        return 0;
      }
      if (req.body.answertf18 === undefined) {
        return 0;
      }
    }

    function answtf19() {
      if (
        req.body.answertf19 === selectedObject.correctanswertruefalse19 &&
        req.body.answertf19 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf19 !== selectedObject.correctanswertruefalse19) {
        return 0;
      }
      if (req.body.answertf19 === undefined) {
        return 0;
      }
    }

    function answtf20() {
      if (
        req.body.answertf20 === selectedObject.correctanswertruefalse20 &&
        req.body.answertf20 !== undefined
      ) {
        return 1;
      }
      if (req.body.answertf20 !== selectedObject.correctanswertruefalse20) {
        return 0;
      }
      if (req.body.answertf20 === undefined) {
        return 0;
      }
    }

    const score =
    answchoose1() +
    answchoose2() +
    answchoose3() +
    answchoose4() +
    answchoose5() +
    answchoose6() +
    answchoose7() +
    answchoose8() +
    answchoose9() +
    answchoose10() +
    answchoose11() +
    answchoose12() +
    answchoose13() +
    answchoose14() +
    answchoose15() +
    answchoose16() +
    answchoose17() +
    answchoose18() +
    answchoose19() +
    answchoose20() +
    answassy1() +
    answassy2() +
    answassy3() +
    answassy4() +
    answassy5() +
    answassy6() +
    answassy7() +
    answassy8() +
    answassy9() +
    answassy10() +
    answassy11() +
    answassy12() +
    answassy13() +
    answassy14() +
    answassy15() +
    answassy16() +
    answassy17() +
    answassy18() +
    answassy19() +
    answassy20() +
    answcomplete1() +
    answcomplete2() +
    answcomplete3() +
    answcomplete4() +
    answcomplete5() +
    answcomplete6() +
    answcomplete7() +
    answcomplete8() +
    answcomplete9() +
    answcomplete10() +
    answcomplete11() +
    answcomplete12() +
    answcomplete13() +
    answcomplete14() +
    answcomplete15() +
    answcomplete16() +
    answcomplete17() +
    answcomplete18() +
    answcomplete19() +
    answcomplete20() +
    answtf1() +
    answtf2() +
    answtf3() +
    answtf4() +
    answtf5() +
    answtf6() +
    answtf7() +
    answtf8() +
    answtf9() +
    answtf10() +
    answtf11() +
    answtf12() +
    answtf13() +
    answtf14() +
    answtf15() +
    answtf16() +
    answtf17() +
    answtf18() +
    answtf19() +
    answtf20() 

    const group = {
      firstname: user.firstname,
      lastname: user.lastname,
      score: score,
      code: user.code,
      examname: selectedObject.examname,
      examtime: moment(),
      questionnumber: selectedObject.questionnumber,

      questionchoose1 : selectedObject.questionchoose1,
      questionchoose2 : selectedObject.questionchoose2,
      questionchoose3 : selectedObject.questionchoose3,
      questionchoose4 : selectedObject.questionchoose4,
      questionchoose5 : selectedObject.questionchoose5,
      questionchoose6 : selectedObject.questionchoose6,
      questionchoose7 : selectedObject.questionchoose7,
      questionchoose8 : selectedObject.questionchoose8,
      questionchoose9 : selectedObject.questionchoose9,
      questionchoose10 : selectedObject.questionchoose10,
      questionchoose11 : selectedObject.questionchoose11,
      questionchoose12 : selectedObject.questionchoose12,
      questionchoose13 : selectedObject.questionchoose13,
      questionchoose14 : selectedObject.questionchoose14,
      questionchoose15 : selectedObject.questionchoose15,
      questionchoose16 : selectedObject.questionchoose16,
      questionchoose17 : selectedObject.questionchoose17,
      questionchoose18 : selectedObject.questionchoose18,
      questionchoose19 : selectedObject.questionchoose19,
      questionchoose20 : selectedObject.questionchoose20,

      answerc1: req.body.answerc1,
      answerc2: req.body.answerc2,
      answerc3: req.body.answerc3,
      answerc4: req.body.answerc4,
      answerc5: req.body.answerc5,
      answerc6: req.body.answerc6,
      answerc7: req.body.answerc7,
      answerc8: req.body.answerc8,
      answerc9: req.body.answerc9,
      answerc10: req.body.answerc10,
      answerc11: req.body.answerc11,
      answerc12: req.body.answerc12,
      answerc13: req.body.answerc13,
      answerc14: req.body.answerc14,
      answerc15: req.body.answerc15,
      answerc16: req.body.answerc16,
      answerc17: req.body.answerc17,
      answerc18: req.body.answerc18,
      answerc19: req.body.answerc19,
      answerc20: req.body.answerc20,

      resultchoose1 : answchoose1(),
      resultchoose2 : answchoose2(),
      resultchoose3 : answchoose3(),
      resultchoose4 : answchoose4(),
      resultchoose5 : answchoose5(),
      resultchoose6 : answchoose6(),
      resultchoose7 : answchoose7(),
      resultchoose8 : answchoose8(),
      resultchoose9 : answchoose9(),
      resultchoose10 : answchoose10(),
      resultchoose11: answchoose11(),
      resultchoose12: answchoose12(),
      resultchoose13: answchoose13(),
      resultchoose14: answchoose14(),
      resultchoose15: answchoose15(),
      resultchoose16: answchoose16(),
      resultchoose17: answchoose17(),
      resultchoose18: answchoose18(),
      resultchoose19: answchoose19(),
      resultchoose20: answchoose20(),

      questionassy1 : selectedObject.questionassy1,
      questionassy2 : selectedObject.questionassy2,
      questionassy3 : selectedObject.questionassy3,
      questionassy4 : selectedObject.questionassy4,
      questionassy5 : selectedObject.questionassy5,
      questionassy6 : selectedObject.questionassy6,
      questionassy7 : selectedObject.questionassy7,
      questionassy8 : selectedObject.questionassy8,
      questionassy9 : selectedObject.questionassy9,
      questionassy10 : selectedObject.questionassy10,
      questionassy11 : selectedObject.questionassy11,
      questionassy12 : selectedObject.questionassy12,
      questionassy13 : selectedObject.questionassy13,
      questionassy14 : selectedObject.questionassy14,
      questionassy15 : selectedObject.questionassy15,
      questionassy16 : selectedObject.questionassy16,
      questionassy17 : selectedObject.questionassy17,
      questionassy18 : selectedObject.questionassy18,
      questionassy19 : selectedObject.questionassy19,
      questionassy20 : selectedObject.questionassy20,

      answerassy1: req.body.answerassy1,
      answerassy2: req.body.answerassy2,
      answerassy3: req.body.answerassy3,
      answerassy4: req.body.answerassy4,
      answerassy5: req.body.answerassy5,
      answerassy6: req.body.answerassy6,
      answerassy7: req.body.answerassy7,
      answerassy8: req.body.answerassy8,
      answerassy9: req.body.answerassy9,
      answerassy10: req.body.answerassy10,
      answerassy11: req.body.answerassy11,
      answerassy12: req.body.answerassy12,
      answerassy13: req.body.answerassy13,
      answerassy14: req.body.answerassy14,
      answerassy15: req.body.answerassy15,
      answerassy16: req.body.answerassy16,
      answerassy17: req.body.answerassy17,
      answerassy18: req.body.answerassy18,
      answerassy19: req.body.answerassy19,
      answerassy20: req.body.answerassy20,

      resultassy1 : answassy1(),
      resultassy2 : answassy2(),
      resultassy3 : answassy3(),
      resultassy4 : answassy4(),
      resultassy5 : answassy5(),
      resultassy6 : answassy6(),
      resultassy7 : answassy7(),
      resultassy8 : answassy8(),
      resultassy9 : answassy9(),
      resultassy10 : answassy10(),
      resultassy11: answassy11(),
      resultassy12: answassy12(),
      resultassy13: answassy13(),
      resultassy14: answassy14(),
      resultassy15: answassy15(),
      resultassy16: answassy16(),
      resultassy17: answassy17(),
      resultassy18: answassy18(),
      resultassy19: answassy19(),
      resultassy20: answassy20(),

      questioncomplete1 : selectedObject.questioncomplete1,
      questioncomplete2 : selectedObject.questioncomplete2,
      questioncomplete3 : selectedObject.questioncomplete3,
      questioncomplete4 : selectedObject.questioncomplete4,
      questioncomplete5 : selectedObject.questioncomplete5,
      questioncomplete6 : selectedObject.questioncomplete6,
      questioncomplete7 : selectedObject.questioncomplete7,
      questioncomplete8 : selectedObject.questioncomplete8,
      questioncomplete9 : selectedObject.questioncomplete9,
      questioncomplete10 : selectedObject.questioncomplete10,
      questioncomplete11 : selectedObject.questioncomplete11,
      questioncomplete12 : selectedObject.questioncomplete12,
      questioncomplete13 : selectedObject.questioncomplete13,
      questioncomplete14 : selectedObject.questioncomplete14,
      questioncomplete15 : selectedObject.questioncomplete15,
      questioncomplete16 : selectedObject.questioncomplete16,
      questioncomplete17 : selectedObject.questioncomplete17,
      questioncomplete18 : selectedObject.questioncomplete18,
      questioncomplete19 : selectedObject.questioncomplete19,
      questioncomplete20 : selectedObject.questioncomplete20,

      answercomplete1: req.body.answercomplete1,
      answercomplete2: req.body.answercomplete2,
      answercomplete3: req.body.answercomplete3,
      answercomplete4: req.body.answercomplete4,
      answercomplete5: req.body.answercomplete5,
      answercomplete6: req.body.answercomplete6,
      answercomplete7: req.body.answercomplete7,
      answercomplete8: req.body.answercomplete8,
      answercomplete9: req.body.answercomplete9,
      answercomplete10: req.body.answercomplete10,
      answercomplete11: req.body.answercomplete11,
      answercomplete12: req.body.answercomplete12,
      answercomplete13: req.body.answercomplete13,
      answercomplete14: req.body.answercomplete14,
      answercomplete15: req.body.answercomplete15,
      answercomplete16: req.body.answercomplete16,
      answercomplete17: req.body.answercomplete17,
      answercomplete18: req.body.answercomplete18,
      answercomplete19: req.body.answercomplete19,
      answercomplete20: req.body.answercomplete20,

      resultcomplete1 : answcomplete1(),
      resultcomplete2 : answcomplete2(),
      resultcomplete3 : answcomplete3(),
      resultcomplete4 : answcomplete4(),
      resultcomplete5 : answcomplete5(),
      resultcomplete6 : answcomplete6(),
      resultcomplete7 : answcomplete7(),
      resultcomplete8 : answcomplete8(),
      resultcomplete9 : answcomplete9(),
      resultcomplete10 : answcomplete10(),
      resultcomplete11: answcomplete11(),
      resultcomplete12: answcomplete12(),
      resultcomplete13: answcomplete13(),
      resultcomplete14: answcomplete14(),
      resultcomplete15: answcomplete15(),
      resultcomplete16: answcomplete16(),
      resultcomplete17: answcomplete17(),
      resultcomplete18: answcomplete18(),
      resultcomplete19: answcomplete19(),
      resultcomplete20: answcomplete20(),

      questiontf1 : selectedObject.questiontruefalse1,
      questiontf2 : selectedObject.questiontruefalse2,
      questiontf3 : selectedObject.questiontruefalse3,
      questiontf4 : selectedObject.questiontruefalse4,
      questiontf5 : selectedObject.questiontruefalse5,
      questiontf6 : selectedObject.questiontruefalse6,
      questiontf7 : selectedObject.questiontruefalse7,
      questiontf8 : selectedObject.questiontruefalse8,
      questiontf9 : selectedObject.questiontruefalse9,
      questiontf10 : selectedObject.questiontruefalse10,
      questiontf11 : selectedObject.questiontruefalse11,
      questiontf12 : selectedObject.questiontruefalse12,
      questiontf13 : selectedObject.questiontruefalse13,
      questiontf14 : selectedObject.questiontruefalse14,
      questiontf15 : selectedObject.questiontruefalse15,
      questiontf16 : selectedObject.questiontruefalse16,
      questiontf17 : selectedObject.questiontruefalse17,
      questiontf18 : selectedObject.questiontruefalse18,
      questiontf19 : selectedObject.questiontruefalse19,
      questiontf20 : selectedObject.questiontruefalse20,

      answertf1: req.body.answertf1,
      answertf2: req.body.answertf2,
      answertf3: req.body.answertf3,
      answertf4: req.body.answertf4,
      answertf5: req.body.answertf5,
      answertf6: req.body.answertf6,
      answertf7: req.body.answertf7,
      answertf8: req.body.answertf8,
      answertf9: req.body.answertf9,
      answertf10: req.body.answertf10,
      answertf11: req.body.answertf11,
      answertf12: req.body.answertf12,
      answertf13: req.body.answertf13,
      answertf14: req.body.answertf14,
      answertf15: req.body.answertf15,
      answertf16: req.body.answertf16,
      answertf17: req.body.answertf17,
      answertf18: req.body.answertf18,
      answertf19: req.body.answertf19,
      answertf20: req.body.answertf20,

      resulttruefalse1 : answtf1(),
      resulttruefalse2 : answtf2(),
      resulttruefalse3 : answtf3(),
      resulttruefalse4 : answtf4(),
      resulttruefalse5 : answtf5(),
      resulttruefalse6 : answtf6(),
      resulttruefalse7 : answtf7(),
      resulttruefalse8 : answtf8(),
      resulttruefalse9 : answtf9(),
      resulttruefalse10 : answtf10(),
      resulttruefalse11: answtf11(),
      resulttruefalse12: answtf12(),
      resulttruefalse13: answtf13(),
      resulttruefalse14: answtf14(),
      resulttruefalse15: answtf15(),
      resulttruefalse16: answtf16(),
      resulttruefalse17: answtf17(),
      resulttruefalse18: answtf18(),
      resulttruefalse19: answtf19(),
      resulttruefalse20: answtf20(),
    };
    // const results =
    // await User.updateOne( {role : "Admin"},
    // { $push: {results : group}})

    const results2 = await Score.create(group);

    res.redirect("/exam");
  })
);

router.post(
  "/updatemedication",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY)
    await User.findByIdAndUpdate({_id : decoded.id},  { update : req.body})
  

    const result = await Medication.findOne({generic : req.body.generic})
    const update = req.body.select
    const updatemedication = result[update]
    
  
    if (updatemedication) {
      res.render("edit.ejs", {updatemedication})
    }

  })
);

router.post(
  "/updatemedication2",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY)
    const user = await User.findById({_id : decoded.id})
    const userupdate = user.update
    const {generic} = userupdate
    const {select} = userupdate
    const medicationupdate = await Medication.findOneAndUpdate({generic : generic}, { [select] : req.body.input})
if (medicationupdate) {
  res.redirect("/dic")
}
    

  })
);

// NURSE ADD PATIENT
router.post(
  "/add_patient_nurse",
  [check("mrn").isNumeric(), check("requestype").notEmpty()],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }
    const patient = await Newpatient.findOne({ addpatientmrn: req.body.mrn });

    if (patient == null) {
      return res.json({ nopatient: "This Patient Not Found" });
    }

    if (patient) {
      req.body.patientname = patient.addpatientname;
    }

    if (req.body.ptfloor === "Choose...") {
      return res.json({ noptfloor: "You Must Enter This Field" });
    }

    if (req.body.requestype === "Choose....") {
      return res.json({ norequestype: "You Must Enter This Field" });
    }

    if (req.body.oraliv === "Choose....") {
      return res.json({ oraliv: "You Must Enter This Field" });
    }

    req.body.commentime = moment()
    const nurseAddpatient = await Inpatientschema.create(req.body);
    res.json({ nurse_add_patient: nurseAddpatient });
  })
);

// NURSE POST SEARCH
router.post("/nursesearch", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const searchText = req.body.searchText.trim();
  const date = moment().format("YYYY-MM-DD");
  const startDate = date + "T00:00:00.000+03:00";
  const endDate = date + "T23:59:59.000+03:00";
  const result = await Inpatientschema.find( {
    requestype : { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ]} ,
    createdAt: { $gte: startDate, $lte: endDate } })
  const find = result.filter( item => item.mrn.match(searchText))
if (find) {
  res.render("Nurse/nursesearch.ejs", {array : find, moment: moment})
}
}) );

// NURSE SEARCH DATE
router.post(
  "/findDateNurse",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const sdate = req.body.sDate;
    const edate = req.body.eDate;
    const startDate = sdate + "T00:00:00.000+03:00";
    const endDate = edate + "T23:59:59.000+03:00";
    const results = await Inpatientschema.find({
      requestype :  { $in: [ /Pyxis Refill/i, /Nurse DisCharge Medication/i ] },
      createdAt: { $gte: startDate, $lte: endDate },
    });

    if (results === undefined) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { nursefinddate: [] } }
      );
    }

    if (results) {
      await User.findOneAndUpdate(
        { _id: decoded.id },
        { $set: { nursefinddate: results } }
      );
    }

    if (results) {
      res.render("Nurse/nursefinddate.ejs", {
        searcharray: results,
        moment: moment,
      });
    }
  })
);

// ADD PRESENTATION
router.post(
  "/addpresentation",
  upload.single("prepath"),
  [
    check("prepath").notEmpty()
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
  
    if (req.body.title === "") {
      return res.json({ notitle: "You Must Enter This Field" });
    }

    const code = req.body.precode
  
    if (code === "") {
      return res.json({ codeempty: "You Must Enter This Field" });
    }
    
    if (!code.includes("Pre")){
      return res.json({ nopre: "Please Enter A Code Start With Pre" });
    }
    
    const findcode = await Presenstation.findOne({ precode: req.body.precode });
    if (findcode) {
      return res.json({ codeexist: "This Code Is Already Exists" });
    }

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    console.log(req.body.prepath);
    req.body.prepath = req.file.filename;
    
    if (!findcode) {
       const done = await Presenstation.create(req.body)
       res.json({ done : done})
    }

  })
);

// ADD DIC COMUNICATION
router.post(
  "/communication",
  uploadic.single("dicpath"),
  [
    check("dicpath").notEmpty()
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    if (req.body.dictitle === "") {
      return res.json({ notitle: "You Must Enter This Field" });
    }

    const code = req.body.diccode
  
    if (code === "") {
      return res.json({ codeempty: "You Must Enter This Field" });
    }
    
    if (!code.includes("Dic")){
      return res.json({ nodic: "Please Enter A Code Start With Dic" });
    }
    
    const findcode = await Communication.findOne({ diccode: req.body.diccode });
    if (findcode) {
      return res.json({ codeexist: "This Code Is Already Exists" });
    }
    

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    console.log(req.body.dicpath);
    req.body.dicpath = req.file.filename;
    
    if (!findcode) {
       const done = await Communication.create(req.body)
       res.json({ done : done})
    }

  })
);

// ADD POLICY
router.post(
  "/addpolicy",
  uploadpolicy.single("policypath"),
  [
    check("policypath").notEmpty()
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    if (req.body.policytitle === "") {
      return res.json({ notitle: "You Must Enter This Field" });
    }

    const code = req.body.policycode
  
    if (code === "") {
      return res.json({ codeempty: "You Must Enter This Field" });
    }
    
    if (!code.includes("Policy")){
      return res.json({ nopolicy: "Please Enter A Code Start With Dic" });
    }
    
    const findcode = await Policy.findOne({ diccode: req.body.policycode });
    if (findcode) {
      return res.json({ codeexist: "This Code Is Already Exists" });
    }
    

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    console.log(req.body.policypath);
    req.body.policypath = req.file.filename;
    
    if (!findcode) {
       const done = await Policy.create(req.body)
       res.json({ done : done})
    }

  })
);

// ADD RARE PROTOCOLS
router.post(
  "/addrareprotocols",
  uploadrare.single("rarepath"),
  [
    check("rarepath").notEmpty()
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    if (req.body.raretitle === "") {
      return res.json({ notitle: "You Must Enter This Field" });
    }

    const code = req.body.rarecode
  
    if (code === "") {
      return res.json({ codeempty: "You Must Enter This Field" });
    }
    
    if (!code.includes("Rare")){
      return res.json({ norare: "Please Enter A Code Start With Rare" });
    }
    
    const findcode = await Rareprotocols.findOne({ rarecode: req.body.rarecode });
    if (findcode) {
      return res.json({ codeexist: "This Code Is Already Exists" });
    }
    

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    console.log(req.body.rarepath);
    req.body.rarepath = req.file.filename;
    
    if (!findcode) {
       const done = await Rareprotocols.create(req.body)
       res.json({ done : done})
    }

  })
);

// ADD WORKFLOW
router.post(
  "/addworkflow",
  uploadWF.single("wfpath"),
  [
    check("wfpath").notEmpty()
  ],
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {

    if (req.body.wftitle === "") {
      return res.json({ notitle: "You Must Enter This Field" });
    }

    const code = req.body.wfcode
  
    if (code === "") {
      return res.json({ codeempty: "You Must Enter This Field" });
    }
    
    if (!code.includes("WF")){
      return res.json({ norare: "Please Enter A Code Start With WF" });
    }
    
    const findcode = await Workflow.findOne({ wfcode: req.body.wfcode });
    if (findcode) {
      return res.json({ codeexist: "This Code Is Already Exists" });
    }
    

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ errors: error.errors });
    }

    req.body.wfpath = req.file.filename;
    
    if (!findcode) {
       const done = await Workflow.create(req.body)
       res.json({ done : done})
    }

  })
);
// ADD PRESENTATION
// router.post(
//   "/addpresentation",
//   upload.single("prepath"),
//   checkIfUser,
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     console.log(req.file);
//   })
// );

// ---------------------------------
//DELETE REQUEST
// ----------------------------------

//INPATIENT DELETE PATIENT
router.delete("/delete/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//ICU DELETE PATIENT
router.delete("/deleteicu/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//ICC DELETE PATIENT
router.delete("/deleteicc/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//6TH DELETE PATIENT
router.delete("/delete6th/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//5TH DELETE PATIENT
router.delete("/delete5th/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//4TH DELETE PATIENT
router.delete("/delete4th/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//3RDO DELETE PATIENT
router.delete("/delete3rdo/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//3RDN DELETE PATIENT
router.delete("/delete3rdn/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//OUTPATIENT DELETE PATIENT
router.delete("/deleteout/:id", checkIfUser, requireAuth, (req, res) => {
  Outpatient.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//DISPENSE DELETE PATIENT
router.delete("/deletedis/:id", checkIfUser, requireAuth, (req, res) => {
  Dispenseschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//TODOLIST DELETE TASK
router.delete(
  "/deletetodolist/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const deltodolist = await User.updateOne(
      { _id: decoded.id },
      { $pull: { todolist: { _id: req.params.id } } }
    );
    if (deltodolist) {
      res.redirect(req.get('referer'));
    }
  })
);

//WATCH DELETE TASK
router.delete(
  "/watchdelete/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const deltodolist = await User.updateOne(
      { _id: decoded.id },
      { $pull: { watchsender: { _id: req.params.id } } }
    );
    if (deltodolist) {
      res.redirect(req.get('referer'));
    }
  })
);

//WATCHRECEIVE DELETE TASK
router.delete(
  "/watchreceiverdelete/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const deltodolist = await User.updateOne(
      { _id: decoded.id },
      { $pull: { watchreceiver: { _id: req.params.id } } }
    );
    if (deltodolist) {
      res.redirect(req.get('referer'));
    }
  })
);

//WATCH DELETE TASK
router.delete(
  "/dicdelete/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const deldic = await User.updateOne(
      { _id: decoded.id },
      { $pull: { dicsender: { _id: req.params.id } } }
    );
    if (deldic) {
      res.redirect(req.get('referer'));
    }
  })
);

//WATCH DELETE TASK
router.delete(
  "/deleteuser/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const deldic = await User.findByIdAndDelete({ _id: req.params.id });
    if (deldic) {
      res.redirect(req.get('referer'));
    }
  })
);

//PYXIS MEDICATION TRADE DELETE
router.delete(
  "/deletepyxismed/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const deldic = await PyxisTrade.findByIdAndDelete({ _id: req.params.id });
    if (deldic) {
      res.redirect(req.get('referer'));
    }
  })
);

//DISPENSE DELETE PATIENT
router.delete("/deletedisp/:id", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
const result = await  Dispenseschema.findByIdAndDelete(req.params.id)
  if (result) {
    res.redirect(req.get('referer'));
  }
}) );

//NURSE DELETE PATIENT
router.delete("/deletenurse/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect(req.get('referer'));
    })
    .catch((err) => {
      console.log(err);
    });
});

//DELETE PRESENTATION
router.delete("/deletepresentation", checkIfUser, requireAuth, 
  asyncHandler( async (req, res) => {
    const find = await Presenstation.findOneAndDelete({title :req.body.title})
    if (find) {
    res.redirect(req.get('referer'));  
    }
  }) );

  //DELETE DIC COMMUNICATION
router.delete("/deletecommunication", checkIfUser, requireAuth, 
  asyncHandler( async (req, res) => {
    const find = await Communication.findOneAndDelete({dictitle :req.body.dictitle})
    const directoryPath = "uploads/Dicomunication/"
    const fileName = find.dicpath
    
    fs.unlink(directoryPath + fileName, (err) => {
    if (err) {
        throw err;
      }

  console.log("Delete File successfully.");
});
    if (find) {
    res.redirect(req.get('referer'));  
    }
  }) );

  //DELETE POLICY
router.delete("/deletepolicy", checkIfUser, requireAuth, 
  asyncHandler( async (req, res) => {
    const find = await Policy.findOneAndDelete({policytitle :req.body.policytitle})
    const directoryPath = "uploads/Policy/"
    const fileName = find.policypath
    
    fs.unlink(directoryPath + fileName, (err) => {
    if (err) {
        throw err;
      }

  console.log("Delete File successfully.");
});
    if (find) {
    res.redirect(req.get('referer'));  
    }
  }) );

  //DELETE PROTOCOLS
  router.delete("/deleteprotocols", checkIfUser, requireAuth, 
  asyncHandler( async (req, res) => {
    const find = await Rareprotocols.findOneAndDelete({raretitle :req.body.raretitle})
    const directoryPath = "uploads/Rare/"
    const fileName = find.rarepath
    
    fs.unlink(directoryPath + fileName, (err) => {
    if (err) {
        throw err;
      }

  console.log("Delete File successfully.");
    });
    if (find) {
    res.redirect(req.get('referer'));  
    }
    })
  );

  //DELETE WORKFLOW
  router.delete("/deleteworkflow", checkIfUser, requireAuth, 
  asyncHandler( async (req, res) => {
    const find = await Workflow.findOneAndDelete({wftitle :req.body.wftitle})
    console.log(find.wfpath)

    const directoryPath = "uploads/WorkFlow/"
    const fileName = find.wfpath
    
    fs.unlink(directoryPath + fileName, (err) => {
    if (err) {
        throw err;
      }

  console.log("Delete File successfully.");
});
    if (find) {
    res.redirect(req.get('referer'));  
    }
  })
 );

  //DELETE EXAM
  router.delete("/deleteexam", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
  const results = await User.findByIdAndUpdate({_id : decoded.id},{ examchoose: {} })
  console.log(results)
  if (results) {
    res.redirect(req.get('referer'));  
    }
  }) 
  );

    //DELETE EXAM RECORD
  router.delete("/deletescore/:id", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const results = await Score.findByIdAndDelete(req.params.id)
  if (results) {
    res.redirect(req.get('referer'));  
    }
  }) );

// ---------------------------------
//PUT REQUEST
// ----------------------------------

// INPATIENT / EDIT
router.put(
  "/edit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// 3RDN / EDIT
router.put(
  "/edit3rdn/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// 3RDN NOTDONE / EDIT
router.put(
  "/edit3rdnotdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// 3RDO / EDIT
router.put(
  "/edit3rdo/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// 3RDO NOT DONE / EDIT
router.put(
  "/edit3rdonotdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// 4TH / EDIT
router.put(
  "/edit4th/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// 4TH NOT DONE / EDIT
router.put(
  "/edit4thnotdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// 5TH / EDIT
router.put(
  "/edit5th/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// 5TH NOT DONE / EDIT
router.put(
  "/edit5thnotdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// BMT / EDIT
router.put(
  "/editbmt/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// BMT NOT DONE / EDIT
router.put(
  "/editbmtnotdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// ICC / EDIT
router.put(
  "/editicc/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// ICC NOT DONE / EDIT
router.put(
  "/editiccnotdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// ICU / EDIT
router.put(
  "/editicu/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// ICU NOT DONE / EDIT
router.put(
  "/editicunotdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// OR / EDIT
router.put(
  "/editor/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// OR NOT DONE / EDIT
router.put(
  "/editornotdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// SURGICAL / EDIT
router.put(
  "/editsurgical/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// OR NOT DONE / EDIT
router.put(
  "/editsurgicalnotdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// PUTPATIENT / EDIT
router.put(
  "/editout/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Outpatient.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// IVPREP INPATIENT / DONE
router.put(
  "/done/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const result = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    if (result) {
      res.redirect(req.get('referer'));
    }
  })
);

// IVPREP INPATIENT EXTRADOSE / DONE
router.put("/doneed/:id", checkIfUser, requireAuth, asyncHandler(async (req, res) => {
req.body.commentime2 = moment()
  const results = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
  if(results)  {
    res.redirect(req.get('referer')); 
  }
}) );

// IVPREP BMT / DONE
router.put("/donebmt/:id", checkIfUser, requireAuth, asyncHandler(async (req, res) => {
  req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    if(results)  {
      res.redirect(req.get('referer'));
    }
  }) );

// IVPREP INPATIENT / EDIT
router.put(
  "/inedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// IVPREP SEARCH INPATIENT / EDIT
router.put(
  "/insearchedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// IVPREP INPATIENT EXTRADOSE / EDIT
router.put("/inedited/:id", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  req.body.commentime2 = moment()
  const result = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
  if(result)  {
    res.redirect(req.get('referer'));
  }
  
}) );

// IVPREP BMT / EDIT
router.put("/ineditedbmt/:id", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  req.body.commentime2 = moment()
  const result = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
  if(result)  {
    res.redirect(req.get('referer'));
  }
  
}) );

// IVPREP INPATIENT DONE VIEW / EDIT
router.put(
  "/ineditdoneview/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// IVPREP OUTPATIENT / DONE
router.put(
  "/doneout/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Outpatient.findByIdAndUpdate(req.params.id, req.body);
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// IVPREP OUTPATIENT / EDIT
router.put(
  "/outedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Outpatient.findByIdAndUpdate(req.params.id, req.body);
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);


// IVPREP DISPENSE / EDIT
router.put(
  "/editdisp/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    await Dispenseschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// IVPREP DISPENSE / EDIT / DONE VIEW
router.put(
  "/editdonedisp/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    await Dispenseschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// IVPREP DISPENSE / DONE
router.put(
  "/prepdonedispense/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    await Dispenseschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// IVPREP DISPENSE / SEARCH / EDIT
router.put(
  "/dissearchedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await Dispenseschema.findByIdAndUpdate(req.params.id, req.body);
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// DISPENSE / EDIT
router.put(
  "/editdispense/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Dispenseschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// Dispense INPATIENT / EDIT
router.put(
  "/dispinedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// DISPENSE INPATIENT EXTRADOSE / EDIT
router.put("/dispinedited/:id", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  req.body.commentime2 = moment() 
  const result = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
  if (result) {
    res.redirect(req.get('referer'));
  }
}) );

// DISPENSE INPATIENT DISCHARGE / EDIT
router.put("/dispineditdischarge/:id", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  req.body.commentime2 = moment()
  const result = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
  if (result) {
    res.redirect(req.get('referer'));
  }
}) );

// DISPENSE INPATIENT DONE VIEW / EDIT
router.put(
  "/dispineditdoneview/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// Dispense OUTPATIENT / EDIT
router.put("/dispoutedit/:id", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const result = await Outpatient.findByIdAndUpdate(req.params.id, req.body)
  if (result) {
    res.redirect(req.get('referer'));
  }
}) );

// DISPENSE INPATIENT / DONE
router.put(
  "/donedisin/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// DISPENSE INPATIENT EXTRADOSE / DONE
router.put("/donedisined/:id", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  req.body.commentime2 = moment()
  const result = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
  if (result) {
    res.redirect(req.get('referer'));
  }
}) );

// DISPENSE INPATIENT DISCHARGE / DONE
router.put("/donedisindischarge/:id", checkIfUser, requireAuth, asyncHandler(async(req, res) => {
  const result = await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
  if (result) {
    res.redirect(req.get('referer'));
  }
}) );

// DISPENSE OUTPATIENT / DONE
router.put("/donedisout/:id", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const result = await Outpatient.findByIdAndUpdate(req.params.id, req.body)
  if (result) {
    res.redirect(req.get('referer'));
  }
}) );

// Dispense PYXIS / EDIT
router.put(
  "/pyxisedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// Dispense PYXIS / EDIT / REFILL
router.put(
  "/pyxiseditrefill/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// Dispense PYXIS / EDIT / PRODUCT ASSIGN
router.put(
  "/pyxiseditproduct/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// Dispense PYXIS / EDIT / DONE VIEW
router.put(
  "/pyxiseditdoneview/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// DISPENSE PYXIS / DONE VIEW
router.put(
  "/pyxisviewdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// DISPENSE PYXIS / REFILL / DONE 
router.put(
  "/pyxisrefilldone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// DISPENSE PYXIS / PRODUCT / DONE 
router.put(
  "/pyxisproductdone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime2 = moment()
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// DISPENSE PYXIS / DONE / DONE 
router.put(
  "/pyxisdonedone/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// LAB INPATIENT / DONE
router.put(
  "/donelab/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
  const result =   await Labschema.findByIdAndUpdate(req.params.id, req.body)
  if (result) {
    res.redirect(req.get('referer'));
  }
  })
);

// LAB TOXICITY VIEW EDIT
router.put(
  "/labtoxicityviewedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.time = moment()
    await Labtoxicityschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// LAB HIDE
router.put(
  "/labdel/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Labschema.findByIdAndUpdate(req.params.id, {active : false})
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// LAB HIDE RECIVED
router.put(
  "/labdelrec/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Labschema.findByIdAndUpdate(req.params.id, {labcomment : req.body.labcomment})
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

//ATTACH FILE INPATIENT
router.put(
  "/attach/:id",
  uploadSingleImage("attachfile"),
  imageresizeforinpatient,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//ATTACH FILE ICU
router.put(
  "/attachICU/:id",
  uploadSingleImage("attachfile"),
  imageresizeforinpatient,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//ATTACH FILE ICC
router.put(
  "/attachICC/:id",
  uploadSingleImage("attachfile"),
  imageresizeforinpatient,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//ATTACH FILE BMT
router.put(
  "/attachBMT/:id",
  uploadSingleImage("attachfile"),
  imageresizeforinpatient,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//ATTACH FILE 5TH
router.put(
  "/attach5TH/:id",
  uploadSingleImage("attachfile"),
  imageresizeforinpatient,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//ATTACH FILE 4th
router.put(
  "/attach4TH/:id",
  uploadSingleImage("attachfile"),
  imageresizeforinpatient,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//ATTACH FILE 3rdO
router.put(
  "/attach3rdO/:id",
  uploadSingleImage("attachfile"),
  imageresizeforinpatient,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//ATTACH FILE 3rdN
router.put(
  "/attach3rdN/:id",
  uploadSingleImage("attachfile"),
  imageresizeforinpatient,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//ATTACH FILE outpatient
router.put(
  "/attachout/:id",
  uploadSingleImage("attachfile"),
  imageresizeforoutpatient,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Outpatient.findByIdAndUpdate(req.params.id, req.body);
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//ATTACH FILE DISPENSE
router.put(
  "/attachdisp/:id",
  uploadSingleImage("attachfile"),
  imageresizefordispense,
  checkIfUser,
  requireAuth,
  async (req, res) => {
    const results = await Dispenseschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect(req.get('referer'));
    }
  }
);

//CHANGE PASSWORD
router.put(
  "/changepassword",
  [
    check(
      "password",
      "Password must be at least 8 characters with 1 upper case letter and 1 number"
    ).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
  ],
  asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ noemail: "Email Not Found" });
    }
    if (!user.passwordResetVerified) {
      return res.json({ noverify: "ResetCode Not Verified" });
    }

    if (req.body.cpassword !== req.body.password) {
      return res.json({ nocpass: "Password Did't Match" });
    }

    const objError = validationResult(req);
    if (!objError.isEmpty()) {
      return res.json({ validationerrors: objError.errors });
    }

    user.password = req.body.password;
    user.passwordResetCode = undefined;
    user.passwordResetExpire = undefined;
    user.passwordResetVerified = false;
    await user.save();

    res.json({ message: "Password Changed Successfully" });
  })
);

//UPDATE PASSWORD
router.put(
  "/updatepassword",
  [
    check(
      "password",
      "Password must be at least 8 characters with 1 upper case letter and 1 number"
    ).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
  ],
  asyncHandler(async (req, res, next) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    req.params.id = decoded.id;
    const user = await User.findById(req.params.id);

    if (user) {
      if (req.body.cpassword !== req.body.password) {
        return res.json({ nocpass: "Password Did't Match" });
      }
      const objError = validationResult(req);
      if (!objError.isEmpty()) {
        return res.json({ validationerrors: objError.errors });
      }

      user.password = req.body.password;
      user.passwordResetCode = undefined;
      user.passwordResetExpire = undefined;
      user.passwordResetVerified = false;
      await user.save();

      res.cookie("jwt", "", { httpOnly: true, maxAge: 1 });
      res.json({ message: "Password Changed Successfully" });
    }
  })
);

//UPDATE PROFILE
router.put(
  "/updateprofile",
  [check("firstname").notEmpty().trim(), check("lastname").notEmpty().trim()],
  asyncHandler(async (req, res, next) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    req.params.id = decoded.id;
    const user = await User.findById(req.params.id);

    if (user) {
      if (req.body.cpassword !== req.body.password) {
        return res.json({ nocpass: "Password Did't Match" });
      }
      const objError = validationResult(req);
      if (!objError.isEmpty()) {
        return res.json({ validationerrors: objError.errors });
      }

      user.password = req.body.password;
      user.passwordResetCode = undefined;
      user.passwordResetExpire = undefined;
      user.passwordResetVerified = false;
      await user.save();

      res.cookie("jwt", "", { httpOnly: true, maxAge: 1 });
      res.json({ message: "Password Changed Successfully" });
    }
  })
);

// TODOLIST / EDIT
router.put(
  "/edittodolist/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);

    const results = await User.updateOne(
      { "todolist._id": req.params.id },
      {
        $set: {
          "todolist.$.title": req.body.title,
        },
      }
    );

    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// WATCH SENDER / EDIT
router.put(
  "/watchedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const patient = await Newpatient.findOne({
      addpatientmrn: req.body.patientmrn,
    });

    if (patient == null) {
      return res.json({ nopatientmrn: "Patient not found" });
    }

    const patientname = patient.addpatientname;
    req.body.patientname = patientname;

    const results = await User.updateOne(
      { "watchsender._id": req.params.id },
      {
        $set: {
          "watchsender.$.message": req.body.message,
          "watchsender.$.dome": req.body.dome,
          "watchsender.$.floor": req.body.ptfloor,
          "watchsender.$.ptmrn": req.body.patientmrn,
          "watchsender.$.ptname": req.body.patientname,
          "watchsender.$.comment": req.body.comment,
        },
      }
    );

    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const selectedObject = user.watchsender.find((item) => {
      return item._id == req.params.id;
    });
    const selectdetector = selectedObject.detector;
    const detector = await User.updateOne(
      { "watchreceiver.detector": selectdetector },
      {
        $set: {
          "watchreceiver.$.message": req.body.message,
          "watchreceiver.$.dome": req.body.dome,
          "watchreceiver.$.floor": req.body.ptfloor,
          "watchreceiver.$.ptmrn": req.body.patientmrn,
          "watchsender.$.comment": req.body.comment,
          "watchreceiver.$.ptname": req.body.patientname,
        },
      }
    );

    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// WATCH RECIEVER / EDIT
router.put(
  "/watchreceiveredit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await User.updateOne(
      { "watchreceiver._id": req.params.id },
      {
        $set: {
          "watchreceiver.$.comment": req.body.comment,
        },
      }
    );

    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const selectedObject = user.watchreceiver.find((item) => {
      return item._id == req.params.id;
    });
    const selectdetector = selectedObject.detector;
    const detector = await User.updateOne(
      { "watchsender.detector": selectdetector },
      {
        $set: {
          "watchsender.$.comment": req.body.comment,
        },
      }
    );

    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

//UPDATE MEDICATION
// router.put(
//   "/updatemedication",
//   checkIfUser,
//   requireAuth,
//   asyncHandler(async (req, res) => {

//     if (req.body.select === "classname") {
//       const results0 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { classname: req.body.input }
//       );
//       if (results0) {
//         res.redirect("/dic");
//       }
//     }
    
//     if (req.body.select === "trade") {
//       const results = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { trade: req.body.input }
//       );
//       if (results) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "origin") {
//       const results1 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { origin: req.body.input }
//       );
//       if (results1) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "mechanism") {
//       const results2 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { mechanism: req.body.input }
//       );
//       if (results2) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "dosageform") {
//       const results3 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { dosageform: req.body.input }
//       );
//       if (results3) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "dose") {
//       const results4 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { dose: req.body.input }
//       );
//       if (results4) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "adminstration") {
//       const results5 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { adminstration: req.body.input }
//       );
//       if (results5) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "ptinformation") {
//       const results6 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { ptinformation: req.body.input }
//       );
//       if (results6) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "sideeffect") {
//       const results7 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { sideeffect: req.body.input }
//       );
//       if (results7) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "monitor") {
//       const results8 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { monitor: req.body.input }
//       );
//       if (results8) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "interaction") {
//       const results9 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { interaction: req.body.input }
//       );
//       if (results9) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "specialprecaution") {
//       const results10 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { specialprecaution: req.body.input }
//       );
//       if (results10) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "toxicity") {
//       const results11 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { toxicity: req.body.input }
//       );
//       if (results11) {
//         res.redirect("/dic");
//       }
//     }

//     if (req.body.select === "miscellaneous") {
//       const results12 = await Medication.findOneAndUpdate(
//         { generic: req.body.generic },
//         { miscellaneous: req.body.input }
//       );
//       if (results12) {
//         res.redirect("/dic");
//       }
//     }
//   })
// );

// DIC RECIEVER ANSWER
router.put(
  "/dicanswer/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await Qa.findByIdAndUpdate(req.params.id , req.body );
    const selectdetector = results.detector;
    const detector = await User.updateOne(
      { "dicsender.detector": selectdetector },
      {
        $set: {
          "dicsender.$.answer": req.body.answer,
          "dicsender.$.refrence": req.body.refrence,
          "dicsender.$.refrencelink": req.body.refrencelink,
          "dicsender.$.drugname": req.body.drugname,
        },
      }
    );

    if (detector) {
      res.redirect("/dic");
    }
  })
);

// ADMIN ROLE
router.put(
  "/userole/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { role: req.body.role }
    );

    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// TRADE CHOOSE SUBMIT
router.put(
  "/tradeselect/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await PyxisTrade.findByIdAndUpdate(
      { _id: req.params.id },
      { tradeselect: req.body.tradeselect }
    );

    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// TRADE UPDATE
router.put(
  "/pyxistradeupdate/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await PyxisTrade.findByIdAndUpdate(req.params.id, req.body);

    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// TRADE CHOOSE SHORTAGE
router.put(
  "/tradeselectshortage/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await Shortage.findByIdAndUpdate(
      { _id: req.params.id },
      { tradeselect: req.body.tradeselect }
    );

    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// TRADE UNCHOOSE SHORTAGE
router.put(
  "/traderemoveshortage/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await Shortage.findByIdAndUpdate(
      { _id: req.params.id },
      { tradeselect: req.body.tradeselect }
    );

    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// SCORE UPDATE
router.put(
  "/editscore/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const scoreUpdate = await Score.findByIdAndUpdate(req.params.id, {
      $set: { score: req.body.score },
    });

    if (scoreUpdate) {
      res.redirect(req.get('referer'));
    }
  })
);

// LockUser
router.put(
  "/lockuser/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const lockUser = await User.findByIdAndUpdate(req.params.id, {
      $set: { active: false },
    });

    if (lockUser) {
      res.redirect(req.get('referer'));
    }
  })
);

// UnLockUser
router.put(
  "/unlockuser/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const unlockUser = await User.findByIdAndUpdate(req.params.id, {
      $set: { active: true },
    });

    if (unlockUser) {
      res.redirect(req.get('referer'));
    }
  })
);

//DIC ANSWER UPDATE
router.put(
  "/answerupdate/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
  
    const results = await Qa.findByIdAndUpdate(req.params.id , req.body);

    if (results) {
      res.redirect(req.get('referer'));
    }
  })
);

// LAB TOXICITY / DONE
router.put(
  "/donelabtoxicity/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.time2 = moment()
    req.body.edit = "DONE"
    await Labtoxicityschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// NURSE / EDIT
router.put(
  "/nurseedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.commentime = moment()
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect(req.get('referer'));
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

module.exports = router;
