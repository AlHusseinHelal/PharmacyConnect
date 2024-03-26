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
//MULTER
const multer = require("multer");
//MULTER UPLOAD
const upload = multer({ storage: multer.diskStorage({}) });
//Cloudinary
const cloudinary = require("cloudinary").v2;
//SCHEMA
const Inpatientschema = require("../models/inpatientSchema");
const User = require("../models/newRegSchema");
const Outpatient = require("../models/outpatientSchema");
const Dispenseschema = require("../models/dispenseSchema");
const Newpatient = require("../models/newPatientSchema");
const Labschema = require("../models/labSchema");
//MIDDLEWARE
const { requireAuth } = require("../middleware/middleware");
const { checkIfUser } = require("../middleware/middleware");
const { validatorMiddleware } = require("../middleware/middleware");
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

router.use(express.static("public"));
//dotenv
require("dotenv").config();
//SEND EMAIL
const sendEmail = require(`../utils/sendEmail`);
//ERROR HANDILING
const ApiError = require("../utils/apierror");

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
router.get("/STRUCTURE", checkIfUser, requireAuth, (req, res) => {
  res.render("STRUCTURE.ejs");
});

//WORKFLOW
router.get("/WorkFlow", checkIfUser, requireAuth, (req, res) => {
  res.render("WorkFlow.ejs");
});

//PHARMACY DEPARTMENT
router.get("/index2", checkIfUser, requireAuth, (req, res) => {
  res.render("index2");
});

//PERPATIENT STORE
router.get("/perpatient", checkIfUser, requireAuth, (req, res) => {
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
});

