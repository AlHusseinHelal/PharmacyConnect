const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const Inpatientschema = require("../models/inpatientSchema");
const Registration = require("../models/newRegSchema");
const Outpatient = require("../models/outpatientSchema");
const Dispenseschema = require("../models/dispenseSchema");
const { requireAuth } = require("../middleware/middleware");
const { checkIfUser } = require("../middleware/middleware");
const { modification } = require("../middleware/middleware");
const { check, validationResult } = require("express-validator");
const multer = require("multer");
const upload = multer({ storage: multer.diskStorage({}) });
const cloudinary = require("cloudinary").v2;
router.use(express.static("public"));
require("dotenv").config();
const React = require("react");
// import React from 'react';
const ReactDOM = require("react-dom/client");
// import ReactDOM from 'react-dom/client';

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

const moment = require("moment");
var jwt = require("jsonwebtoken");

// ---------------------------------
//GET REQUEST
// ----------------------------------

//SIGNOUT
router.get("/signout", (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, maxAge: 1 });
  res.redirect("/");
});

//firstwelcome
router.get("/", (req, res) => {
  res.render("Entery/firstwelcome");
});

//LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("Entery/login.ejs");
});

//REGISTRATION PAGE
router.get("/register", (req, res) => {
  res.render("Entery/registration.ejs");
});

//AVATAR PAGE
router.get("/Avatar", (req, res) => {
  res.render("Entery/Avatar.ejs");
});

//INTERFACE
router.get("/interface", checkIfUser, requireAuth, (req, res) => {
  res.render("interface.ejs");
});

//INTERFACE
router.get("/documentry", checkIfUser, requireAuth, (req, res) => {
  res.render("Documentry/helloo");
});

//ONCOTIPS
router.get("/oncotips", checkIfUser, requireAuth, (req, res) => {
  res.render("oncotips.ejs");
});

