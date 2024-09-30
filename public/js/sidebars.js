const medication = document.querySelectorAll(".medication")
const presenstation = document.querySelectorAll(".presenstation")
const dicomunication = document.querySelectorAll(".dicomunication")
const policy = document.querySelectorAll(".policy")
const rare = document.querySelectorAll(".rareprotocol")
const wf = document.querySelectorAll(".wfprotocol")
const manual = document.querySelectorAll(".manual")


const row = document.querySelectorAll(".medselect")
const pre = document.querySelectorAll(".preselect")
const dic = document.querySelectorAll(".dicselect")
const policyselect = document.querySelectorAll(".policyselect")
const rareselect = document.querySelectorAll(".rareselect")
const wfselect = document.querySelectorAll(".wfselect")
const manualselect = document.querySelectorAll(".manualselect")

// SHOW MEDICATION
medication.forEach(item => {
  item.addEventListener('click', (eo) => {
    const Name = eo.target
    const code = item.querySelector(".code")
    const getName = code.textContent ;
    const getsecName = document.getElementsByClassName(getName)[1]
    const hide = row.forEach(el => {
      el.classList.add('d-none')
    });
    const hidepresentation = pre.forEach(el => {
      el.classList.add('d-none')
    });
    const hidedic = dic.forEach(el => {
      el.classList.add('d-none')
    });
    const hidepolicy = policyselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hiderare = rareselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidewf = wfselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemanual = manualselect.forEach(el => {
      el.classList.add('d-none')
    });
    getsecName.classList.toggle('d-none')
  }
  )
});


// SHOW PRESENTATION
presenstation.forEach(item => {
  item.addEventListener('click', (eo) => {
    const Name = eo.target
    const code = item.querySelector(".precode")
    const getName = code.textContent ;
    const getsecName = document.querySelector("." + getName)
    const hide = pre.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemedication = row.forEach(el => {
      el.classList.add('d-none')
    });
    const hidedic = dic.forEach(el => {
      el.classList.add('d-none')
    });
    const hidepolicy = policyselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hiderare = rareselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidewf = wfselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemanual = manualselect.forEach(el => {
      el.classList.add('d-none')
    });
    getsecName.classList.toggle('d-none')
  }
  )
});

// SHOW DIC COMMUNICATION
dicomunication.forEach(item => {
  item.addEventListener('click', (eo) => {
    const Name = eo.target
    const code = item.querySelector(".diccode")
    const getName = code.textContent ;
    const getsecName = document.querySelector("." + getName)
    const hide = pre.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemedication = row.forEach(el => {
      el.classList.add('d-none')
    });
    const hidedic = dic.forEach(el => {
      el.classList.add('d-none')
    });
    const hidepolicy = policyselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hiderare = rareselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidewf = wfselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemanual = manualselect.forEach(el => {
      el.classList.add('d-none')
    });
    getsecName.classList.toggle('d-none')
  }
  )
});

// SHOW POLICY
policy.forEach(item => {
  item.addEventListener('click', (eo) => {
    const Name = eo.target
    const code = item.querySelector(".policycode")
    const getName = code.textContent ;
    const getsecName = document.querySelector("." + getName)
    const hide = pre.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemedication = row.forEach(el => {
      el.classList.add('d-none')
    });
    const hidedic = dic.forEach(el => {
      el.classList.add('d-none')
    });
    const hidepolicy = policyselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hiderare = rareselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidewf = wfselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemanual = manualselect.forEach(el => {
      el.classList.add('d-none')
    });
    getsecName.classList.toggle('d-none')
  }
  )
});

// SHOW RARE PROTOCOLS
rare.forEach(item => {
  item.addEventListener('click', (eo) => {
    const Name = eo.target
    const code = item.querySelector(".rarecode")
    const getName = code.textContent ;
    const getsecName = document.querySelector("." + getName)
    const hide = pre.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemedication = row.forEach(el => {
      el.classList.add('d-none')
    });
    const hidedic = dic.forEach(el => {
      el.classList.add('d-none')
    });
    const hidepolicy = policyselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hiderare = rareselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidewf = wfselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemanual = manualselect.forEach(el => {
      el.classList.add('d-none')
    });
    getsecName.classList.toggle('d-none')
  }
  )
});

// SHOW WORKFLOW
  wf.forEach(item => {
  item.addEventListener('click', (eo) => {
    const Name = eo.target
    const code = item.querySelector(".wfcode")
    const getName = code.textContent ;
    const getsecName = document.querySelector("." + getName)
    const hide = pre.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemedication = row.forEach(el => {
      el.classList.add('d-none')
    });
    const hidedic = dic.forEach(el => {
      el.classList.add('d-none')
    });
    const hidepolicy = policyselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hiderare = rareselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidewf = wfselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemanual = manualselect.forEach(el => {
      el.classList.add('d-none')
    });
    getsecName.classList.toggle('d-none')
  }
  )
});