// INPATIENT
router.get("/inpatient", checkIfUser, requireAuth, (req, res) => {
  res.render("Inpatient/inpatient");
});

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
    const firstname = user.firstname;
    const lastname = user.lastname;
    const results = await Inpatientschema.find().skip(skip).limit(limit);
    res.render("Inpatient/inpatient3", {
      inpatientarray: results,
      moment: moment,
      page,
      limit,
      skip,
      firstname,
      lastname,
    });
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
    const firstname = user.firstname;
    const lastname = user.lastname;
    const results = await Inpatientschema.find({ ptfloor: "ICU" }).skip(skip).limit(limit)
    if (results) {
      res.render("Inpatient/icu", {
        inpatientarray: results,
        moment: moment,
        floor: "ICU", firstname, lastname,
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
    await Inpatientschema.find({ ptfloor: "ICC" })
      .then((results) => {
        res.render("Inpatient/icc", {
          inpatientarray: results,
          moment: moment,
          floor: "ICC",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// INPATIENT 3rdO
router.get(
  "/3rdO",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Inpatientschema.find({ ptfloor: "3rd O" })
      .then((results) => {
        res.render("Inpatient/3rdo", {
          inpatientarray: results,
          moment: moment,
          floor: "3rd O",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// INPATIENT 3rdN
router.get(
  "/3rdN",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Inpatientschema.find({ ptfloor: "3rd N" })
      .then((results) => {
        res.render("Inpatient/3rdn", {
          inpatientarray: results,
          moment: moment,
          floor: "3rd N",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// INPATIENT 4th
router.get(
  "/4th",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Inpatientschema.find({ ptfloor: "4th" })
      .then((results) => {
        res.render("Inpatient/4th", {
          inpatientarray: results,
          moment: moment,
          floor: "4th",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// INPATIENT 5th
router.get(
  "/5th",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Inpatientschema.find({ ptfloor: "5th" })
      .then((results) => {
        res.render("Inpatient/5th", {
          inpatientarray: results,
          moment: moment,
          floor: "5th",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// INPATIENT BMT
router.get(
  "/BMT",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    await Inpatientschema.find({ ptfloor: "BMT" })
      .then((results) => {
        res.render("Inpatient/bmt", {
          inpatientarray: results,
          moment: moment,
          floor: "BMT",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

// OUTPATIENT
router.get("/outpatient", checkIfUser, requireAuth, (req, res) => {
  res.render("Outpatient/outpatient");
});

// OUPATIENT OVERVIEW
router.get("/outpatient3", checkIfUser, requireAuth, (req, res) => {
  Outpatient.find()
    .then((result) => {
      res.render("Outpatient/outpatient3", {
        outpatientarray: result,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//IVPREP
router.get("/ivprep", checkIfUser, requireAuth, (req, res) => {
  res.render("IvPrep/ivprep");
});

//IVPREP INPATIENT
router.get(
  "/prepin",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const outpatient = await Outpatient.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
    });
    const dispense = await Dispenseschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
    });
    const results = await Inpatientschema.find({
      oraliv: "IV",
      prepcomment: { $not: { $regex: "DONE" } },
    });
    if (results) {
      res.render("IvPrep/ivprepin", {
        inarray: results,
        moment: moment,
        outpatient,
        dispense,
      });
    }
  })
);

//IVPREP INPATIENT EXTRADOSE
router.get("/ed", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const results = await Inpatientschema.find({
    oraliv: "IV",
    requestype: "ExtraDose",
    prepcomment: "",
  })
  if (results) {
    res.render("IvPrep/ivprepinextradose", {
      inarray: results,
      moment: moment,
    });  
  }
}) );

//IVPREP INPATIENT BMT
router.get("/bmtview", checkIfUser, requireAuth, asyncHandler( async (req, res) => {
  const results = await Inpatientschema.find({
    oraliv: "IV",
    ptfloor: "BMT",
    prepcomment: "",
  })
  if (results) {
    res.render("IvPrep/ivprepinbmt", {
      inarray: results,
      moment: moment,
    });  
  }
}) );

//IVPREP INPATIENT DONE VIEW
router.get("/doneview", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.find({
    oraliv: "IV",
    prepcomment: "DONE",
  })
    .then((result) => {
      res.render("IvPrep/ivprepindoneview", {
        inarray: result,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//IVPREP OUTPATIENT
router.get(
  "/prepout",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const dispense = await Dispenseschema.find({ oraliv: "IV" });
    const inarray = await Inpatientschema.find({ oraliv: "IV" });
    const results = await Outpatient.find({ oraliv: "IV" });
    if (results) {
      res.render("IvPrep/ivprepout", {
        outarray: results,
        moment: moment,
        inarray,
        dispense,
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
    const inarray = await Inpatientschema.find({ oraliv: "IV" });
    const outpatient = await Outpatient.find({ oraliv: "IV" });
    const results = await Dispenseschema.find({ oraliv: "IV" });
    if (results) {
      res.render("IvPrep/ivprepdis", {
        outarray: results,
        moment: moment,
        inarray,
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
    await Labschema.find({ labcomment: { $not: { $regex: "RECEIVED" } } })
      .then((results) => {
        res.render("Lab/lab.ejs", {
          labarray: results,
          moment: moment,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

//PHARMACY LAB RECEIVED VIEW
router.get("/labreceivedview", checkIfUser, requireAuth, (req, res) => {
  Labschema.find({ labcomment: "RECEIVED" })
    .then((result) => {
      res.render("Lab/labreceivedview.ejs", {
        labarray: result,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// DISPENSE
router.get("/dispense", checkIfUser, requireAuth, (req, res) => {
  res.render("Dispense/dispense");
});

// DISPENSE OVERVIEW
router.get(
  "/dispense3",
  checkIfUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const outpatient = await Outpatient.find();
    const inpatient = Dispenseschema.find().then((result) => {
      res.render("Dispense/dispense3", {
        dispensearray: result,
        moment: moment,
      });
    });
  })
);

// DISPENSE INPATIENT
router.get("/dispin", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.find({ oraliv: "Oral", prepcomment: "" }).then((result) => {
    res.render("Dispense/dispense3in", {
      dispensearray: result,
      moment: moment,
    });
  });
});

//DISPENSE INPATIENT EXTRADOSE
router.get("/edindispense", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.find({
    oraliv: "Oral",
    requestype: "ExtraDose",
    prepcomment: "",
  })
    .then((result) => {
      res.render("Dispense/edindispense", {
        dispensearray: result,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//DISPENSE INPATIENT DISCHARGE
router.get("/dischargeindispense", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.find({
    oraliv: "Oral",
    requestype: "DisCharge Medication",
    prepcomment: "",
  })
    .then((result) => {
      res.render("Dispense/dischargeindispense", {
        dispensearray: result,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//DISPENSE INPATIENT DONE VIEW
router.get("/doneviewindispense", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.find({
    oraliv: "Oral",
    prepcomment: {
      $in: [
        /^a/,
        /^b/,
        /^c/,
        /^d/,
        /^e/,
        /^f/,
        /^g/,
        /^h/,
        /^i/,
        /^j/,
        /^k/,
        /^l/,
        /^m/,
        /^n/,
        /^o/,
        /^p/,
        /^q/,
        /^r/,
        /^s/,
        /^t/,
        /^u/,
        /^v/,
        /^w/,
        /^x/,
        /^y/,
        /^z/,
        /^0/,
        /^1/,
        /^2/,
        /^3/,
        /^4/,
        /^5/,
        /^6/,
        /^7/,
        /^8/,
        /^9/,
        /^A/,
        /^B/,
        /^C/,
        /^D/,
        /^E/,
        /^F/,
        /^G/,
        /^H/,
        /^I/,
        /^J/,
        /^K/,
        /^L/,
        /^M/,
        /^N/,
        /^O/,
        /^P/,
        /^Q/,
        /^R/,
        /^S/,
        /^T/,
        /^U/,
        /^V/,
        /^W/,
        /^X/,
        /^Y/,
        /^Z/,
      ],
    },
  })
    .then((result) => {
      res.render("Dispense/doneviewindispense", {
        dispensearray: result,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

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
    console.log(confirmPassword);
    const { password } = req.body;
    console.log(password);
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
  "/update-avatar",
  upload.single("update-profile"),
  checkIfUser,
  requireAuth,
  (req, res) => {
    console.log(req.file);
    cloudinary.uploader.upload(
      req.file.path,
      { folder: "PharmacyConnect/Profile-Image" },
      async (error, result) => {
        if (result) {
          const decoded = jwt.verify(
            req.cookies.jwt,
            process.env.JWTSECRET_KEY
          );
          await User.updateOne(
            { _id: decoded.id },
            { profileimage: result.secure_url }
          );
          res.redirect("/interface");
        }
      }
    );
  }
);

// CHOOSE IMAGE POST REQUEST
router.post("/avatarselection", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-01.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection2", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-02.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection3", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-03.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection4", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-04.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection5", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-06.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection6", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-07.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection7", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-08.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection8", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-09.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection9", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-10.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection10", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-11.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection11", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-12.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection12", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-13.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection13", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-14.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection14", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-15.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection15", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-16.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection16", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-17.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection17", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-18.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection18", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-19.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection19", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-20.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection20", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-21.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection21", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-22.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection22", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-23.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection23", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-24.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});
router.post("/avatarselection24", checkIfUser, requireAuth, (req, res) => {
  cloudinary.uploader.upload(
    "./public/img/Avatar/Untitled-1-25.png",
    { folder: "PharmacyConnect/AVATAR" },
    async (error, result) => {
      if (result) {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await User.updateOne(
          { _id: decoded.id },
          { profileimage: result.secure_url }
        );
        res.redirect("/login");
      } else {
        console.log(error);
      }
    }
  );
});

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
    console.log(validationerrors);
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
    console.log(validationerrors);
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
    const result = await Inpatientschema.find({ mrn: searchText });
    res.render("Inpatient/inpatientsearch", { array: result, moment: moment });
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

//OUTPATIENT ADD PATIENT
router.post("/add_patient_out", checkIfUser, requireAuth, async (req, res) => {
  try {
    if (req.body.oraliv === "Choose....") {
      return res.json({ iv_oral: "You Must Enter This Field" });
    }
    const newoutpatientpatient = await Outpatient.create(req.body);
    res.json({ newoutpatientpatient: newoutpatientpatient });
  } catch (error) {
    console.log(error);
  }
});

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
  console.log(req.body.searchText);
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

//ATTACH FILE
router.post(
  "/attach",
  upload.single("attachfile"),
  checkIfUser,
  requireAuth,
  (req, res) => {
    console.log(req.file.path);
    cloudinary.uploader.upload(
      req.file.path,
      { folder: "PharmacyConnect/Attach-Files" },
      async (error, result) => {
        console.log(req.file);
        if (result) {
          await Inpatientschema.updateOne(req.params.id, {
            attachfile: result.secure_url,
          });
          res.redirect("inpatient3");
        } else {
          console.log(error);
        }
      }
    );
  }
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
      console.log(req.body);
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
router.put("/doneout/:id", checkIfUser, requireAuth, (req, res) => {
  Outpatient.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log(req.body);
      Outpatient.find().then((result) => {
        res.render("IvPrep/ivprepout", { outarray: result, moment: moment });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// IVPREP OUTPATIENT / EDIT
router.put("/outedit/:id", checkIfUser, requireAuth, (req, res) => {
  Outpatient.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log(req.body);
      Outpatient.find({ oraliv: "IV" }).then((result) => {
        res.render("IvPrep/ivprepout", { outarray: result, moment: moment });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

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

// Dispense INPATIENT / EDIT
router.put("/dispinedit/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Inpatientschema.find({ oraliv: "Oral" }).then((result) => {
        res.render("Dispense/dispense3in", {
          dispensearray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

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

// Dispense INPATIENT DONE VIEW / EDIT
router.put("/dispineditdoneview/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Inpatientschema.find({
        oraliv: "Oral",
        prepcomment: {
          $in: [
            /^a/,
            /^b/,
            /^c/,
            /^d/,
            /^e/,
            /^f/,
            /^g/,
            /^h/,
            /^i/,
            /^j/,
            /^k/,
            /^l/,
            /^m/,
            /^n/,
            /^o/,
            /^p/,
            /^q/,
            /^r/,
            /^s/,
            /^t/,
            /^u/,
            /^v/,
            /^w/,
            /^x/,
            /^y/,
            /^z/,
            /^0/,
            /^1/,
            /^2/,
            /^3/,
            /^4/,
            /^5/,
            /^6/,
            /^7/,
            /^8/,
            /^9/,
            /^A/,
            /^B/,
            /^C/,
            /^D/,
            /^E/,
            /^F/,
            /^G/,
            /^H/,
            /^I/,
            /^J/,
            /^K/,
            /^L/,
            /^M/,
            /^N/,
            /^O/,
            /^P/,
            /^Q/,
            /^R/,
            /^S/,
            /^T/,
            /^U/,
            /^V/,
            /^W/,
            /^X/,
            /^Y/,
            /^Z/,
          ],
        },
      }).then((result) => {
        res.render("Dispense/doneviewindispense", {
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
router.put("/donedisin/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log(req.body);
      Inpatientschema.find({ oraliv: "Oral" }).then((result) => {
        res.render("Dispense/dispense3in", {
          dispensearray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// DISPENSE INPATIENT DONE VIEW / DONE
router.put("/doneviewdisin/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log(req.body);
      Inpatientschema.find({
        oraliv: "Oral",
        prepcomment: {
          $in: [
            /^a/,
            /^b/,
            /^c/,
            /^d/,
            /^e/,
            /^f/,
            /^g/,
            /^h/,
            /^i/,
            /^j/,
            /^k/,
            /^l/,
            /^m/,
            /^n/,
            /^o/,
            /^p/,
            /^q/,
            /^r/,
            /^s/,
            /^t/,
            /^u/,
            /^v/,
            /^w/,
            /^x/,
            /^y/,
            /^z/,
            /^0/,
            /^1/,
            /^2/,
            /^3/,
            /^4/,
            /^5/,
            /^6/,
            /^7/,
            /^8/,
            /^9/,
            /^A/,
            /^B/,
            /^C/,
            /^D/,
            /^E/,
            /^F/,
            /^G/,
            /^H/,
            /^I/,
            /^J/,
            /^K/,
            /^L/,
            /^M/,
            /^N/,
            /^O/,
            /^P/,
            /^Q/,
            /^R/,
            /^S/,
            /^T/,
            /^U/,
            /^V/,
            /^W/,
            /^X/,
            /^Y/,
            /^Z/,
          ],
        },
      }).then((result) => {
        res.render("Dispense/doneviewindispense", {
          dispensearray: result,
          moment: moment,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// DISPENSE INPATIENT EXTRADOSE / DONE
router.put("/donedisined/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log(req.body);
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
      console.log(req.body);
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
      console.log(req.body);
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
    console.log(user);
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
    console.log(user);
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

module.exports = router;
