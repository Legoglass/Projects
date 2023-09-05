/* On/OF mobile menu*/ 

$(document).ready(function(){
  $("#menu-btn , #close-btn").on("click" , function(){
      $("#mobile-menu").toggle();
    });
})