// SHOW MANUAL
manual.forEach(item => {
  item.addEventListener('click', (eo) => {
    const Name = eo.target
    const code = item.querySelector(".manualcode")
    const getName = code.textContent ;
    const getsecName = document.querySelector("." + getName)
    const hide = pre.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemedication = row.forEach(el => {
      el.classList.add('d-none')
    });
    const hidedic = dic.forEach(el => {
      el.classList.add('d-none')
    });
    const hidepolicy = policyselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hiderare = rareselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidewf = wfselect.forEach(el => {
      el.classList.add('d-none')
    });
    const hidemanual = manualselect.forEach(el => {
      el.classList.add('d-none')
    });

    getsecName.classList.toggle('d-none')
  }
  )
});

// const medication = document.querySelectorAll(".medication")
// const row = document.querySelectorAll(".row")
// console.log(medication);
// medication.forEach(item => {
//   item.addEventListener('click', (eo) => {
//     const Name = eo.target
//     console.log(Name);
//     const getName = Name.textContent ;
//     console.log(getName);
//     const getsecName = document.getElementsByClassName(getName)[1]
//     console.log(getsecName);
//     const hide = row.forEach(el => {
//       el.classList.add('d-none')
//     });
//     getsecName.classList.toggle('d-none')
//   }
//   )
// });



$(document).ready(function () {
  /*--------------------------------------------------------------
# GEAR CONTROL
--------------------------------------------------------------*/
  $("#gear").on("click", function () {
    $("#sun").toggleClass("appear50");
    $("#moon").toggleClass("appear100");
  });


  /*--------------------------------------------------------------
# CHANGE COLOR WHEN PRESS
--------------------------------------------------------------*/
  // maintab
  $(".btnheadfont").on("click", function () {
    $(this)
      .toggleClass("black")
      .parent()
      .parent()
      .siblings()
      .find(".btnheadfont")
      .removeClass("black");
    $(".Layer").toggleClass("blackfill");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".Layer")
      .removeClass("blackfill");
    $(this)
      .parent()
      .parent()
      .find("ul")
      .find(".btnsubheadfont")
      .removeClass("blue");
  });

  $(".Layer").on("click", function () {
    $(this)
      .toggleClass("blackfill")
      .parent()
      .parent()
      .siblings()
      .find(".Layer")
      .removeClass("blackfill");
    $(".btnheadfont").toggleClass("black");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".btnheadfont")
      .removeClass("black");
  });

  // SUBTAB
  $(".btnsubheadfont").on("click", function () {
    $(this)
      .addClass("blue")
      .parent()
      .siblings()
      .find(".btnsubheadfont")
      .removeClass("blue");
  });

  // MINILIST
  $(".group li").on("click", function () {
    $(this)
      .addClass("backgroundcolor")
      .siblings()
      .removeClass("backgroundcolor");
  });

  /*--------------------------------------------------------------
# UP ARROW
--------------------------------------------------------------*/

  $("main").on("scroll", function () {
    if ($("main").scrollTop() == 0) {
      $("#uparrow").addClass("opacity");
    } else {
      $("#uparrow").removeClass("opacity");
    }
  });

  $("#uparrow").on("click", function () {
    $("main").scrollTop("0");
  });

  $("#container").on("scroll", function () {
    if ($("#container").scrollTop() == 0) {
      $("#uparrow2").addClass("opacity");
    } else {
      $("#uparrow2").removeClass("opacity");
    }
  });

  $("#uparrow2").on("click", function () {
    $("#container").scrollTop("0");
    $("#iframe").scrollTop("0");
  });
}); // END OF jQuary



// // OPEN AND CLOSE LIST
const subtab = document.querySelectorAll(".btnsubheadfont");



//PRESENTATION
botn1.addEventListener("click", (params) => {
  console.log("helloooo");
  infographcollapse.classList.remove("show");
  medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
});

