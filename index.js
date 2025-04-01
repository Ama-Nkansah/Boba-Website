$(document).ready(function () {
  $("img.image-class").on("click", function () {
    console.log("Event triggered"); //debugging statement
    
    const hrElement = $(this).siblings("div").find("hr");
    const image_animation = $(this);

   //reset all elements
   $("hr").addClass("hidden").removeClass("flex"); 
   $("img.image-class").removeClass("animate-zoom");  

    //triggers event for the specific img
    hrElement.removeClass("hidden").addClass("flex");
    image_animation.addClass("animate-zoom");
 
    //what to do after animation
    setTimeout(()=>{
      image_animation.removeClass("animate-zoom");
    },900); //time must match css time

  });
});
