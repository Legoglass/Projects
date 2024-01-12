$(document).ready(function () {
  //btn hero

  $(".btn-form").click(function () {
    $("html , body").animate(
      {
        scrollTop: $("#form").offset().top - 300,
      },
      500
    );
  });

  //on/of mobile menu
  $("#menu-btn , #close-btn").on("click", function () {
    $("#mobile-menu").toggle(function () {
      $("#mobile-menu").animate({ top: "0px" }, "slow");
    });
  });
  $(".mobile-lk").on("click", function () {
    $("#mobile-menu").toggle(function () {
      $("#mobile-menu").animate({ top: "0px" }, "slow");
    });
  });

  //animatie fade from bottom

  $(
    ".about_animation_1 , .about_animation_2  , .about_animation_3  , .about_animation_4  "
  ).css({
    opacity: "0",
    bottom: "-150px",
  });
  $("#about_text_box").css({
    "height ": "0",
    opacity: "0 ",
  });
  $("#about_2_box").css({
    left: "-150px",
    opacity: "0",
  });

  $("#about_2_bg").css({
    right: "-150px",
    opacity: "0",
  });
  $("#ceo_team_box").css({
    right: "-150px",
    opacity: "0",
  });

  $("#ceo_team_bg").css({
    left: "-150px",
    opacity: "0",
  });

  $("#ceo_name").css({
    left: "-150px",
    opacity: "0",
  });

  $(
    "#card_management_1 , #card_management_2 , #card_management_3 , #card_management_4 , #card_management_5 , #card_management_6 "
  ).css({
    top: "+200px",
    opacity: "0",
  });
  $("#line_1 , #line_2").css({
    opacity: "0",
    left: "-150px",
  });

  $("#line_3 , #line_4").css({
    opacity: "0",
    right: "-150px",
  });

  $("#line_management_left").css({
    opacity: "0",
  });

  $("#line_management_right").css({
    opacity: "0",
  });
  $("#review_text").css({
    position: "relative",
    left: "-150px",
    opacity: "0",
  });
  $("#text_form").css({
    position: "relative",
    left: "-150px",
    opacity: "0",
  });
  $(".card").css({
    position: "relative",
    top: "+200px",
    opacity: "0",
    overflow: "hiden",
  });

  function animateElement(
    element,
    animationProperty,
    threshold,
    offset,
    finalOffset,
    duration
  ) {
    var elementOffset = element.offset().top + offset;
    let windowHeight = $(window).height();
    let scrollVallue = $(this).scrollTop();

    if (scrollVallue > elementOffset - windowHeight - threshold) {
      var animation = {};
      animation["opacity"] = 1;
      animation[animationProperty] = finalOffset;

      element.animate(animation, duration);
    }
  }

  $(window).scroll(function () {
    animateElement($(".about_animation_1"), "bottom", 1000, 0, 0, 1000);
    setTimeout(function () {
      animateElement($(".about_animation_2"), "bottom", 100, 0, 0, 1000);
    }, 500);
    setTimeout(function () {
      animateElement($(".about_animation_3"), "bottom", 100, 0, 0, 1000);
    }, 750);
    setTimeout(function () {
      animateElement($(".about_animation_4"), "bottom", 100, 0, 0, 1000);
    }, 1000);
    animateElement($("#about_text_box"), "height", 100, 200, "55vh", 1000);
    animateElement($("#about_2_box"), "left", 100, 200, 0, 1000);
    animateElement($("#about_2_bg"), "right", 100, 500, 0, 1000);
    animateElement($("#ceo_team_box"), "right", 100, 500, 0, 1000);
    animateElement($("#ceo_team_bg"), "left", 100, 500, 0, 1000);
    animateElement($("#ceo_name"), "left", 100, 200, 0, 1000);
    animateElement($("#review_text"), "left", 100, 200, 0, 1000);
    animateElement($("#text_form"), "left", 100, 200, 0, 1000);

    var cards = $(".card");
    let windowHeight = $(window).height();
    let scrollValue = $(this).scrollTop();

    cards.each(function (i) {
      var card = $(this);
      var cardTop = card.offset().top;

      if (cardTop < scrollValue + windowHeight - 100) {
        (function (index) {
          setTimeout(function () {
            cards.eq(index).animate(
              {
                top: 0,
                opacity: 1,
              },
              1000
            );
          }, index * 200);
        })(i);
      }
    });
    var cardManagement1 = $("#card_management_1").offset().top;
    var cardManagement2 = $("#card_management_2").offset().top;
    var cardManagement3 = $("#card_management_3").offset().top;
    var cardManagement4 = $("#card_management_4").offset().top;
    var cardManagement5 = $("#card_management_5").offset().top;
    var cardManagement6 = $("#card_management_6").offset().top;

    if (scrollValue > cardManagement1 - windowHeight + 100) {
      $("#card_management_1").animate(
        {
          opacity: 1,
          top: 0,
        },
        1500,
        function () {
          $("#line_1").animate(
            {
              opacity: 1,
              left: 0,
            },
            1500
          );
        }
      );
    }

    if (scrollValue > cardManagement2 - windowHeight + 100) {
      $("#card_management_2")
        .delay(cardManagement1 === cardManagement2 ? 450 : 0)
        .animate(
          {
            opacity: 1,
            top: 0,
          },
          1500,
          function () {
            $("#line_2").animate(
              {
                opacity: 1,
                left: 0,
              },
              1500
            );
          }
        );
    }

    if (scrollValue > cardManagement3 - windowHeight + 100) {
      $("#card_management_3")
        .delay(cardManagement2 === cardManagement3 ? 450 : 0)
        .animate(
          {
            opacity: 1,
            top: 0,
          },
          1500,
          function () {
            $("#line_management_right").animate(
              {
                opacity: 1,
                left: 0,
              },
              1500
            );
          }
        );
    }

    if (scrollValue > cardManagement6 - windowHeight + 100) {
      $("#card_management_6")
        .delay(cardManagement3 === cardManagement6 ? 450 : 0)
        .animate(
          {
            opacity: 1,
            top: 0,
          },
          1500,
          function () {
            $("#line_3").animate(
              {
                opacity: 1,
                right: 0,
              },
              1500
            );
          }
        );
    }

    if (scrollValue > cardManagement5 - windowHeight + 100) {
      $("#card_management_5")
        .delay(cardManagement6 === cardManagement5 ? 450 : 0)
        .animate(
          {
            opacity: 1,
            top: 0,
          },
          1500,
          function () {
            $("#line_4").animate(
              {
                opacity: 1,
                right: 0,
              },
              1500
            );
          }
        );
    }

    if (scrollValue > cardManagement4 - windowHeight + 100) {
      $("#card_management_4")
        .delay(cardManagement5 === cardManagement4 ? 450 : 0)
        .animate(
          {
            opacity: 1,
            top: 0,
          },
          1500,
          function () {
            $("#line_management_left").animate(
              {
                opacity: 1,
                right: 0,
              },
              1500
            );
          }
        );
    }
  });
});