//INFOGRAPH
botn2.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION
botn3.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//DIC
botn4.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  medicationcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//WORKFLOW
botn5.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  medicationcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//SCIENTIFIC
botn6.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  medicationcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//POLICY
botn7.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MANUAL
botn8.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//RARE PROTOCOLS
botn9.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//ANTICANCER
botn11.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//ANTIBIOTIC
botn12.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//ANTICOAGULANT
botn13.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//ANTI-CONVALSANT
botn14.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//ANTI_DIARRHEAL
botn15.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION Antiemetic
botn16.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANTI_FLATULANCE
botn17.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANTI_FUNGAL
botn18.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANTI_GOUT
botn19.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION HYPERLACTINEMIA
botn20.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANTIINFLAM
botn21.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION SPASMODIC
botn22.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION TUSSIVE
botn23.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANTI-VIRAL
botn24.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANALGESIC
botn25.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANTACID
botn26.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANTHELIMENTIC
botn27.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANTI_HISTAMINE
botn28.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION ANTI_DOTE
botn29.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION CARDIOLOGY
botn30.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION CORTICOSTEROIDS
botn31.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION DIEATORY
botn32.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});


//MEDICATION ELECTROLYTE
botn33.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});


//MEDICATION EXPECTORENT
botn34.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});


//MEDICATION GASTROINTISTINAL
botn35.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION HEMOSTATIC
botn36.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});


//MEDICATION IMMUNOSUPPRESENT
botn37.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION MAST CELL ST
botn38.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION MUCOLYTIC
botn39.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});


//MEDICATION NUROLOGY
botn40.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});


//MEDICATION OSTEOAR
botn41.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});


//MEDICATION SMR
botn42.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});


// //MEDICATION VASOPRESSIN
// botn43.addEventListener("click", (params) => {
//   presentationcollapse.classList.remove("show");
//   infographcollapse.classList.remove("show");
//   // medicationcollapse.classList.remove("show");
//   DICcollapse.classList.remove("show");
//   workflowcollapse.classList.remove("show");
//   papercollapse.classList.remove("show");
//   anticancercollapse.classList.remove("show");
//   antibioticcollapse.classList.remove("show");
//   AntiCoagulantcollapse.classList.remove("show");
//   AntiConvulsantcollapse.classList.remove("show");
//   AntiDiarrhealccollapse.classList.remove("show");
//   Antiemeticcecollapse.classList.remove("show");
//   AntiFlatulencecollapse.classList.remove("show");
//   antifungalcollapse.classList.remove("show");
//   Antigoutcecollapse.classList.remove("show");
//   Hyperprolactinemiacollapse.classList.remove("show");
//   Antiinflamcecollapse.classList.remove("show");
//   AntiSpasmodiccollapse.classList.remove("show");
//   AntiTussivecollapse.classList.remove("show");
//   Antiviralcecollapse.classList.remove("show");
//   Analgesiccollapse.classList.remove("show");
//   Antacidcecollapse.classList.remove("show");
//   Anthelminticcollapse.classList.remove("show");
//   Antihistaminecollapse.classList.remove("show");
//   Antidotecollapse.classList.remove("show");
//   Cardiologycollapse.classList.remove("show");
//   Corticosteroidcollapse.classList.remove("show");
//   DietarySupplementcollapse.classList.remove("show");
//   Electrolytecollapse.classList.remove("show");
//   Expectorantcollapse.classList.remove("show");
//   Gastrointestinalcollapse.classList.remove("show");
//   Hemostaticcollapse.classList.remove("show");
//   Immunosuppressantcecollapse.classList.remove("show");
//   MSTcollapse.classList.remove("show");
//   Mucolyticcollapse.classList.remove("show");
//   Neurologycollapse.classList.remove("show");
//   Osteoarthritiscollapse.classList.remove("show");
//   smrcollapse.classList.remove("show");
//   WaterSolubleVitamincollapse.classList.remove("show");
//   Maocollapse.classList.remove("show");
//   Antitraumaticcollapse.classList.remove("show");
//   Bronchodilatorcollapse.classList.remove("show");
//   Contraceptivecollapse.classList.remove("show");
//   Decongestantcollapse.classList.remove("show");
//   Digestivecollapse.classList.remove("show");
// });


//MEDICATION WATER SOL
botn44.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});


//MEDICATION MAO INHIB
botn45.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION Antitraumatic
botn46.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION Bronchodilator
botn47.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION Contraceptive
botn48.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION Decongestant
botn49.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Digestivecollapse.classList.remove("show");
});

//MEDICATION Digestive
botn50.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
});

//MEDICATION Hormone
botn51.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  Laxativecollapse.classList.remove("show");
  AntiAsthmaticcollapse.classList.remove("show");
  Diureticcollapse.classList.remove("show");
  AntiHyperphosphatemiacollapse.classList.remove("show");
  PPIcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Weakopioidcollapse.classList.remove("show");
});

