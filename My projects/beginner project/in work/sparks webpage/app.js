
$(document).ready(function(){

  //activare buton hero

  $(".btn-form").click(function(){
    $("html ,  body").animate({
    scrollTop : $("#form").offset().top - 300
    }, 500)
  })

  /* On/OF mobile menu*/ 
  $("#menu-btn , #close-btn").on("click" , function(){
    $("#mobile-menu").toggle(function  (){
      $("#mobile-menu").animate({top: "0px"},  "slow")
    });
  });
  $(".mobile-lk").on("click" , function (){
    $("#mobile-menu").toggle(function  (){
      $("#mobile-menu").animate({top: "0px" } , "slow")
    });
  })

  

  /* Animatie fade form bottom */ 
  

  /* modificarea vizibilitatii si pozitiei fiecarui element animat */
  $(".about_animation_1 , .about_animation_2  , .about_animation_3  , .about_animation_4  ").css({
    "opacity" : "0" ,
    "bottom" : "-150px"
  });

  /* functia animatiei */
  
  $(window).scroll(function(){

    /* am stocat valaorea pozitiei fiecarui element de parte superioara a paginii*/
    var elementTop1 = $(".about_animation_1").offset().top;
    var elementTop2 = $(".about_animation_2").offset().top;
    var elementTop3 = $(".about_animation_3").offset().top;
    var elementTop4 = $(".about_animation_4").offset().top;
    /*am luat inaltimea paginii*/
    var windowHeight = $(window).height();
    /*am luat valoarea cu care a fost scrolata pagina*/
    var scrollValue = $(this).scrollTop();

    /*am setat conditia care zice ca daca valoarea cu care sa scrolat este mai mare de cat pozitia elementului fata de top - inaltimea paginii -100 sa se faca urmatoarea animatie : */
    if(scrollValue > elementTop1 - windowHeight - 100){
    /* am selectat elementul , am adaugat animatia si am setat animatia la care am adaugat si un timp de desfasurare */
      $(".about_animation_1").animate({
        opacity: 1 , 
        bottom : 0 
      } , 1000)
    }
    
    if(scrollValue > elementTop2 - windowHeight -100 ){
      
      /* diferenta fata de conditia de sus este ca am adaugat un delay ca in cazul in care
      elementul al doilea este la acceasi pozitie ca primul element sa aiba un delay de
      500ms si in cazul in care pozitiile difera sa fie exat aceeasi animatie . 

      Am folosit opratorul " === " prin care am coparat valorile celor doua elemente fata de top
      iar mai apoi operatorul " ? " care compara si am adaugat doua conditii , 
      daca " ? " returneaza fals se va face un delay de 500 si daca este adevarat nu va fi delay 
      cele doua conditii separanduse prin operatorul " : " , mai exact adevarat : fals */

      $(".about_animation_2").delay(elementTop2 === elementTop1 ? 250 : 0).animate({
        opacity: 1 , 
        bottom : 0 
      } , 1000)
    } 

    if(scrollValue > elementTop3 - windowHeight -100 ){
      $(".about_animation_3").delay(elementTop3 === elementTop1 ? 750 : 0).animate({
        opacity: 1 , 
        bottom : 0 
      } , 1000)
    }

    if(scrollValue > elementTop4 - windowHeight- 100  ){
      $(".about_animation_4").delay(elementTop4 === elementTop1 ? 1000 : 0).animate({
        opacity: 1 , 
        bottom : 0 
      } , 1000)
    }
    /* animatie pentru NAV-BAR */ 
     

  
  })


  /* animatie pentru cardul de la about cu text */

  $("#about_text_box").css({
    "height ": "0" , 
    "opacity" : "0 "
  })

  $(window).scroll(function(){
    var textBoxTop = $("#about_text_box").offset().top;
    /*am luat inaltimea paginii*/
    var windowHeight = $(window).height();
    /*am luat valoarea cu care a fost scrolata pagina*/
    var scrollValue = $(this).scrollTop();

    if(scrollValue > textBoxTop - windowHeight -100){
      $("#about_text_box").animate({
        opacity : 1 ,  
        height : "55vh"
      } ,  1000)
    }
  })


  // animatie pentru what we offer section

  $("#about_2_box").css({
    "left" : "-150px" , 
    "opacity" : "0"
  })

  $("#about_2_bg").css({
    "right" : "-150px" , 
    "opacity" : "0"
  })

  $(window).scroll(function(){
    var about2Bg = $("#about_2_bg").offset().top;
    var about2Box = $("#about_2_box").offset().top;
    var windowHeight = $(window).height();
    var scrollValue = $(this).scrollTop();

    if(scrollValue > about2Box - windowHeight + 100){
      $("#about_2_box").animate({
        opacity : 1 , 
        left : 0
      } , 1500)
    }
    if(scrollValue > about2Bg - windowHeight +200){
      $("#about_2_bg").animate({
        opacity : 1 , 
        right : 0
      } , 1500)
    }
  })


  // animatie pentru ceo team section

  $("#ceo_team_box").css({
    "right" : "-150px" , 
    "opacity" : "0"
  })

  $("#ceo_team_bg").css({
    "left": "-150px" , 
    "opacity" : "0"
  })

  $("#ceo_name").css({
    "left" : "-150px" , 
    "opacity" : "0"
  })

  $(window).scroll(function(){
    var ceoName = $("#ceo_name").offset().top;
    var ceoTeamBox = $("#ceo_team_box").offset().top;
    var ceoTeamBg = $("#ceo_team_bg").offset().top;
    var windowHeight = $(window).height();
    var scrollValue = $(this).scrollTop();
    
    if(scrollValue > ceoName - windowHeight  - 100){
      $("#ceo_name").animate({
        opacity : 1 , 
        left : 0
      } , 1500)
    }
    if(scrollValue > ceoTeamBox - windowHeight + 100){
      $("#ceo_team_box").animate({
        opacity : 1 , 
        right : 0
      } , 1500)
    }
    if(scrollValue > ceoTeamBg - windowHeight + 200){
      $("#ceo_team_bg").animate({
        opacity : 1 , 
        left : 0
      }, 1500)
    }
  })


    // animatie pentru employes


  $("#card_management_1 , #card_management_2 , #card_management_3 , #card_management_4 , #card_management_5 , #card_management_6 ").css({
    "top" : "+200px" ,
    "opacity": "0"
  })
  $("#line_1 , #line_2").css({
    "opacity" : "0" ,
    "left" : "-150px"
    
  })

  $("#line_3 , #line_4").css({
    "opacity" : "0" ,
    "right" : "-150px"
    
  })

  $("#line_management_left").css({
    "opacity" :  "0" 
  })

  $("#line_management_right").css({
    "opacity" :  "0" ,
  })

  $(window).scroll(function(){
    var cardManagement1  = $("#card_management_1").offset().top;
    var cardManagement2 = $("#card_management_2").offset().top;
    var cardManagement3 = $("#card_management_3").offset().top;
    var cardManagement4 = $("#card_management_4").offset().top;
    var cardManagement5 = $("#card_management_5").offset().top;
    var cardManagement6 = $("#card_management_6").offset().top;
    var windowHeight = $(window).height();
    var scrollValue = $(this).scrollTop();

    if(scrollValue > cardManagement1 - windowHeight +100){
      $("#card_management_1").animate({
        opacity: 1,
        top : 0
      }, 1500 , function(){
        $("#line_1").animate({
          opacity : 1 , 
          left : 0
        } , 1500)
      })
    }

    if(scrollValue > cardManagement2 - windowHeight + 100){
      $("#card_management_2").delay(cardManagement1 === cardManagement2 ? 450 : 0).animate({
        opacity : 1,
        top : 0
      } , 1500 , function(){
        $("#line_2").animate({
          opacity : 1 , 
          left : 0
        } , 1500)
      })
    }

    if(scrollValue > cardManagement3 - windowHeight + 100){
      $("#card_management_3").delay(cardManagement2 === cardManagement3 ? 450 : 0).animate({
        opacity : 1,
        top : 0
      } , 1500 , function(){
        $("#line_management_right").animate({
          opacity : 1 , 
          left : 0
        } , 1500)
      })
    }

    if(scrollValue > cardManagement6 - windowHeight + 100){
      $("#card_management_6").delay(cardManagement3 === cardManagement6  ? 450 : 0).animate({
        opacity : 1,
        top : 0
      } , 1500 , function(){
        $("#line_3").animate({
          opacity : 1 , 
          right : 0
        } , 1500)
      })
    }

    if(scrollValue > cardManagement5 - windowHeight + 100){
      $("#card_management_5").delay(cardManagement6 === cardManagement5 ? 450 : 0).animate({
        opacity : 1,
        top : 0
      } , 1500 , function(){
        $("#line_4").animate({
          opacity : 1 , 
          right : 0
        } , 1500)
      })
    }

    if(scrollValue > cardManagement4 - windowHeight + 100){
      $("#card_management_4").delay(cardManagement5 === cardManagement4 ? 450 : 0).animate({
        opacity : 1,
        top : 0
      } , 1500 , function(){
        $("#line_management_left").animate({
          opacity : 1 , 
          right : 0
        } , 1500)
      })
    }

  })

  $("#review_text").css({
    "position" : "relative",
    "left" : "-150px",
    "opacity" : "0"
  })

  $(window).scroll(function(){
    var textReview = $("#review_text").offset().top;
    var windowHeight = $(window).height();
    var scrollValue = $(this).scrollTop();

    if(scrollValue > textReview -windowHeight + 100){
      $("#review_text").animate({
        left: 0,
        opacity: 1
      } , 1500)
    }
  })


  $("#text_form").css({
    "position" : "relative",
    "left" : "-150px",
    "opacity" : "0"
  })

  $(window).scroll(function(){
    var textReview = $("#text_form").offset().top;
    var windowHeight = $(window).height();
    var scrollValue = $(this).scrollTop();

    if(scrollValue > textReview -windowHeight + 100){
      $("#text_form").animate({
        left: 0,
        opacity: 1
      } , 1500)
    }
  })

  // animatie preturi

  $(".card").css({
    "position" : "relative" ,
    "top" : "+200px" ,
    "opacity" : "0" ,
    "overflow" : "hiden"
  })

  $(window).scroll(function(){
    var windowHeight = $(window).height();
    var scrollValue = $(this).scrollTop();
    var cards = $(".card") ; 

    cards.each(function(i){
      var card = $(this);
      var cardTop = card.offset().top;

      if(cardTop < scrollValue + windowHeight - 100){
        (function(index){
          setTimeout(function(){
            cards.eq(index).animate({
              top : 0 ,
              opacity : 1
            }, 1000)
          }, index * 200)
        })(i);
      }
    })

  }) 

})




