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
# Documentry
--------------------------------------------------------------*/
$(".videobtn1").on("click", () => {
  $(".video1").css("transition", "all 2s");
  $(".video1").toggleClass("dnone");
  $(".card1").toggleClass("cardheight");

});
$(".videobtn2").on("click", () => {
  $(".video2").css("transition", "all 2s");
  $(".video2").toggleClass("dnone");
  $(".card2").toggleClass("cardheight");

});
$(".videobtn3").on("click", () => {
  $(".video3").css("transition", "all 2s");
  $(".video3").toggleClass("dnone");
  $(".card3").toggleClass("cardheight");

});
$(".videobtn4").on("click", () => {
  $(".video4").css("transition", "all 2s");
  $(".video4").toggleClass("dnone");
  $(".card4").toggleClass("cardheight");
});
  
}); // END OF jQuary


