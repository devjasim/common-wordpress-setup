(function ($) {
  ("use strict");

  $(document).ready(function () {
    var docEl = $(document),
      pageWrapper = $(".salim__wrapper"),
      headerWrapEl = $(".header__container");
    // linkScroll = $('.scroll');

    docEl.on("scroll", function () {
      if (docEl.scrollTop() > 20) {
        pageWrapper.addClass("nav__style");
        headerWrapEl.addClass("fixed__to__top");
        // navEl.addClass('fixed-to-top');
      } else {
        pageWrapper.removeClass("nav__style");
        headerWrapEl.removeClass("fixed__to__top");
        // navEl.removeClass('fixed-to-top');
      }
    });

    // linkScroll.click(function(e){
    //     e.preventDefault();
    //     $('body, html').animate({
    //        scrollTop: $(this.hash).offset().top
    //     }, 500);
    //  });
  });

  // for humberger menu
  const navSlide = () => {
    const burger = document.querySelector(".mobile__menu");
    const nav = document.querySelector(".header__container");

    // for top add class
    const pageW = document.querySelector(".salim__wrapper");

    //toggle nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      console.log("clicked");

      // burger animation
      burger.classList.toggle("toggle");

      pageW.classList.toggle("burger");
    });
  };
  navSlide();

  // Showcase Effect

  $(document).ready(function () {
    var caseEffect = $(".case-effect");

    $(caseEffect).hover(function () {
      var hoverEle = $(this).parents(".hr-showcase");
      $(hoverEle).toggleClass("active");
    });
  });

  $(document).ready(function () {
    $(".client__carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      nav: true,
      dots: false,
      autoPlay: true,
      items: 2,
      navText: [
        "<img src='/wp-content/themes/salim-and-brothers/assets/images/left_arrow.png' class='left'/>",
        "<img src='/wp-content/themes/salim-and-brothers/assets/images/right_arrow.png' class='right'/>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },

        1000: {
          items: 2,
        },
      },
    });
  });

  $(document).ready(function () {
    $("#blog-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      nav: true,
      dots: false,
      items: 4,
      navText: [
        "<img src='/wp-content/themes/planethr/assets/images/left_arrow.png' class='left'/>",
        "<img src='/wp-content/themes/planethr/assets/images/right_arrow.png' class='right'/>",
      ],

      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  });

  // // Magnify Image
  // /*Size is  set in pixels... supports being written as: '250px' */
  // var magnifierSize = 250;

  // /*How many times magnification of image on page.*/
  // var magnification = 3;

  // function magnifier() {
  //   this.magnifyImg = function (ptr, magnification, magnifierSize) {
  //     var $pointer;
  //     if (typeof ptr == "string") {
  //       $pointer = $(ptr);
  //     } else if (typeof ptr == "object") {
  //       $pointer = ptr;
  //     }

  //     if (!$pointer.is("img")) {
  //       alert("Object must be image.");
  //       return false;
  //     }

  //     magnification = +magnification;

  //     $pointer.hover(
  //       function () {
  //         $(this).css("cursor", "none");
  //         $(".magnify").show();
  //         //Setting some variables for later use
  //         var width = $(this).width();
  //         var height = $(this).height();
  //         var src = $(this).attr("src");
  //         var imagePos = $(this).offset();
  //         var image = $(this);

  //         if (magnifierSize == undefined) {
  //           magnifierSize = "150px";
  //         }

  //         $(".magnify").css({
  //           "background-size":
  //             width * magnification + "px " + height * magnification + "px",
  //           "background-image": 'url("' + src + '")',
  //           width: magnifierSize,
  //           height: magnifierSize,
  //         });

  //         //Setting a few more...
  //         var magnifyOffset = +($(".magnify").width() / 2);
  //         var rightSide = +(imagePos.left + $(this).width());
  //         var bottomSide = +(imagePos.top + $(this).height());

  //         $(document).mousemove(function (e) {
  //           if (
  //             e.pageX < +(imagePos.left - magnifyOffset / 6) ||
  //             e.pageX > +(rightSide + magnifyOffset / 6) ||
  //             e.pageY < +(imagePos.top - magnifyOffset / 6) ||
  //             e.pageY > +(bottomSide + magnifyOffset / 6)
  //           ) {
  //             $(".magnify").hide();
  //             $(document).unbind("mousemove");
  //           }
  //           var backgroundPos =
  //             "" -
  //             ((e.pageX - imagePos.left) * magnification - magnifyOffset) +
  //             "px " +
  //             -((e.pageY - imagePos.top) * magnification - magnifyOffset) +
  //             "px";
  //           $(".magnify").css({
  //             left: e.pageX - magnifyOffset,
  //             top: e.pageY - magnifyOffset,
  //             "background-position": backgroundPos,
  //           });
  //         });
  //       },
  //       function () {}
  //     );
  //   };

  //   this.init = function () {
  //     $("body").prepend('<div class="magnify"></div>');
  //   };

  //   return this.init();
  // }

  // var magnify = new magnifier();
  // magnify.magnifyImg(".magnifiedImg", magnification, magnifierSize);

  // // Magnify Image

  $(document).ready(function () {
    var has__menu = $(".has__menu");

    $(has__menu).click(function () {
      $(this).toggleClass("open__menu");
    });
  });

  // For smooth scroll
  $(function () {
    $("a.scroll__to[href*='#']").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top - 75 },
        500,
        "linear"
      );
    });
  });

  // JavaScript for label effects only
  $(window).load(function () {
    $(".input__effect input, .input__effect textarea").val("");
  });

  $(function () {
    $(".common__form .effect-16").focus(function () {
      console.log("working focus");
      $(this).parents(".input__effect").first().addClass("now__style");
    });
    $(".common__form .effect-16").focusout(function () {
      console.log("working focus out");
      $(this).parents(".input__effect").first().removeClass("now__style");
      console.log($(this).val());
      if ($(this).val() != "") {
        $(this)
          .parents()
          .parents(".input__effect")
          .first()
          .addClass("set__top");
      } else {
        $(this)
          .parents()
          .parents(".input__effect")
          .first()
          .removeClass("set__top");
      }
    });
  });
})(jQuery);

// Gsap Page Animation
function animateFrom(elem, direction) {
  direction = direction | 1;

  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("ani__left")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("ani__right")) {
    x = 100;
    y = 0;
  }
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
});

// Gsap Page Animation

// var current = 0,
//   slides = document.querySelectorAll(".single-image.one img");

// setInterval(function () {
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//   }
//   current = current != slides.length - 1 ? current + 1 : 0;
//   slides[current].style.opacity = 1;
// }, 8000);

// var current_two = 0,
//   slides_two = document.querySelectorAll(".single-image.two img");

// setInterval(function () {
//   for (var i = 0; i < slides_two.length; i++) {
//     slides_two[i].style.opacity = 0;
//   }
//   current_two = current_two != slides_two.length - 1 ? current_two + 1 : 0;
//   slides_two[current_two].style.opacity = 1;
// }, 8000);
