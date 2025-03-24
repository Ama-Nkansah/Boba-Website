$(document).ready(function () {
  $("img.image-class").on("mouseover touchmove", function () {
    console.log("Event triggered"); //debugging statement

    const hrElement = $(this).siblings("div").find("hr");

    hrElement.removeClass("hidden").addClass("flex");
  });
});



