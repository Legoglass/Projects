window.addEventListener("load" ,  function(){
  
  
 /* let menuBtn = document.getElementById("menu-btn");
  let mobileMenu = document.getElementById("mobile-menu");
  let closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click" , function(){

    mobileMenu.style.display = "block";

  });

  closeBtn.addEventListener("click" , function(){

    mobileMenu.style.display = "none";

  });

  let mobileItems = this.document.getElementsByClassName("mobile-menu-item");
  for (let i = 0; i < mobileItems.length; i++) {
    mobileItems[i].addEventListener("click" , function(){

      mobileMenu.style.display = "none";

    });
    
  };*/

  $("#menu-btn , #close-btn").click(function(){
    $("#mobile-menu").toggle();
  });

  //for header

  /*let heroSection = document.getElementById("hero-section");
  let heightHeroSection = heroSection.clientHeight;

  document.addEventListener("scroll" , function () {
    if (document.documentElement.scrollTop > heightHeroSection) {
      
      if(!header.classList.contains("solid-header")){
        header.classList.add("solid-header");
      }
    } else {
      if(header.classList.contains("solid-header")){
        header.classList.remove("solid-header");
      }
    }
  })*/

  $(document).scroll(function () {
    let header = $("#header"); 

    if($(this).scrollTop() > $("#hero-section").height()){
      if(!header.hasClass("solid-header")){
        header.addClass("solid-header");
      }
    } else{
      if(!header.hasClass("solid-header")){
        header.removeClass("solid-header");
      }
    }
  })

});