//MEDICATION Laxative
botn52.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  AntiAsthmaticcollapse.classList.remove("show");
  Diureticcollapse.classList.remove("show");
  AntiHyperphosphatemiacollapse.classList.remove("show");
  PPIcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Weakopioidcollapse.classList.remove("show");
});

//MEDICATION AntiAsthmatic
botn53.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  Laxativecollapse.classList.remove("show");
  Diureticcollapse.classList.remove("show");
  AntiHyperphosphatemiacollapse.classList.remove("show");
  PPIcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Weakopioidcollapse.classList.remove("show");
});

//MEDICATION Diuretic
botn54.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  Laxativecollapse.classList.remove("show");
  AntiAsthmaticcollapse.classList.remove("show");
  AntiHyperphosphatemiacollapse.classList.remove("show");
  PPIcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Weakopioidcollapse.classList.remove("show");
});

//MEDICATION AntiHyperphosphatemia
botn55.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  Laxativecollapse.classList.remove("show");
  AntiAsthmaticcollapse.classList.remove("show");
  Diureticcollapse.classList.remove("show");
  AntiHyperphosphatemiacollapse.classList.remove("show");
  PPIcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Weakopioidcollapse.classList.remove("show");
});

//MEDICATION PPI
botn56.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  Laxativecollapse.classList.remove("show");
  AntiAsthmaticcollapse.classList.remove("show");
  Diureticcollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  Weakopioidcollapse.classList.remove("show");
});

//MEDICATION Weakopioid
botn57.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  Laxativecollapse.classList.remove("show");
  AntiAsthmaticcollapse.classList.remove("show");
  Diureticcollapse.classList.remove("show");
  AntiHyperphosphatemiacollapse.classList.remove("show");
  monoclonalcollapse.classList.remove("show");
  PPIcollapse.classList.remove("show");
});

//MEDICATION Weakopioid
botn58.addEventListener("click", (params) => {
  presentationcollapse.classList.remove("show");
  infographcollapse.classList.remove("show");
  // medicationcollapse.classList.remove("show");
  DICcollapse.classList.remove("show");
  workflowcollapse.classList.remove("show");
  Rarecollapse.classList.remove("show");
  policycollapse.classList.remove("show");
  manualcollapse.classList.remove("show");
  papercollapse.classList.remove("show");
  anticancercollapse.classList.remove("show");
  antibioticcollapse.classList.remove("show");
  AntiCoagulantcollapse.classList.remove("show");
  AntiConvulsantcollapse.classList.remove("show");
  AntiDiarrhealccollapse.classList.remove("show");
  Antiemeticcecollapse.classList.remove("show");
  AntiFlatulencecollapse.classList.remove("show");
  antifungalcollapse.classList.remove("show");
  Antigoutcecollapse.classList.remove("show");
  Hyperprolactinemiacollapse.classList.remove("show");
  Antiinflamcecollapse.classList.remove("show");
  AntiSpasmodiccollapse.classList.remove("show");
  AntiTussivecollapse.classList.remove("show");
  Antiviralcecollapse.classList.remove("show");
  Analgesiccollapse.classList.remove("show");
  Antacidcecollapse.classList.remove("show");
  Anthelminticcollapse.classList.remove("show");
  Antihistaminecollapse.classList.remove("show");
  Antidotecollapse.classList.remove("show");
  Cardiologycollapse.classList.remove("show");
  Corticosteroidcollapse.classList.remove("show");
  DietarySupplementcollapse.classList.remove("show");
  Electrolytecollapse.classList.remove("show");
  Expectorantcollapse.classList.remove("show");
  Gastrointestinalcollapse.classList.remove("show");
  Hemostaticcollapse.classList.remove("show");
  Immunosuppressantcecollapse.classList.remove("show");
  MSTcollapse.classList.remove("show");
  Mucolyticcollapse.classList.remove("show");
  Neurologycollapse.classList.remove("show");
  Osteoarthritiscollapse.classList.remove("show");
  smrcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  WaterSolubleVitamincollapse.classList.remove("show");
  Maocollapse.classList.remove("show");
  Antitraumaticcollapse.classList.remove("show");
  Bronchodilatorcollapse.classList.remove("show");
  Contraceptivecollapse.classList.remove("show");
  Decongestantcollapse.classList.remove("show");
  Hormonecollapse.classList.remove("show");
  Laxativecollapse.classList.remove("show");
  AntiAsthmaticcollapse.classList.remove("show");
  Diureticcollapse.classList.remove("show");
  AntiHyperphosphatemiacollapse.classList.remove("show");
  PPIcollapse.classList.remove("show");
});





