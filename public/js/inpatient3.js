/* global bootstrap: false */
(() => {
  "use strict";
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

$(document).ready(function () {
  /*--------------------------------------------------------------
# GEAR CONTROL
--------------------------------------------------------------*/
  $("#gear").on("click", function () {
    $("#sun").toggleClass("appear50");
    $("#moon").toggleClass("appear100");
  });

  /*--------------------------------------------------------------
# ARROW CONTROL
--------------------------------------------------------------*/
  if (localStorage.getItem("sidebarlarge") === "yes") {
    $(".sidelist").removeClass("small-sidebar");
    $("#arrowmove2").css("display", "none");
    $("#arrowmove1").css("display", "block");
  } else {
    $(".sidelist").addClass("small-sidebar");
    $("#arrowmove1").css("display", "none");
    $("#arrowmove2").css("display", "block");
  }

  $("#arrowmove1").on("click", function () {
    $(".sidelist").addClass("small-sidebar");
    $(this).css("display", "none");
    $("#arrowmove2").css("display", "block");
    localStorage.setItem("sidebarlarge", "no");
  });

  $("#arrowmove2").on("click", function () {
    $(".sidelist").removeClass("small-sidebar");
    $(this).css("display", "none");
    $("#arrowmove1").css("display", "block");
    localStorage.setItem("sidebarlarge", "yes");
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
  });

  $("#tbody").on("click", function () {
    const dt = new Date();
    const now = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    const target = $(event.target).parent().siblings().find(".time");

    if ($(event.target).prop("checked") == true) {
      target.attr("value", now);
    } else {
      target.attr("value", "");
    }
  });

  $("#tbody").on("change", function () {
    const dt = new Date();
    const now = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    const target = $(event.target).parent().siblings().find(".time2");

    if ($(event.target).hasClass("comment") == true) {
      target.attr("value", now);
    }
  });
}); // END OF jQuary

// INPUTFILE.addEventListener("change", (eo) => {
//   // IMGELEMENT.src = URL.createObjectURL(eo.target.files[0])
//   console.log(URL.createObjectURL(eo.target.files[0]))
//  })

const attach = document.querySelector("#attach");
const imgsrc = document.querySelector("#imgsrc");

attach.addEventListener("change", (eo) => {
  const choosedfile = eo.target.files[0];
  const choosefileurl = URL.createObjectURL(choosedfile)
  console.log(choosefileurl)
  imgsrc.src = choosefileurl
});

