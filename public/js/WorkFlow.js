{// DISPENSE
const Disp = document.getElementById("Dis");
let i = 1;
const autowriting1 = () => {
  const text1 = "We Serve About 300";
  Distspan1.innerHTML = text1.slice(0, i);
  i++;
};

let z = 1;
const autowriting2 = () => {
  const text2 = "Pts Daily With";
  Distspan2.innerHTML = text2.slice(0, z);
  z++;
};

let x = 1;
const autowriting3 = () => {
  const text3 = "1500 unit Dispensed";
  Distspan3.innerHTML = text3.slice(0, x);
  x++;
};


Disp.addEventListener("mouseover", (eo) => {
  setInterval(autowriting1, 300);
});

Disp.addEventListener("mouseup", (eo) => {
  clearInterval(autowriting1);
});

Disp.addEventListener("mouseover", (eo) => {
  setTimeout(() => {
    setInterval(autowriting2, 300);
  }, 2000);
});

Disp.addEventListener("mouseover", (eo) => {
  setTimeout(() => {
    setInterval(autowriting3, 300);
  }, 4000);
});
}




{// EXTEMPRENOUS
const Exte = document.getElementById("Ext");
let n = 1
const auto1 = () => {
  const text1 = "40 Preparation Daily";
  Extspan1.innerHTML = text1.slice(0, n);
  n++;
};

let m = 1
const auto2 = () => {
  const text2 = "400 Topical / Month";
  Extspan2.innerHTML = text2.slice(0, m);
  m++;
};

let b = 1
const auto3 = () => {
  const text3 = "300Cap / Month";
  Extspan3.innerHTML = text3.slice(0, b);
  b++;
};

Exte.addEventListener("mouseover", (eo) => {
  setInterval(auto1, 200);
});

Exte.addEventListener("mouseover", (eo) => {
  setTimeout(() => {
    setInterval(auto2, 200);
  }, 3000);
});

Exte.addEventListener("mouseover", (eo) => {
  setTimeout(() => {
    setInterval(auto3, 200);
  }, 6000);
});
}



{// PREP/CHECK
const PreP = document.getElementById("Pre");
let q = 1
const write1 = () => {
  const text1 = "500 Dose Chemo Daily";
  Pretspan1.innerHTML = text1.slice(0, q);
  q++;
};

let w = 1
const write2 = () => {
  const text2 = "3000 Dose Anti Daily";
  Pretspan2.innerHTML = text2.slice(0, w);
  w++;
};

let e = 1
const write3 = () => {
  const text3 = "600 Order Daily";
  Pretspan3.innerHTML = text3.slice(0, e);
  e++;
};

PreP.addEventListener("mouseover", (eo) => {
  setInterval(write1, 200);
});

PreP.addEventListener("mouseover", (eo) => {
  setTimeout(() => {
    setInterval(write2, 200);
  }, 3000);
});

PreP.addEventListener("mouseover", (eo) => {
  setTimeout(() => {
    setInterval(write3, 200);
  }, 6000);
});
}



{// IVADMIXTURE
const IVMIX = document.getElementById("IV");

let r = 1
const title1 = () => {
  const text1 = "Prepare 3000 Dose ANTI";
  IVtspan1.innerHTML = text1.slice(0, r);
  r++;
};

let t = 1
const title2 = () => {
  const text2 = "500 Dose Chemotherapy";
  IVtspan2.innerHTML = text2.slice(0, t);
  t++;
};

// let o = 1
// const title3 = () => {
//   const text3 = "600unit Dispensed";
//   IVtspan3.innerHTML = text3.slice(0, o);
//   o++;
// };

IVMIX.addEventListener("mouseover", (eo) => {
  setInterval(title1, 200);
});

IVMIX.addEventListener("mouseover", (eo) => {
  setTimeout(() => {
    setInterval(title2, 200);
  }, 3000);
});

// IVMIX.addEventListener("mouseover", (eo) => {
//   setTimeout(() => {
//     setInterval(title3, 200);
//   }, 6000);
// });
}


{// INVENTORY MANAGMENT
  const INM = document.getElementById("IM");

  let r = 1
  const INVENTORY = () => {
    const text1 = "More Than 1000 unit Daily";
    INtspan1.innerHTML = text1.slice(0, r);
    r++;
    
  };
  
  
  INM.addEventListener("mousemove", (eo) => {
    setInterval(INVENTORY, 300);
  });

  INM.addEventListener("mouseout" , (eo) => {
    return INVENTORY;
    
  })

  

}