let username
const getUsername = () => {
  return username;
}

const setUsername = 

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
