const crypto = require("crypto");
const express = require("express");
//PASSWORD HACH
const bcrypt = require("bcrypt");
//ROUTER
const router = express.Router();
//ERROR HANDILING TRY_CATCH OR THEN_CATCH
const asyncHandler = require("express-async-handler");
//SLUGIFY
const slugify = require("slugify");
//MOMMENT TIMESTAMP
const moment = require("moment");
//JWT TOKEN
const jwt = require("jsonwebtoken");
//VALIDATION RULE
const { check, validationResult } = require("express-validator");
//Cloudinary
const cloudinary = require("cloudinary").v2;
//TO CSV FILE
const CsvParser = require("json2csv").Parser;
//TO EXCELL FILE
const excelJs = require("exceljs");
const xlsx = require("xlsx");
//ERROR HANDILING
const ApiError = require("../utils/apierror");

//MULTER DISKSTORAGE
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     const filename = `user-${uuidv4()}-${Date.now()}.${ext} `;
//     cb(null, filename);
//   },
// });

//SCHEMA
const Inpatientschema = require("../models/inpatientSchema");
const User = require("../models/newRegSchema");
const Outpatient = require("../models/outpatientSchema");
const Dispenseschema = require("../models/dispenseSchema");
const Newpatient = require("../models/newPatientSchema");
const Labschema = require("../models/labSchema");
const Chatmessage = require("../models/chatMessage");
const Medication = require("../models/medication");
const Medicationclass = require("../models/medicationClass");
//MIDDLEWARE
const { requireAuth } = require("../middleware/middleware");
const { checkIfUser } = require("../middleware/middleware");
const { uploadSingleImage } = require("../middleware/middleware");
const { imageresizeforinpatient } = require("../middleware/middleware");
const { imageresizeforoutpatient } = require("../middleware/middleware");
const { profileimage } = require("../middleware/middleware");
const { watchreceiver } = require("../middleware/middleware");
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

router.use(express.static("public"));
//dotenv
require("dotenv").config();
//SEND EMAIL
const sendEmail = require(`../utils/sendEmail`);
const { now } = require("mongoose");
// const app = express();
// app.use(express.static(path.join(__dirname, "")));

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_ClOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

cloudinary.config({
  cloud_name: "dw2lzbgmt",
  api_key: "594878572393349",
  api_secret: "KZVTWvN1LcrpVm-COLVX-3VgHzU",
});

// ---------------------------------
//GET REQUEST
// ----------------------------------

//ADMIN
router.get(
  "/admin",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findById({ _id: decoded.id });
    const exam = user.examchoose
    const {results} = user
    const custmer = await User.find().sort({ firstname : "asc"});
    const ldsearch = user.ldsearch
    const searchcode = ldsearch.searchText
    const find = user.results.filter( item => item.code === searchcode || item.examname === searchcode)
    // const arr = []
    // arr.push(find)
    // console.log(arr)

    

    if (custmer) {
      res.render("admin.ejs", { array: custmer, exam, results, moment : moment , find });
    }
  })
);

