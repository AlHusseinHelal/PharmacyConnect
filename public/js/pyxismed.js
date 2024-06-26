







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


