//ERROR HANDILING TRY_CATCH OR THEN_CATCH
const asyncHandler = require("express-async-handler");

//JWT TOKEN
const jwt = require("jsonwebtoken");
const Medication = require("../models/medication");
const User = require("../models/newRegSchema");

//SIGNOUT
exports.signOut = (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, maxAge: 1 });
  res.redirect("/");
};

//FIRSTWELCOME
exports.firstWelcome = (req, res) => {
  res.status(201).render("Entery/firstwelcome");
};

//LOGIN PAGE
exports.loginPage = (req, res) => {
  res.render("Entery/login.ejs");
};

//REGISTERATION
exports.Register = (req, res) => {
  res.render("Entery/registration.ejs");
};

//AVATAR PAGE
exports.Avatar = (req, res) => {
  res.render("Entery/Avatar.ejs");
};

//INTERFACE
exports.interface =  asyncHandler(async (req, res) => {
  res.render("interface.ejs");
});

//ONCOTIPS
exports.OncoTips = asyncHandler(async (req, res) => {
  const med = await Medication.find();
  
  const AntiCancer = await Medication.find({ classname: "Anti-Cancer" }).sort({
    generic: "asc",
  });
  const AntiBiotics = await Medication.find({ classname: "Anti-Biotics" }).sort(
    { generic: "asc" }
  );
  const AntiCoagulant = await Medication.find({
    classname: "Anti-Coagulant",
  }).sort({ generic: "asc" });
  const AntiConvulsant = await Medication.find({
    classname: "Anti-Convulsant",
  }).sort({ generic: "asc" });
  const AntiDiarrheal = await Medication.find({
    classname: "Anti-Diarrheal",
  }).sort({ generic: "asc" });
  const AntiEmetic = await Medication.find({ classname: "Anti-Emetic" }).sort({
    generic: "asc",
  });
  const AntiFlatulence = await Medication.find({
    classname: "Anti-Flatulence",
  }).sort({ generic: "asc" });
  const AntiFungal = await Medication.find({ classname: "Anti-Fungal" }).sort({
    generic: "asc",
  });
  const AntiGout = await Medication.find({ classname: "Anti-Gout" }).sort({
    generic: "asc",
  });
  const AntiHyperprolactinemia = await Medication.find({
    classname: "Anti-Hyperprolactinemia",
  }).sort({ generic: "asc" });
  const Antiinflammatory = await Medication.find({
    classname: "Anti-inflammatory & Antiedematous",
  }).sort({ generic: "asc" });
  const AntiSpasmodic = await Medication.find({
    classname: "Anti-Spasmodic",
  }).sort({ generic: "asc" });
  const AntiTussive = await Medication.find({ classname: "Anti-Tussive" }).sort(
    { generic: "asc" }
  );
  const AntiViral = await Medication.find({ classname: "Anti-Viral" }).sort({
    generic: "asc",
  });
  const Analgesic = await Medication.find({
    classname: "Analgesic / NSAID",
  }).sort({ generic: "asc" });
  const Antacid = await Medication.find({
    classname: "Antacid/Anti-Flatulent",
  }).sort({ generic: "asc" });
  const Anthelmintic = await Medication.find({
    classname: "Anthelmintic",
  }).sort({ generic: "asc" });
  const Antihistamine = await Medication.find({
    classname: "Antihistamine",
  }).sort({ generic: "asc" });
  const Antidote = await Medication.find({ classname: "Antidote" }).sort({
    generic: "asc",
  });
  const Cardiology = await Medication.find({ classname: "Cardiology" }).sort({
    generic: "asc",
  });
  const Corticosteroid = await Medication.find({
    classname: "Corticosteroid",
  }).sort({ generic: "asc" });
  const DietarySupplement = await Medication.find({
    classname: "Dietary Supplement",
  }).sort({ generic: "asc" });
  const ElectrolyteSupplement = await Medication.find({
    classname: "Electrolyte Supplement",
  }).sort({ generic: "asc" });
  const Expectorant = await Medication.find({ classname: "Expectorant" }).sort({
    generic: "asc",
  });
  const Gastrointestinal = await Medication.find({
    classname: "Gastrointestinal",
  }).sort({ generic: "asc" });
  const HemostaticAgent = await Medication.find({
    classname: "Hemostatic Agent",
  }).sort({ generic: "asc" });
  const Immunosuppressant = await Medication.find({
    classname: "Immunosuppressant",
  }).sort({ generic: "asc" });
  const Mucolytic = await Medication.find({ classname: "Mucolytic" }).sort({
    generic: "asc",
  });
  const MastCellStabilizer = await Medication.find({
    classname: "Mast Cell Stabilizer",
  }).sort({ generic: "asc" });
  const Neurology = await Medication.find({ classname: "Neurology" }).sort({
    generic: "asc",
  });
  const Osteoarthritis = await Medication.find({
    classname: "Osteoarthritis",
  }).sort({ generic: "asc" });
  const SkeletalMuscleRelaxant = await Medication.find({
    classname: "Skeletal Muscle Relaxant",
  }).sort({ generic: "asc" });
  // const VasopressinHormone = await Medication.find({
  //   classname: "Vasopressin Hormone",
  // }).sort({ generic: "asc" });
  const WaterSolubleVitamin = await Medication.find({
    classname: "Water Soluble Vitamin",
  }).sort({ generic: "asc" });

  const Maoinhibitor = await Medication.find({
    classname: "Mao inhibitor",
  }).sort({ generic: "asc" });

  const Antitraumatic = await Medication.find({
    classname: "Anti-Traumatic",
  }).sort({ generic: "asc" });

  const Bronchodilator = await Medication.find({
    classname: "Bronchodilator",
  }).sort({ generic: "asc" });

  const Contraceptive
  = await Medication.find({
    classname: "Contraceptive",
  }).sort({ generic: "asc" });

  const Decongestant
  = await Medication.find({
    classname: "Decongestant",
  }).sort({ generic: "asc" });

  const Digestive
  = await Medication.find({
    classname: "Digestive",
  }).sort({ generic: "asc" });

  const Hormone
  = await Medication.find({
    classname: "Hormone",
  }).sort({ generic: "asc" });

  const Laxative
  = await Medication.find({
    classname: "Laxative",
  }).sort({ generic: "asc" });

  const AntiAsthmatic
  = await Medication.find({
    classname: "Anti-Asthmatic",
  }).sort({ generic: "asc" });

  const Diuretic
  = await Medication.find({
    classname: "Diuretic",
  }).sort({ generic: "asc" });

  const AntiHyperphosphatemia
  = await Medication.find({
    classname: "Anti-Hyperphosphatemia",
  }).sort({ generic: "asc" });

  const PPI
  = await Medication.find({
    classname: "Proton Pump Inhibitor",
  }).sort({ generic: "asc" });

  const Weakopioid
  = await Medication.find({
    classname: "Weak opioid",
  }).sort({ generic: "asc" });

  // const decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY)
  // const user = await User.findOne({ _id : decoded.id})
  // const searchmed = user.searchmedication



  if (med) {
    res.render("oncotips.ejs", {
      med,
      AntiCancer,
      AntiBiotics,
      AntiCoagulant,
      AntiConvulsant,
      AntiDiarrheal,
      AntiEmetic,
      AntiFlatulence,
      AntiFungal,
      AntiGout,
      AntiHyperprolactinemia,
      Antiinflammatory,
      AntiSpasmodic,
      AntiTussive,
      AntiViral,
      Analgesic,
      Antacid,
      Anthelmintic,
      Antidote,
      Antihistamine,
      Cardiology,
      Corticosteroid,
      DietarySupplement,
      ElectrolyteSupplement,
      Expectorant,
      Gastrointestinal,
      HemostaticAgent,
      Immunosuppressant,
      Mucolytic,
      MastCellStabilizer,
      Neurology,
      Osteoarthritis,
      SkeletalMuscleRelaxant,
      // VasopressinHormone,
      WaterSolubleVitamin,
      Maoinhibitor,
      Antitraumatic,
      Bronchodilator,
      Contraceptive,
      Decongestant,
      Digestive,
      Hormone,
      Laxative,
      AntiAsthmatic,
      Diuretic,
      AntiHyperphosphatemia,
      PPI,
      Weakopioid,
    });
  }
});

//WELCOME
exports.welcome = (req, res) => {
  res.render("Entery/welcome.ejs");
};

//FORGETPASSWORD
exports.forgetpassword = (req, res) => {
  res.render("Entery/forgetpage.ejs");
};

//CHANGE PASSWORD
exports.changepassword = (req, res) => {
  res.render("Entery/changepasspage.ejs");
};

//STRUCTURE
exports.STRUCTURE =  asyncHandler(async(req, res) => {
  res.render("STRUCTURE.ejs");
})

//VERIFY USER
exports.VERIFIY =  asyncHandler(async(req, res) => {
  res.render("Entery/verifiyuser.ejs");
})
