// var divs = $('.nav_bar');
// $(window).on("scroll", function () {
//    if($(window).scrollTop()<10){
//          divs.fadeIn("fast");
//    } else {
//          divs.fadeOut("fast");
//    }
//   // Aquí deberás escribir la lógica que modificará la barra
  
// });

var divs = $('.nav_bar');
$(window).scroll(function(){
   var percent = $(document).scrollTop() / ($(document).height() - $(window).height());
   divs.css('opacity', 1 - percent);
});