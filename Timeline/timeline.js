$(document).ready(() => {
  $(".videobtn1").on("click", () => {
    $(".video1").css("transition", "all 2s");
    $(".video1").toggleClass("dnone");
  });
  $(".videobtn2").on("click", () => {
    $(".video2").css("transition", "all 2s");
    $(".video2").toggleClass("dnone");
  });
  $(".videobtn3").on("click", () => {
    $(".video3").css("transition", "all 2s");
    $(".video3").toggleClass("dnone");
  });
});
