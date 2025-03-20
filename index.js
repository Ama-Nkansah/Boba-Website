$(document).ready(function () {
  $("img.image-class").on("mousemove touchmove", function () {
    $(this).nextAll("hr").first().removeClass("hidden").addClass("flex");
  });
});