//welcomw
router.get("/welcome", checkIfUser, requireAuth, (req, res) => {
  res.render("Entery/welcome.ejs");
});

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
router.get("/inpatient3", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.find()
    .then((results) => {
      res.render("Inpatient/inpatient3", {
        inpatientarray: results,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// INPATIENT VIEW/DELETE
router.get("/view/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findById(req.params.id)
    .then((result) => {
      res.render("Inpatient/inpatient4", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

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

// OUTPATIENT VIEW/DELETE
router.get("/outview/:id", checkIfUser, requireAuth, (req, res) => {
  Outpatient.findById(req.params.id)
    .then((result) => {
      res.render("Outpatient/outpatient4", { obj: result, moment: moment });
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
router.get("/prepin", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.find({ oraliv: "IV" })
    .then((result) => {
      res.render("IvPrep/ivprepin", { inarray: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

//IVPREP OUTPATIENT
router.get("/prepout", checkIfUser, requireAuth, (req, res) => {
  Outpatient.find({ oraliv: "IV" })
    .then((result) => {
      res.render("IvPrep/ivprepout", { outarray: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

//IVPREP DISPENSE
router.get("/prepdis", checkIfUser, requireAuth, (req, res) => {
  Dispenseschema.find({ oraliv: "IV" })
    .then((result) => {
      res.render("IvPrep/ivprepdis", { outarray: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

//PHARMACY LAB
router.get("/lab", checkIfUser, requireAuth, (req, res) => {
  res.render("lab");
});

//IVPREP EDIT INPATIENT
router.get("/edit/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findById(req.params.id)
    .then((result) => {
      res.render("IvPrep/ivprepedit", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//IVPREP EDIT OUTPATIENT
router.get("/editout/:id", checkIfUser, requireAuth, (req, res) => {
  Outpatient.findById(req.params.id)
    .then((result) => {
      res.render("IvPrep/ivprepeditout", { obj: result });
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
router.get("/dispense3", checkIfUser, requireAuth, (req, res) => {
  Dispenseschema.find().then((result) => {
    res.render("Dispense/dispense3", { dispensearray: result, moment: moment });
  });
});

// DISPENSE INPATIENT
router.get("/dispin", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.find({ oraliv: "Oral" }).then((result) => {
    res.render("Dispense/dispense3in", {
      dispensearray: result,
      moment: moment,
    });
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
  async (req, res) => {
    try {
      const usercode = await Registration.findOne({ code: req.body.code });
      if (usercode) {
        return res.json({ codeexist: "The Code Is Already Existing" });
      }

      const useremail = await Registration.findOne({ email: req.body.email });
      if (useremail) {
        return res.json({ emailexist: "The Email Is Already Existing" });
      }

      const objError = validationResult(req);
      console.log(objError.errors);
      if (objError.errors.length > 0) {
        return res.json({ validationerrors: objError.errors });
      }

      const newUser = await Registration.create(req.body);
      var token = jwt.sign({ id: newUser._id }, process.env.JWTSECRET_KEY);
      res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
      res.json({ id: newUser._id });
    } catch (error) {
      console.log(err);
    }
  }
);

//LOGIN CHECK
router.post("/checklogin", async (req, res) => {
  try {
    const loginuser = await Registration.findOne({ code: req.body.code });
    if (loginuser == null) {
      return res.json({ codenotfound: "You Are Not Registered" });
    }
    const match = await bcrypt.compare(req.body.password, loginuser.password);
    if (!match) {
      return res.json({ wrongpassword: "Wrong Password" });
    }
    if (match) {
      var token = jwt.sign({ id: loginuser._id }, process.env.JWTSECRET_KEY);
      res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
      res.json({ loginuser: loginuser });
    }
  } catch (e) {
    console.log(e);
  }
});

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
          var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
          await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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
        var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
        await Registration.updateOne(
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

// router.put("/editform/:id", checkIfUser, requireAuth, (req, res) => {
//   console.log(req.body);
//   Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => {
//       Inpatientschema.find().then((result) => {
//         res.render("IvPrep/ivprepin", { inarray: result, moment: moment });
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.put("/editformout/:id", checkIfUser, requireAuth, (req, res) => {
//   console.log(req.body);
//   Outpatient.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => {
//       Outpatient.find().then((result) => {
//         res.render("IvPrep/ivprepout", { outarray: result, moment: moment });
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// INPATIENT ADD PATIENT
router.post("/add_patient_in", checkIfUser, requireAuth, async (req, res) => {
  try {
    if (req.body.oraliv === "Choose....") {
      return res.json({ oraliv: "You Must Enter This Field" });
    } else {
      inpatient_add_patient = await Inpatientschema.create(req.body);
      res.json({ inpatient_add_patient: inpatient_add_patient });
    }
  } catch (error) {}
});

// INPATIENT POST SEARCH
router.post("/inpatientsearch", checkIfUser, requireAuth, (req, res) => {
  console.log(req.body.searchText);
  const searchText = req.body.searchText.trim();
  Inpatientschema.find({ mrn: searchText })
    .then((result) => {
      res.render("Inpatient/inpatientsearch", {
        array: result,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

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
    } else {
      const newoutpatientpatient = await Outpatient.create(req.body);
      res.json({ newoutpatientpatient: newoutpatientpatient });
    }
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
router.post("/add_patient_dis", checkIfUser, requireAuth, async (req, res) => {
  try {
    if (req.body.oraliv === "Choose....") {
      return res.json({ oraliv: "You Must Enter This Field" });
    } else {
      dispense_add_patient = await Dispenseschema.create(req.body);
      res.json({ dispense_add_patient: dispense_add_patient });
    }
  } catch (error) {}
});

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
          // var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
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

// router.post("/add_patient_in", checkIfUser, requireAuth, async (req, res) => {
//   try {
//     if (req.body.oraliv === "Choose....") {
//       return res.json({ oraliv: "You Must Enter This Field" });
//     } else {
//       inpatient_add_patient = await Inpatientschema.create(req.body);
//       res.json({inpatient_add_patient: inpatient_add_patient})
//     }
//   } catch (error) {

//   }
//   });

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
router.put("/done/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log(req.body);
      Inpatientschema.find().then((result) => {
        res.render("IvPrep/ivprepin", { inarray: result, moment: moment });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// IVPREP INPATIENT / EDIT
router.put("/inedit/:id", checkIfUser, requireAuth, (req, res) => {
  Inpatientschema.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Inpatientschema.find().then((result) => {
        res.render("IvPrep/ivprepin", { inarray: result, moment: moment });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

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
      Outpatient.find().then((result) => {
        res.render("IvPrep/ivprepout", { outarray: result, moment: moment });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
