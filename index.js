$(document).ready(function () {
  $("img.image-class").on("mousemove touchmove", function () {
    $("hr").removeClass("hidden").addClass("flex");
  });
});