//ADMIN
router.post(
  "/ldsearch",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);  
    const custmer = await User.findByIdAndUpdate({_id : decoded.id} , { $set : {ldsearch : req.body}} );
    if (custmer) {
      res.redirect("/admin");
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
    const exam = results.examchoose
    const examname = exam.examname  
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
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
    console.log(startDate);
    console.log(endDate);
    const currentUser = await User.findOne({ _id: decoded.id });
    const { firstname } = currentUser;
    const { lastname } = currentUser;
    const receiver = currentUser.watchreceiver;
    if (receiver) {
      res.render("Watch/receiver.ejs", {
        moment: moment,
        receiver: receiver,
        firstname,
        lastname,
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
    const med = await Medication.find().sort("asc");
    const date = moment().format("YYYY-MM-DD");
    const startDate = date + "T00:00:00.000+00:00";
    const endDate = date + "T23:59:59.000+00:00";
    console.log(startDate, endDate);
    const search = currentUser.dicsearch;
    const dic = currentUser.dicreceiver.filter((item) => {
      const createdAt = moment(item.createdAt);
      return createdAt.isBetween(startDate, endDate);
    });
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
    if (receive) {
      res.render("Dic/dicsender.ejs", { receive, moment: moment });
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
      xlsx.writeFile(workbook, "C:\\PharmacyConnect\\Users.xlsx");
      res.redirect("/dic");
      res.send(new ApiError(201, "success", response));
    } else {
      res.send(new ApiError(404, "No Data Avaliable"));
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
    const array = [
      {
        OrgCode: 10,
        ItemNumber: "MED101010012",
        ItemDescription: "Bleocip 15mg",
        UOM: "amp",
        ItemCategory: "Bleomycin Injection 15mg",
        MedicationsStock: 3,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED101010013",
        ItemDescription: "Velcade 3.5mg",
        UOM: "vial(s)",
        ItemCategory: "Bortezomib Injection 3.5mg",
        MedicationsStock: 44,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED101010095",
        ItemDescription: "Jakavi 5mg 14 Tab",
        UOM: "STRIP 14TAB",
        ItemCategory: "Ruxolitinib Oral Solid 5mg",
        MedicationsStock: 20,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED101010096",
        ItemDescription: "Adcetris 50mg",
        UOM: "vial(s)",
        ItemCategory: "Brentuximab Injection 50mg",
        MedicationsStock: 5,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED101010164",
        ItemDescription: "Busulfan 2mg 25 Tab",
        UOM: "BOX 25TAB",
        ItemCategory: "Busulfan Oral Solid 2mg",
        MedicationsStock: 82,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED101040039",
        ItemDescription:
          "Cyclosporine Capsules USP Modified (Soft Gelatin Capsule) 100mg",
        UOM: "STRIP 10CAP",
        ItemCategory: "Cyclosporin Oral Solid 100mg (Modified)",
        MedicationsStock: 12,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED102010162",
        ItemDescription: "Unictam 1500mg Powder Vial",
        UOM: "vial(s)",
        ItemCategory: "Ampicillin and Sulbactam Injection 1500mg",
        MedicationsStock: 126,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED102030012",
        ItemDescription: "Tami Flu 75mg 10 Cap",
        UOM: "STRIP 10CAP",
        ItemCategory: "Oseltamivir Phosphate Oral Solid 75mg",
        MedicationsStock: 2,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED104010007",
        ItemDescription: "Atomax 25mg 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Atomoxetine Oral Solid 25mg",
        MedicationsStock: 102,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED104010038",
        ItemDescription: "Mirtimash 30mg 10 tab",
        UOM: "strip(s)",
        ItemCategory: "Mirtazapine Oral Solid 30mg",
        MedicationsStock: 72,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED104010062",
        ItemDescription: "Prozac 20mg 14 Cap",
        UOM: "Strip 14Cap",
        ItemCategory: "Fluoxetine Oral Solid 20mg",
        MedicationsStock: 4,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED104010063",
        ItemDescription: "Atomafutix 25mg 10Cap",
        UOM: "STRIP 10CAP",
        ItemCategory: "Atomoxetine Oral Solid 25mg",
        MedicationsStock: 1020,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED104020004",
        ItemDescription: "Tegretol 200mg 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Carbamazepime Oral Solid 200mg",
        MedicationsStock: 531,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED104020082",
        ItemDescription: "Cerebroforte 20% 120ML Syrup",
        UOM: "bottle(s)",
        ItemCategory: "Piracetam Oral Liquid 1gm",
        MedicationsStock: 65,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED106010050",
        ItemDescription: "Rivarospire 10mg 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Rivarospire Oral Solid 10mg",
        MedicationsStock: 100,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED106010076",
        ItemDescription: "Tareg 40mg 5 Tab",
        UOM: "STRIP 5TAB",
        ItemCategory: "Valsartan Oral Solid 40mg",
        MedicationsStock: 18,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED109020015",
        ItemDescription: "Enemax Enema",
        UOM: "bottle(s)",
        ItemCategory:
          "Sodium Dihydrogen phosphate dihydrate & Disodium Hydrogen phosphate dodecahydrate Enema Solution",
        MedicationsStock: 20,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED110010081",
        ItemDescription: "Aqualarm 10ml Eye Drops",
        UOM: "bottle(s)",
        ItemCategory: "Hyaluronic Acid Drops 0.24%",
        MedicationsStock: 95,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED111010072",
        ItemDescription: "Inestafenac 50mg 10Sachets",
        UOM: "BOX 10 Sachet",
        ItemCategory: "Diclofenac Oral Solid 50mg",
        MedicationsStock: 40,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED111050027",
        ItemDescription: "Efemyo eye Drops",
        UOM: "bottle(s)",
        ItemCategory:
          "Fluorometholone Micronized & Tetrahydrozoline HCL Drops 10ml",
        MedicationsStock: 3,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED111050042",
        ItemDescription: "Macrofuran 50mg 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Nitrofurantoin Oral Solid 50mg",
        MedicationsStock: 3,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED111050105",
        ItemDescription: "Forxiga 10mg 14 Tab",
        UOM: "STRIP 14TAB",
        ItemCategory: "Dapagliflozin Oral Solid 10mg",
        MedicationsStock: 10,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED111050116",
        ItemDescription: "Lepsiramp 4mg 7tab",
        UOM: "STRIP 7TAB",
        ItemCategory: "Perampanel Oral Solid 4mg",
        MedicationsStock: 5,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED111050117",
        ItemDescription: "Lepsiramp 6mg 7tab",
        UOM: "STRIP 7TAB",
        ItemCategory: "Perampanel Oral Solid 6mg",
        MedicationsStock: 10,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED113010013",
        ItemDescription: "Gadovist 1.0 mmol/ml syringe",
        UOM: "syringe(s)",
        ItemCategory: "Gadobutrol Injection 1.0 mmol/ml",
        MedicationsStock: 100,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED114010008",
        ItemDescription: "Twinrix 1ml Syringe",
        UOM: "syringe(s)",
        ItemCategory: "Hepatitis B Injection 0.5ml",
        MedicationsStock: 450,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED115010013",
        ItemDescription: "Qarziba 4.5 mg/ml",
        UOM: "vial(s)",
        ItemCategory: "Dinutuximab Beta Injection 4.5mg",
        MedicationsStock: 20,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED115010024",
        ItemDescription: "Lacteol Fort Sachets",
        UOM: "box(es)",
        ItemCategory: "Lyophilized Killed Microbial Bodies Oral Solid 6Sachets",
        MedicationsStock: 12,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED115010042",
        ItemDescription: "Zavicefta 2gm/0.5",
        UOM: "vial(s)",
        ItemCategory: "Ceftazidime-Avibactam Injection 2gm",
        MedicationsStock: 179,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED115010045",
        ItemDescription: "Prepawest",
        UOM: "box(es)",
        ItemCategory:
          "Macrogol & Sodium Sulphate, chloride, Ascorbate & Potassium Chloride & Ascorbic Acid Oral Solid 115gm",
        MedicationsStock: 4,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED115010056",
        ItemDescription: "Pravotin 100mg 30 Eff Sachet",
        UOM: "BOX 30 Sachet",
        ItemCategory: "Lactoferrin Oral Solid 100mg",
        MedicationsStock: 80,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED115010080",
        ItemDescription: "Darzalex 400mg / 20ml Vial",
        UOM: "vial(s)",
        ItemCategory: "Daratumumab Injection 400mg / 20ml",
        MedicationsStock: 6,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED115010081",
        ItemDescription: "Keytruda 100mg / 4ml Vial",
        UOM: "vial(s)",
        ItemCategory: "Pembrolizumab Injection 100mg/4ml",
        MedicationsStock: 1,
      },
      {
        OrgCode: 10,
        ItemNumber: "MED115010093",
        ItemDescription: "Darzalex 1800mg / 15ml Vial",
        UOM: "vial(s)",
        ItemCategory: "Daratumumab Injection 1800mg",
        MedicationsStock: 11,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED101010016",
        ItemDescription: "Xeloda 500mg 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Capecitabine Oral Solid 500mg",
        MedicationsStock: 0.2,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED101010079",
        ItemDescription: "Sutent 50mg 28 Cap",
        UOM: "BOX 28CAP",
        ItemCategory: "Sunitinib Oral Solid 50mg",
        MedicationsStock: 0.10714,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED101010095",
        ItemDescription: "Jakavi 5mg 14 Tab",
        UOM: "STRIP 14TAB",
        ItemCategory: "Ruxolitinib Oral Solid 5mg",
        MedicationsStock: 156,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED101040009",
        ItemDescription: "Rapamune 1g 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Sirolimus Oral Solid 1gm",
        MedicationsStock: 3,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED101040011",
        ItemDescription: "Prograf 1mg 100 cap",
        UOM: "BOX 100CAP",
        ItemCategory: "Tacrolimus Oral Solid 1mg",
        MedicationsStock: 2,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED101040018",
        ItemDescription: "Afinitor 5mg 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Everolimus Oral Solid 5mg",
        MedicationsStock: 183,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED102010086",
        ItemDescription: "Flub syrup 30ml",
        UOM: "Bottle 30ml",
        ItemCategory: "Flubendazole Oral Liquid 30ml",
        MedicationsStock: 2,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED102020027",
        ItemDescription: "Itracon 100mg 7Cap",
        UOM: "STRIP 7CAP",
        ItemCategory: "Itraconazole Oral Solid 100mg",
        MedicationsStock: 2,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED104010007",
        ItemDescription: "Atomax 25mg 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Atomoxetine Oral Solid 25mg",
        MedicationsStock: 27,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED104010025",
        ItemDescription: "Lustral 50mg 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Sertraline HCL Oral Solid 50mg",
        MedicationsStock: 125,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED104010064",
        ItemDescription: "Atomafutix 40mg 10Cap",
        UOM: "STRIP 10CAP",
        ItemCategory: "Atomoxetine Oral Solid 40mg",
        MedicationsStock: 246.2,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED104020004",
        ItemDescription: "Tegretol 200mg 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Carbamazepime Oral Solid 200mg",
        MedicationsStock: 165,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED104020052",
        ItemDescription: "Convagran 100mg 10 Cap",
        UOM: "STRIP 10CAP",
        ItemCategory: "Zonisamide Oral Solid 100mg",
        MedicationsStock: 4,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED106010067",
        ItemDescription: "Tenormin 50mg tab",
        UOM: "strip(s)",
        ItemCategory: "Atenolol Oral Solid 50mg",
        MedicationsStock: 29.4,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED106010076",
        ItemDescription: "Tareg 40mg 5 Tab",
        UOM: "STRIP 5TAB",
        ItemCategory: "Valsartan Oral Solid 40mg",
        MedicationsStock: 12,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED106040009",
        ItemDescription: "Crestor 20mg 7 Tab",
        UOM: "STRIP 7TAB",
        ItemCategory: "Rosuvastatin Oral Solid 20mg",
        MedicationsStock: 3.14286,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED109010032",
        ItemDescription: "Glycerin Gelatin Ped 5 Supp",
        UOM: "BOX 5 SUPP",
        ItemCategory: "Glycerin Rectal and Vaginal 1.47gm",
        MedicationsStock: 29,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED109010064",
        ItemDescription: "Zarotex gel",
        UOM: "tube(s)",
        ItemCategory: "Tazarotene Topical 0.1%",
        MedicationsStock: 2,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED110010081",
        ItemDescription: "Aqualarm 10ml Eye Drops",
        UOM: "bottle(s)",
        ItemCategory: "Hyaluronic Acid Drops 0.24%",
        MedicationsStock: 5,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED111010072",
        ItemDescription: "Inestafenac 50mg 10Sachets",
        UOM: "BOX 10 Sachet",
        ItemCategory: "Diclofenac Oral Solid 50mg",
        MedicationsStock: 9,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED111050049",
        ItemDescription: "Betmiga 10 Tab",
        UOM: "STRIP 10 TAB",
        ItemCategory: "Mirabergron Oral Solid 10Tab",
        MedicationsStock: 4.6,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED111050077",
        ItemDescription: "Citra Forte Granules",
        UOM: "bottle(s)",
        ItemCategory: "Potassium Sodium Hydrogen Citrate Oral Liquid 280mg",
        MedicationsStock: 1,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED111050088",
        ItemDescription: "Revolade 50 mg 7 tab",
        UOM: "STRIP 7TAB",
        ItemCategory: "Eltrombopag Oral Solid 50mg",
        MedicationsStock: 56,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED111050105",
        ItemDescription: "Forxiga 10mg 14 Tab",
        UOM: "STRIP 14TAB",
        ItemCategory: "Dapagliflozin Oral Solid 10mg",
        MedicationsStock: 6,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED112010027",
        ItemDescription: "Stark Sachet 25g 10 Sachet",
        UOM: "BOX 10 Sachet",
        ItemCategory: "Supplements Oral Solid Between 1 Year to 18 Years",
        MedicationsStock: 30.6,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED115010003",
        ItemDescription: "XALKOR 250mg 60 Tab",
        UOM: "BOX 60TAB",
        ItemCategory: "Crizotinib Oral Solid 250mg",
        MedicationsStock: 0.00001,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED115010009",
        ItemDescription: "Epimag 12 sachet",
        UOM: "BOX 12 Sachet",
        ItemCategory: "Magnesium Citrate Oral Solid 2.125gm",
        MedicationsStock: 3,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED115010024",
        ItemDescription: "Lacteol Fort Sachets",
        UOM: "box(es)",
        ItemCategory: "Lyophilized Killed Microbial Bodies Oral Solid 6Sachets",
        MedicationsStock: 7,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED115010044",
        ItemDescription: "Procoralan 5mg 7 tab",
        UOM: "STRIP 7TAB",
        ItemCategory: "Ivabradine Oral Solid 5mg",
        MedicationsStock: 40,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED115010052",
        ItemDescription: "Plavix 75mg 14 Tab",
        UOM: "STRIP 14TAB",
        ItemCategory: "Clopidogrel Oral Solid 75mg",
        MedicationsStock: 3,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED115010056",
        ItemDescription: "Pravotin 100mg 30 Eff Sachet",
        UOM: "BOX 30 Sachet",
        ItemCategory: "Lactoferrin Oral Solid 100mg",
        MedicationsStock: 8.33333,
      },
      {
        OrgCode: 79,
        ItemNumber: "MED115010062",
        ItemDescription: "Entresto 50mg (24/26mg) 14 Tab",
        UOM: "STRIP 14TAB",
        ItemCategory: "Sacubitril and Valsartan Oral Solid 50mg",
        MedicationsStock: 18,
      },
    ];
    res.render("Store/perpatient", { array: array });
  })
);

// INPATIENT OVERVIEW
router.get(
  "/inpatient3",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
    const num = await Inpatientschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const results = await Inpatientschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Inpatient/inpatient3", {
        inpatientarray: results,
        moment: moment,
        page,
        limit,
        skip,
        firstname,
        lastname,
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
    const results = await Inpatientschema.find({
      ptfloor: "ICU",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    const num = await Inpatientschema.find({
      ptfloor: "ICU",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    if (results) {
      res.render("Inpatient/icu", {
        inpatientarray: results,
        moment: moment,
        floor: "ICU",
        firstname,
        lastname,
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;

    const results = await Inpatientschema.find({
      ptfloor: "ICC",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    const num = await Inpatientschema.find({
      ptfloor: "ICC",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();

    if (results) {
      res.render("Inpatient/icc", {
        inpatientarray: results,
        moment: moment,
        floor: "ICC",
        firstname,
        lastname,
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;

    const results = await Inpatientschema.find({
      ptfloor: "3rd O",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    const num = await Inpatientschema.find({
      ptfloor: "3rd O",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    if (results) {
      res.render("Inpatient/3rdo", {
        inpatientarray: results,
        moment: moment,
        floor: "3rd O",
        firstname,
        lastname,
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;

    const results = await Inpatientschema.find({
      ptfloor: "3rd N",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    const num = await Inpatientschema.find({
      ptfloor: "3rd N",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    if (results) {
      res.render("Inpatient/3rdn", {
        inpatientarray: results,
        moment: moment,
        floor: "3rd N",
        firstname,
        lastname,
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;

    const results = await Inpatientschema.find({
      ptfloor: "4th",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    const num = await Inpatientschema.find({
      ptfloor: "4th",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    if (results) {
      res.render("Inpatient/4th", {
        inpatientarray: results,
        moment: moment,
        floor: "4th",
        firstname,
        lastname,
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;

    const results = await Inpatientschema.find({
      ptfloor: "5th",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    const num = await Inpatientschema.find({
      ptfloor: "5th",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    if (results) {
      res.render("Inpatient/5th", {
        inpatientarray: results,
        moment: moment,
        floor: "5th",
        firstname,
        lastname,
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;

    const results = await Inpatientschema.find({
      ptfloor: "BMT",
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    const num = await Inpatientschema.find({
      ptfloor: "BMT",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    if (results) {
      res.render("Inpatient/bmt", {
        inpatientarray: results,
        moment: moment,
        floor: "BMT",
        firstname,
        lastname,
        num,
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
      xlsx.writeFile(workbook, "C:\\PharmacyConnect\\Inpatient.xlsx");
      res.redirect("/inpatient3");
      res.send(new ApiError(201, "success", response));
    } else {
      res.send(new ApiError(404, "No Data Avaliable"));
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
      xlsx.writeFile(workbook, "C:\\PharmacyConnect\\Outpatient.xlsx");
      res.redirect("/outpatient3");
    } else {
      res.send(new ApiError(404, "No Data Avaliable"));
    }
  })
);

// OUPATIENT OVERVIEW
router.get(
  "/outpatient3",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const { firstname } = user;
    const { lastname } = user;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
    const num = await Outpatient.find({
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;

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
    const num = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Inpatientschema.find({
      oraliv: "IV",
      requestype: "ExtraDose",
      prepcomment: "",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const results = await Inpatientschema.find({
      oraliv: "IV",
      requestype: "ExtraDose",
      prepcomment: "",
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
        dispense,
      });
    }
  })
);

//IVPREP INPATIENT BMT
router.get(
  "/bmtview",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Inpatientschema.find({
      oraliv: "IV",
      requestype: "BMT",
      prepcomment: "",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const results = await Inpatientschema.find({
      oraliv: "IV",
      ptfloor: "BMT",
      prepcomment: "",
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
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
        moment: moment,
        outpatient,
        dispense,
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Outpatient.find({
      oraliv: "IV",
      requestype: "ExtraDose",
      prepcomment: "",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
    const results = await Outpatient.find({
      oraliv: "IV",
      requestype: "ExtraDose",
      prepcomment: "",
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

//IVPREP INPATIENT DONE VIEW
router.get(
  "/doneviewout",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Outpatient.find({
      oraliv: "IV",
      prepcomment: "DONE",
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 6;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
    const results = await Labschema.find({
      labcomment: { $not: { $regex: "RECEIVED" } },
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    const num = await Labschema.find({
      labcomment: { $not: { $regex: "RECEIVED" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 7;
    const skip = (page - 1) * limit;
    const num = await Labschema.find({
      labcomment: "RECEIVED",
    }).countDocuments();
    const results = await Labschema.find({ labcomment: "RECEIVED" })
      .skip(skip)
      .limit(limit);
    if (results) {
      res.render("Lab/labreceivedview.ejs", {
        labarray: results,
        moment: moment,
        num,
        page,
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
      xlsx.writeFile(workbook, "C:\\PharmacyConnect\\Lab.xlsx");
      res.redirect("/lab");
    } else {
      res.send(new ApiError(404, "No Data Avaliable"));
    }
  })
);

// DISPENSE OVERVIEW
router.get(
  "/dispense3",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Dispenseschema.find({
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
        num,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
    const outpatient = await Outpatient.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    });

    const num = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: { $not: { $regex: "DONE" } },
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();
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
        outpatient,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Inpatientschema.find({
      oraliv: "Oral",
      requestype: "ExtraDose",
      prepcomment: { $not: { $regex: "DONE" } },
    }).countDocuments();
    const results = await Inpatientschema.find({
      oraliv: "Oral",
      requestype: "ExtraDose",
      prepcomment: { $not: { $regex: "DONE" } },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Dispense/edindispense", {
        dispensearray: results,
        outpatient,
        inarray,
        num,
        moment: moment,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 9;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Inpatientschema.find({
      oraliv: "Oral",
      requestype: "DisCharge Medication",
      prepcomment: { $not: { $regex: "DONE" } },
    }).countDocuments();
    const results = await Inpatientschema.find({
      oraliv: "Oral",
      requestype: "DisCharge Medication",
      prepcomment: { $not: { $regex: "DONE" } },
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Dispense/dischargeindispense", {
        dispensearray: results,
        inarray,
        outpatient,
        moment: moment,
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
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 8;
    const skip = (page - 1) * limit;
    const date = moment().format("YYYY-MM-DD");
    const startDate = `${date}T00:00:00.000+00:00`;
    const endDate = `${date}T23:59:59.000+00:00`;
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
    const num = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: "DONE",
    }).countDocuments();
    const results = await Inpatientschema.find({
      oraliv: "Oral",
      prepcomment: "DONE",
    })
      .skip(skip)
      .limit(limit);

    if (results) {
      res.render("Dispense/doneviewindispense", {
        dispensearray: results,
        moment: moment,
        num,
        outpatient,
        inarray,
      });
    }
  })
);

// DISPENSE OUTPATIENT
router.get("/dispout", checkIfUser, requireAuth, (req, res) => {
  Outpatient.find({ oraliv: "Oral" }).then((result) => {
    res.render("Dispense/dispense3out", {
      dispensearray: result,
      moment: moment,
    });
  });
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
      xlsx.writeFile(workbook, "C:\\PharmacyConnect\\Dispense.xlsx");
      res.redirect("/dispense3");
    } else {
      res.send(new ApiError(404, "No Data Avaliable"));
    }
  })
);

// ---------------------------------
//POST REQUEST
// ----------------------------------

// Register USER
router.post(
  "/adduser",
  [
    check("email", "Please provide a valid email").isEmail(),
    check(
      "password",
      "Password must be at least 8 characters with 1 upper case letter and 1 number"
    ).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
  ],
  asyncHandler(async (req, res) => {
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

    if (password !== confirmPassword) {
      return res.json({ passwordnotmatch: "Password Not Match" });
    }

    const newUser = await User.create(req.body);
    const token = jwt.sign({ id: newUser._id }, process.env.JWTSECRET_KEY);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
    res.status(201).json({ user: newUser });
  })
);

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

// CHANGE IMAGE POST REQUEST
router.post(
  "/updateavatar",
  uploadSingleImage("updateprofile"),
  profileimage,
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const results = await User.updateOne(
      { _id: decoded.id },
      { profileimage: req.body.updateprofile }
    );
    if (results) {
      res.redirect("/interface");
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

// CHOOSE IMAGE POST REQUEST
router.post(
  "/avatarselection",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    req.body.inputprofile = "/img/Avatar/Untitled-1-01.png";
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
    req.body.inputprofile = "/img/Avatar/Untitled-1-02.png";
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
    req.body.inputprofile = "/img/Avatar/Untitled-1-03.png";
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
    req.body.inputprofile = "/img/Avatar/Untitled-1-04.png";
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
    req.body.inputprofile = "/img/Avatar/Untitled-1-06.png";
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
    req.body.inputprofile = "/img/Avatar/Untitled-1-07.png";
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
    req.body.inputprofile = "/img/Avatar/Untitled-1-08.png";
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
    req.body.inputprofile = "/img/Avatar/Untitled-1-09.png";
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
  "/avatarselection09",
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
  "/avatarselection10",
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
  "/avatarselection11",
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
  "/avatarselection12",
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
  "/avatarselection13",
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
  "/avatarselection14",
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
  "/avatarselection15",
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
  "/avatarselection16",
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
  "/avatarselection17",
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
  "/avatarselection18",
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
  "/avatarselection19",
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
  "/avatarselection20",
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
  "/avatarselection21",
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
  "/avatarselection22",
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
  "/avatarselection23",
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
      mrn: searchText,
      createdAt: { $gte: startDate, $lte: endDate },
    });
    res.render("Inpatient/inpatientsearch", { array: result, moment: moment });
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
    const startDate = sdate + "T00:00:00.000+00:00";
    const endDate = edate + "T23:59:59.000+00:00";
    const results = await Inpatientschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });
    console.log(results);

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

// INPATIENT/PREP POST SEARCH
router.post("/inpatientprepsearch", checkIfUser, requireAuth, (req, res) => {
  const searchText = req.body.searchText.trim();
  Inpatientschema.find({ mrn: searchText })
    .then((result) => {
      res.render("IvPrep/ivprepinsearch", { array: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

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
    const startDate = sdate + "T00:00:00.000+00:00";
    const endDate = edate + "T23:59:59.000+00:00";
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
router.post("/outpatientsearch", checkIfUser, requireAuth, (req, res) => {
  const searchText = req.body.searchText.trim();
  Outpatient.find({ mrn: searchText })
    .then((result) => {
      res.render("Outpatient/outpatientsearch", {
        array: result,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// OUTPATIENT/PREP POST SEARCH
router.post("/outpatientprepsearch", checkIfUser, requireAuth, (req, res) => {
  const searchText = req.body.searchText.trim();
  Outpatient.find({ mrn: searchText })
    .then((result) => {
      res.render("IvPrep/ivprepoutsearch", { array: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

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
    const startDate = date + "T00:00:00.000+00:00";
    const endDate = date + "T23:59:59.000+00:00";
    const result = await Dispenseschema.find({
      mrn: searchText,
      createdAt: { $gte: startDate, $lte: endDate },
    });

    res.render("Dispense/dispensesearch", { array: result, moment: moment });
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
    const startDate = sdate + "T00:00:00.000+00:00";
    const endDate = edate + "T23:59:59.000+00:00";
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

// LAB SEARCH DATE
router.post(
  "/findDatelab",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 6;
    const skip = (page - 1) * limit;
    const sdate = req.body.sDate;
    const edate = req.body.eDate;
    const startDate = sdate + "T00:00:00.000+00:00";
    const endDate = edate + "T23:59:59.000+00:00";
    const results = await Labschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .skip(skip)
      .limit(limit);
    const num = await Labschema.find({
      createdAt: { $gte: startDate, $lte: endDate },
    }).countDocuments();

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
        num,
      });
    }
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
  "/addmedication",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await Medication.create(req.body);
    if (results) {
      res.redirect("/dic");
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

    const dic = await User.findOneAndUpdate(
      { role: "DIC" },
      {
        $push: {
          dicreceiver: {
            question: req.body.question,
            answer: req.body.answer,
            detector: req.body.detector,
            sendername: req.body.sendername,
            senderimage: req.body.senderimage,
            createdAt: moment(Date.now()),
          },
        },
      }
    );

    console.log(dic);

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

    console.log(results);
    if (results) {
      res.json({ done: dic });
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
    const receiver = await User.findById({ _id: decoded.id });
    const searchdate = receiver.dicreceiver.filter((item) => {
      const createdAt = moment(item.createdAt);
      return createdAt.isBetween(startDate, endDate);
    });
    const array = [];
    array.push(searchdate);
    console.log(array);
    if (searchdate === undefined) {
      await User.findOneAndUpdate({ role: "DIC" }, { $set: { dicsearch: [] } });
    }

    if (searchdate) {
      await User.findOneAndUpdate(
        { role: "DIC" },
        { $set: { dicsearch: searchdate } }
      );
    }
    // const search = await User.findOneAndUpdate({role : "DIC"},   { $set : {dicsearch : searchdate }})

    res.redirect("/dic");
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
    arr.forEach( async (item) => {
       await User.findOneAndUpdate({code: item}, { examchoose: req.body })
    });

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

// ---------------------------------
//DELETE REQUEST
// ----------------------------------

//INPATIENT DELETE PATIENT
router.delete("/delete/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/inpatient3");
    })
    .catch((err) => {
      console.log(err);
    });
});

//ICU DELETE PATIENT
router.delete("/deleteicu/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/icu");
    })
    .catch((err) => {
      console.log(err);
    });
});

//ICC DELETE PATIENT
router.delete("/deleteicc/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/icc");
    })
    .catch((err) => {
      console.log(err);
    });
});

//6TH DELETE PATIENT
router.delete("/delete6th/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/6th");
    })
    .catch((err) => {
      console.log(err);
    });
});

//5TH DELETE PATIENT
router.delete("/delete5th/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/5th");
    })
    .catch((err) => {
      console.log(err);
    });
});

//4TH DELETE PATIENT
router.delete("/delete4th/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/4th");
    })
    .catch((err) => {
      console.log(err);
    });
});

//3RDO DELETE PATIENT
router.delete("/delete3rdo/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/3rdo");
    })
    .catch((err) => {
      console.log(err);
    });
});

//3RDN DELETE PATIENT
router.delete("/delete3rdn/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/3rdn");
    })
    .catch((err) => {
      console.log(err);
    });
});

//OUTPATIENT DELETE PATIENT
router.delete("/deleteout/:id", checkIfUser, requireAuth, (req, res) => {
  Outpatient.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/outpatient3");
    })
    .catch((err) => {
      console.log(err);
    });
});

//DISPENSE DELETE PATIENT
router.delete("/deletedis/:id", checkIfUser, requireAuth, (req, res) => {
  Dispenseschema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/dispense3");
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
      res.redirect("/todolist");
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
      res.redirect("/watch");
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
      res.redirect("/receiver");
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
      res.redirect("/dicsender");
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
      res.redirect("/admin");
    }
  })
);

// ---------------------------------
//PUT REQUEST
// ----------------------------------

// IVPREP INPATIENT / DONE
router.put(
  "/done/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/prepin");
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// IVPREP INPATIENT EXTRADOSE / DONE
router.put("/doneed/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Inpatientschema.find({
        oraliv: "IV",
        requestype: "ExtraDose",
        prepcomment: "",
      }).then((result) => {
        res.render("IvPrep/ivprepinextradose", {
          inarray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// IVPREP INPATIENT / EDIT
router.put(
  "/inedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/prepin");
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// IVPREP INPATIENT EXTRADOSE / EDIT
router.put("/inedited/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Inpatientschema.find({
        oraliv: "IV",
        requestype: "ExtraDose",
        prepcomment: "",
      }).then((result) => {
        res.render("IvPrep/ivprepinextradose", {
          inarray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// IVPREP INPATIENT DONE VIEW / EDIT
router.put(
  "/ineditdoneview/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/doneview");
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
    const results = await Outpatient.findByIdAndUpdate(req.params.id, req.body);
    if (results) {
      res.redirect("/prepout");
    }
  })
);

// IVPREP OUTPATIENT / EDIT
router.put(
  "/outedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await Outpatient.findByIdAndUpdate(req.params.id, req.body);
    if (results) {
      res.redirect("/prepout");
    }
  })
);

// IVPREP DISPENSE / EDIT
router.put(
  "/editdisp/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Dispenseschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/prepdis");
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
    await Dispenseschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/prepdis");
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
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect("/dispin");
    }
  })
);

// DISPENSE INPATIENT EXTRADOSE / EDIT
router.put("/dispinedited/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Inpatientschema.find({
        oraliv: "Oral",
        requestype: "ExtraDose",
        prepcomment: "",
      }).then((result) => {
        res.render("Dispense/edindispense", {
          dispensearray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// DISPENSE INPATIENT DISCHARGE / EDIT
router.put("/dispineditdischarge/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Inpatientschema.find({
        oraliv: "Oral",
        requestype: "DisCharge Medication",
        prepcomment: "",
      }).then((result) => {
        res.render("Dispense/dischargeindispense", {
          dispensearray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Dispense OUTPATIENT / EDIT
router.put("/dispoutedit/:id", checkIfUser, requireAuth, (req, res) => {
  Outpatient.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Outpatient.find({ oraliv: "Oral" }).then((result) => {
        res.render("Dispense/dispense3out", {
          dispensearray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// DISPENSE INPATIENT / DONE
router.put(
  "/donedisin/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect("/dispin");
    }
  })
);

// DISPENSE INPATIENT EXTRADOSE / DONE
router.put("/donedisined/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Inpatientschema.find({
        oraliv: "Oral",
        requestype: "ExtraDose",
        prepcomment: "",
      }).then((result) => {
        res.render("Dispense/edindispense", {
          dispensearray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// DISPENSE INPATIENT DISCHARGE / DONE
router.put("/donedisindischarge/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Inpatientschema.find({
        oraliv: "Oral",
        requestype: "DisCharge Medication",
        prepcomment: "",
      }).then((result) => {
        res.render("Dispense/dischargeindispense", {
          dispensearray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// DISPENSE OUTPATIENT / DONE
router.put("/donedisout/:id", checkIfUser, requireAuth, (req, res) => {
  Outpatient.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Outpatient.find({ oraliv: "Oral" }).then((result) => {
        res.render("Dispense/dispense3out", {
          dispensearray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// LAB INPATIENT / DONE
router.put(
  "/donelab/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Labschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/Lab");
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// LAB INPATIENT / DONE
router.put(
  "/labedit/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Labschema.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/lab");
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
    console.log(req.file);
    const results = await Inpatientschema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (results) {
      res.redirect("/inpatient3");
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
      res.redirect("/ICU");
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
      res.redirect("/ICC");
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
      res.redirect("/BMT");
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
      res.redirect("/5th");
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
      res.redirect("/4th");
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
      res.redirect("/3rdO");
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
      res.redirect("/3rdN");
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
      res.redirect("/outpatient3");
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
    console.log(results);
    if (results) {
      res.redirect("/todolist");
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
      res.redirect("/watch");
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
      res.redirect("/receiver");
    }
  })
);

//UPDATE MEDICATION
router.put(
  "/updatemedication",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    if (req.body.select === "generic") {
      const results = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { generic: req.body.input }
      );
      if (results) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "mechanism") {
      const results2 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { mechanism: req.body.input }
      );
      if (results2) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "dosageform") {
      const results3 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { dosageform: req.body.input }
      );
      if (results3) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "dose") {
      const results4 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { dose: req.body.input }
      );
      if (results4) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "adminstration") {
      const results4 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { adminstration: req.body.input }
      );
      if (results4) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "ptinformation") {
      const results4 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { ptinformation: req.body.input }
      );
      if (results4) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "sideeffect") {
      const results4 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { sideeffect: req.body.input }
      );
      if (results4) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "monitor") {
      const results4 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { monitor: req.body.input }
      );
      if (results4) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "interaction") {
      const results4 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { interaction: req.body.input }
      );
      if (results4) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "specialprecaution") {
      const results4 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { specialprecaution: req.body.input }
      );
      if (results4) {
        res.redirect("/dic");
      }
    }

    if (req.body.select === "miscellaneous") {
      const results4 = await Medication.findOneAndUpdate(
        { trade: req.body.trade },
        { miscellaneous: req.body.input }
      );
      if (results4) {
        res.redirect("/dic");
      }
    }
  })
);

// DIC RECIEVER ANSWER
router.put(
  "/dicanswer/:id",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const results = await User.updateOne(
      { "dicreceiver._id": req.params.id },
      {
        $set: {
          "dicreceiver.$.answer": req.body.answer,
        },
      }
    );

    const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    const selectedObject = user.dicreceiver.find((item) => {
      return item._id == req.params.id;
    });
    const selectdetector = selectedObject.detector;
    const detector = await User.updateOne(
      { "dicsender.detector": selectdetector },
      {
        $set: {
          "dicsender.$.answer": req.body.answer,
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
      res.redirect("/admin");
    }
  })
);

// EXAM ANSWER
router.put(
  "/answer",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
  const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
  const user = await User.findOne({ _id: decoded.id });
  const selectedObject = user.examchoose;
  const examname = selectedObject.examname
  console.log(examname);
  const search = req.body.answerassy1
  const search2 = req.body.answerassy2
  const search3 = req.body.answerassy3
  const search4 = req.body.answerassy4
  const search5 = req.body.answerassy5
  const search6 = req.body.answerassy6
  const search7 = req.body.answerassy7
  const search8 = req.body.answerassy8
  const search9 = req.body.answerassy9
  const search10 = req.body.answerassy10
  const resultassy1 = search.includes(selectedObject.key1forquestion1) && search.includes(selectedObject.key2forquestion1) && search.includes(selectedObject.key3forquestion1) && search.includes(selectedObject.key4forquestion1)
  const resultassy2 = search2.includes(selectedObject.key1forquestion2) && search2.includes(selectedObject.key2forquestion2) && search2.includes(selectedObject.key3forquestion2) && search2.includes(selectedObject.key4forquestion2)
  const resultassy3 = search3.includes(selectedObject.key1forquestion3) && search3.includes(selectedObject.key2forquestion3) && search3.includes(selectedObject.key3forquestion3) && search3.includes(selectedObject.key4forquestion3)
  const resultassy4 = search4.includes(selectedObject.key1forquestion4) && search4.includes(selectedObject.key2forquestion4) && search4.includes(selectedObject.key3forquestion4) && search4.includes(selectedObject.key4forquestion4)
  const resultassy5 = search5.includes(selectedObject.key1forquestion5) && search5.includes(selectedObject.key2forquestion5) && search5.includes(selectedObject.key3forquestion5) && search5.includes(selectedObject.key4forquestion5)
  const resultassy6 = search6.includes(selectedObject.key1forquestion6) && search6.includes(selectedObject.key2forquestion6) && search6.includes(selectedObject.key3forquestion6) && search6.includes(selectedObject.key4forquestion6)
  const resultassy7 = search7.includes(selectedObject.key1forquestion7) && search7.includes(selectedObject.key2forquestion7) && search7.includes(selectedObject.key3forquestion7) && search7.includes(selectedObject.key4forquestion7)
  const resultassy8 = search8.includes(selectedObject.key1forquestion8) && search8.includes(selectedObject.key2forquestion8) && search8.includes(selectedObject.key3forquestion8) && search8.includes(selectedObject.key4forquestion8)
  const resultassy9 = search9.includes(selectedObject.key1forquestion9) && search9.includes(selectedObject.key2forquestion9) && search9.includes(selectedObject.key3forquestion9) && search9.includes(selectedObject.key4forquestion9)
  const resultassy10 = search10.includes(selectedObject.key1forquestion10) && search10.includes(selectedObject.key2forquestion10) && search10.includes(selectedObject.key3forquestion10) && search10.includes(selectedObject.key4forquestion10)
  req.body.resultassy1 = resultassy1
  req.body.resultassy2 = resultassy2
  req.body.resultassy3 = resultassy3
  req.body.resultassy4 = resultassy4
  req.body.resultassy5 = resultassy5
  req.body.resultassy6 = resultassy6
  req.body.resultassy7 = resultassy7
  req.body.resultassy8 = resultassy8
  req.body.resultassy9 = resultassy9
  req.body.resultassy10 = resultassy10
  const newObject = Object.assign(selectedObject, req.body)
  await User.findByIdAndUpdate( decoded.id , { $set: {examchoose : newObject }} );

function answ1() {
     if (req.body.answerc1 === selectedObject.correctanswerquestion1 && req.body.answerc1 !== undefined) {
      return (1)
     }  
     if (req.body.answerc1 !== selectedObject.correctanswerquestion1) {
      return (0)
     }
     if (req.body.answerc1 === undefined) {
      return (0)
     }
}

function answ2() {
     if (req.body.answerc2 === selectedObject.correctanswerquestion2 && req.body.answerc2 !== undefined) {
      return (1)
     } 
     if (req.body.answerc2 !== selectedObject.correctanswerquestion2) {
      return (0)
     }
     if (req.body.answerc2 === undefined) {
      return (0)
     }
}

function answ3() {
  if (req.body.answerc3 === selectedObject.correctanswerquestion3 && req.body.answerc3 !== undefined) {
    return (1)
   } 
   if (req.body.answerc3 !== selectedObject.correctanswerquestion3) {
    return (0)
   }
   if (req.body.answerc3 === undefined) {
    return (0)
   }
  
}

function answ4() {
  if (req.body.answerc4 === selectedObject.correctanswerquestion4 && req.body.answerc4 !== undefined ) {
    return (1)
   } 
   if (req.body.answerc4 !== selectedObject.correctanswerquestion4) {
    return (0)
   }
   if (req.body.answerc4 === undefined) {
    return (0)
   } 
}

function answ5() {
  if (req.body.answerc5 === selectedObject.correctanswerquestion5 && req.body.answerc5 !== undefined ) {
    return (1)
   } 
   if (req.body.answerc5 !== selectedObject.correctanswerquestion5) {
    return (0)
   }
   if (req.body.answerc5 === undefined) {
    return (0)
   }
}

function answ6() {
  if (req.body.answerc6 === selectedObject.correctanswerquestion6 && req.body.answerc6 !== undefined) {
    return (1)
   } 
   if (req.body.answerc6 !== selectedObject.correctanswerquestion6) {
    return (0)
   }
   if (req.body.answerc6 === undefined) {
    return (0)
   }
}

function answ7() {
  if (req.body.answerc7 === selectedObject.correctanswerquestion7 && req.body.answerc7 !== undefined ) {
    return (1)
   } 
   if (req.body.answerc7 !== selectedObject.correctanswerquestion7) {
    return (0)
   }
   if (req.body.answerc7 === undefined) {
    return (0)
   }
}

function answ8() {
  if (req.body.answerc8 === selectedObject.correctanswerquestion8 && req.body.answerc8 !== undefined ) {
    return (1)
   } 
   if (req.body.answerc8 !== selectedObject.correctanswerquestion8) {
    return (0)
   }
   if (req.body.answerc8 === undefined) {
    return (0)
   }
  }

function answ9() {
  if (req.body.answerc9 === selectedObject.correctanswerquestion9 && req.body.answerc9 !== undefined) {
    return (1)
   } 
   if (req.body.answerc9 !== selectedObject.correctanswerquestion9) {
    return (0)
   }
   if (req.body.answerc9 === undefined) {
    return (0)
   }
}

function answ10() {
  if (req.body.answerc10 === selectedObject.correctanswerquestion10 && req.body.answerc10 !== undefined ) {
    return (1)
   } 
   if (req.body.answerc10 !== selectedObject.correctanswerquestion10) {
    return (0)
   }
   if (req.body.answerc10 === undefined) {
    return (0)
   }
}

function answ11() {
     if (resultassy1 === true) {
      return (1)
     } 
     if (resultassy1 === false) {
      return (0)
     }
}

function answ12() {
  if (resultassy2 === true) {
    return (1)
   } 
   if (resultassy2 === false) {
    return (0)
   } 
}

function answ13() {
  if (resultassy3 === true) {
    return (1)
   } 
   if (resultassy3 === false) {
    return (0)
   } 
}

function answ14() {
  if (resultassy4 === true) {
    return (1)
   } 
   if (resultassy4 === false) {
    return (0)
   }  
}

function answ15() {
  if (resultassy5 === true) {
    return (1)
   } 
   if (resultassy5 === false) {
    return (0)
   } 
}

function answ16() {
  if (resultassy6 === true) {
    return (1)
   } 
   if (resultassy6 === false) {
    return (0)
   }  
}

function answ17() {
  if (resultassy7 === true) {
    return (1)
   } 
   if (resultassy7 === false) {
    return (0)
   } 
}

function answ18() {
  if (resultassy8 === true) {
    return (1)
   } 
   if (resultassy8 === false) {
    return (0)
   } 
}

function answ19() {
  if (resultassy9 === true) {
    return (1)
   } 
   if (resultassy9 === false) {
    return (0)
   } 
}

function answ20() {
  if (resultassy10 === true) {
    return (1)
   } 
   if (resultassy10 === false) {
    return (0)
   } 
}
  


  const score = answ1() + answ2() + answ3() + answ4() + answ5() + answ6() + answ7() + answ8() + answ9() + answ10() + answ11() + answ12()+ answ13()+ answ14()+ answ15()+ answ16()+ answ17()+ answ18()+ answ19()+ answ20() 
console.log(score);
  

const group = { firstname : user.firstname, lastname : user.lastname, score : score, code : user.code,  examname : selectedObject.examname, createdAt : Date(now), questionnumber : selectedObject.questionnumber }
  const results = 
  await User.updateOne( {role : "Admin"}, 
  { $push: {results : group}})

    res.redirect("/exam");
  })
);

module.exports = router;
