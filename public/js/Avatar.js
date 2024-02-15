const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")
const btn5 = document.querySelector(".btn5")
const btn6 = document.querySelector(".btn6")
const btn7 = document.querySelector(".btn7")
const btn8 = document.querySelector(".btn8")
const btn9 = document.querySelector(".btn9")
const btn10 = document.querySelector(".btn10")
const btn11 = document.querySelector(".btn11")
const btn12 = document.querySelector(".btn12")
const btn13 = document.querySelector(".btn13")
const btn14 = document.querySelector(".btn14")
const btn15 = document.querySelector(".btn15")
const btn16 = document.querySelector(".btn16")
const btn17 = document.querySelector(".btn17")
const btn18 = document.querySelector(".btn18")
const btn19 = document.querySelector(".btn19")
const btn20 = document.querySelector(".btn20")
const btn21 = document.querySelector(".btn21")
const btn22 = document.querySelector(".btn22")
const btn23 = document.querySelector(".btn23")
const btn24 = document.querySelector(".btn24")
const carouselExample = document.getElementById("carouselExample")
console.log(carouselExample)

carouselExample.addEventListener('mouseenter', (event) => {
  btn1.style.opacity = 1
  btn2.style.opacity = 1
  btn3.style.opacity = 1
  btn4.style.opacity = 1
  btn5.style.opacity = 1
  btn6.style.opacity = 1
  btn7.style.opacity = 1
  btn8.style.opacity = 1
  btn9.style.opacity = 1
  btn10.style.opacity = 1
  btn11.style.opacity = 1
  btn12.style.opacity = 1
  btn13.style.opacity = 1
  btn14.style.opacity = 1
  btn15.style.opacity = 1
  btn16.style.opacity = 1
  btn17.style.opacity = 1
  btn18.style.opacity = 1
  btn19.style.opacity = 1
  btn20.style.opacity = 1
  btn21.style.opacity = 1
  btn22.style.opacity = 1
  btn23.style.opacity = 1
  btn24.style.opacity = 1
});
carouselExample.addEventListener('mouseleave', (event) => {
  btn3.style.opacity = 0
  btn2.style.opacity = 0
  btn1.style.opacity = 0
  btn4.style.opacity = 0
  btn5.style.opacity = 0
  btn6.style.opacity = 0
  btn7.style.opacity = 0
  btn8.style.opacity = 0
  btn9.style.opacity = 0
  btn10.style.opacity = 0
  btn11.style.opacity = 0
  btn12.style.opacity = 0
  btn13.style.opacity = 0
  btn14.style.opacity = 0
  btn15.style.opacity = 0
  btn16.style.opacity = 0
  btn17.style.opacity = 0
  btn18.style.opacity = 0
  btn19.style.opacity = 0
  btn20.style.opacity = 0
  btn21.style.opacity = 0
  btn22.style.opacity = 0
  btn23.style.opacity = 0
  btn24.style.opacity = 0
});


const headerattach = document.querySelector("#headerattach");
const headerimgsrc = document.querySelector("#headerimgsrc");

headerattach.addEventListener("change", (eo) => {
  const choosedfile = eo.target.files[0];
  const choosefileurl = URL.createObjectURL(choosedfile)
  console.log(choosefileurl)
  headerimgsrc.src = choosefileurl
});
