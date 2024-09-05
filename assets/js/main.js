(function($) {
  "use strict";
  
  // ---------------------------------- WOW INIT
  new WOW().init();


  // Responsive Menu
  var $offcanvasNav = $("#offcanvasNav a");
  $offcanvasNav.on("click", function () {
    var link = $(this);
    var closestUl = link.closest("ul");
    var activeLinks = closestUl.find(".active");
    var closestLi = link.closest("li");
    var linkStatus = closestLi.hasClass("active");
    var count = 0;

    closestUl.find("ul").slideUp(function () {
      if (++count == closestUl.find("ul").length)
        activeLinks.removeClass("active");
    });

    if (!linkStatus) {
      closestLi.children("ul").slideDown();
      closestLi.addClass("active");
    }
  });



  // Vertical Menu Js
  const $btnMenu = $(".vmenu-btn");
  const $vmenuContent = $(".vmenu-content");
  $btnMenu.on("click", function (event) {
    $vmenuContent.slideToggle(500);
  });

  $vmenuContent.each(function () {
    var $ul = $(this),
      $lis = $ul.find(".vmenu-item:gt(08)"),
      isExpanded = $ul.hasClass("expanded");
    $lis[isExpanded ? "show" : "hide"]();

    if ($lis.length > 0) {
      $ul.append(
        $(
          '<li class="expand">' +
            (isExpanded
              ? '<a class="minus" href="javascript:void(0);"><span>- Close Categories</span></a>'
              : '<a href="javascript:void(0);"><span>+ More Categories</span></a>') +
            "</li>"
        ).on("click", function (event) {
          var isExpanded = $ul.hasClass("expanded");
          event.preventDefault();
          $(this).html(
            isExpanded
              ? '<a href="javascript:void(0);"><span>+ More Categories</span></a>'
              : '<a class="minus" href="javascript:void(0);"><span>- Close Categories</span></a>'
          );
          $ul.toggleClass("expanded");
          $lis.toggle(300);
        })
      );
    }
  });


  // Swiper Hero Slider One JS
  var mainlSlider = new Swiper('.hero-slider-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 700,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  // Swiper Hero Slider Two JS
  var mainlSliderTwo = new Swiper('.hero-two-slider-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 700,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  // Swiper Hero Slider Three JS
  var mainlSliderThree = new Swiper('.hero-three-slider-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 700,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  // Swiper Hero Slider Four JS
  var mainlSliderThree = new Swiper('.hero-four-slider-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 700,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  // Swiper Hero Slider Five JS
  var mainlSliderThree = new Swiper('.hero-five-slider-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 700,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.hero-slide-five-pagination',
      clickable: 'true',
    }
  });

  // Swiper Hero Slider Six JS
  if($('.main-slider-container').length){
    var mainlSliderTwo = new Swiper('.main-slider-container', {
      modules: [SwiperGL],
      speed: 1000,
      effect: 'gl',
      gl: {
        shader: ['morph-x', 'morph-y', 'wave-x', 'ripple'],
      },
      slidesPerView : 1,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 0,
      pagination: {
        el: '.main-slider-pagination',
        clickable: 'true',
      }
    });
  }
  

  // Product Slider Js
  var productSlider = new Swiper('.product-slider-container', {
    autoplay: false,
    slidesPerView : 5,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView : 5,
      },
      992: {
        slidesPerView : 4,
      },
      768: {
        slidesPerView : 3,
      },
      576: {
        slidesPerView : 2,
      },
      480: {
        slidesPerView : 2,
      },
      0: {
        slidesPerView : 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style1 .swiper-button-next',
      prevEl: '.swiper-button-style1 .swiper-button-prev',
    },
  });

  // Product Slider Js
  var productSlider = new Swiper('.product-slider-two-container', {
    autoplay: false,
    slidesPerView : 4,
    spaceBetween: 30,
    loop: true,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView : 4,
      },
      992: {
        slidesPerView : 3,
      },
      768: {
        slidesPerView : 2,
      },
      576: {
        slidesPerView : 2,
      },
      480: {
        slidesPerView : 2,
      },
      0: {
        slidesPerView : 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style4 .swiper-button-next',
      prevEl: '.swiper-button-style4 .swiper-button-prev',
    },
  });

  // Product Slider Js
  var productSlider = new Swiper('.product-slider-three-container', {
    autoplay: false,
    slidesPerView : 3,
    spaceBetween: 0,
    loop: true,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView : 3,
      },
      768: {
        slidesPerView : 3,
      },
      576: {
        slidesPerView : 2,
      },
      480: {
        slidesPerView : 2,
      },
      0: {
        slidesPerView : 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style6 .swiper-button-next',
      prevEl: '.swiper-button-style6 .swiper-button-prev',
    },
  });

  // Product Slider Js
  var productSlider = new Swiper('.product-slider-four-container', {
    autoplay: false,
    slidesPerView : 4,
    spaceBetween: 30,
    loop: true,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView : 4,
      },
      992: {
        slidesPerView : 3,
      },
      768: {
        slidesPerView : 2,
      },
      576: {
        slidesPerView : 2,
      },
      480: {
        slidesPerView : 2,
      },
      0: {
        slidesPerView : 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style7 .swiper-button-next',
      prevEl: '.swiper-button-style7 .swiper-button-prev',
    },
  });

  // Product Tab Slider Js
  var productSlider = new Swiper('.product-home-slider-one', {
    autoplay: false,
    slidesPerView : 6,
    spaceBetween: 26,
    loop: true,
    speed: 500,
    breakpoints: {
      1400: {
        slidesPerView : 5,
      },
      1200: {
        slidesPerView : 4,
      },
      992: {
        slidesPerView : 3,
      },
      768: {
        slidesPerView : 3,
      },
      576: {
        slidesPerView : 2,
      },
      480: {
        slidesPerView : 2,
      },
      0: {
        slidesPerView : 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style10 .swiper-button-next',
      prevEl: '.swiper-button-style10 .swiper-button-prev',
    },
    pagination: {
      el: '.product-home-slider-one-pagination .swiper-pagination-style1',
      clickable: 'true',
    },
  });

  // Product Tab Slider Js
  var productSlider = new Swiper('.product-home-slider-two', {
    autoplay: false,
    slidesPerView : 6,
    spaceBetween: 26,
    loop: true,
    speed: 500,
    breakpoints: {
      1400: {
        slidesPerView : 5,
      },
      1200: {
        slidesPerView : 4,
      },
      992: {
        slidesPerView : 3,
      },
      768: {
        slidesPerView : 3,
      },
      576: {
        slidesPerView : 2,
      },
      480: {
        slidesPerView : 2,
      },
      0: {
        slidesPerView : 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style10 .swiper-button-next',
      prevEl: '.swiper-button-style10 .swiper-button-prev',
    },
    pagination: {
      el: '.product-home-slider-two-pagination .swiper-pagination-style1',
      clickable: 'true',
    },
  });

  // Product Tab Slider Js
  var productSlider = new Swiper('.product-home-slider-custom1', {
    autoplay: false,
    slidesPerView : 4,
    spaceBetween: 26,
    loop: true,
    speed: 500,
    breakpoints: {
      1400: {
        slidesPerView : 4,
      },
      1200: {
        slidesPerView : 4,
      },
      992: {
        slidesPerView : 3,
      },
      768: {
        slidesPerView : 3,
      },
      576: {
        slidesPerView : 2,
      },
      480: {
        slidesPerView : 2,
      },
      0: {
        slidesPerView : 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style10 .swiper-button-next',
      prevEl: '.swiper-button-style10 .swiper-button-prev',
    }
  });

  // Product Tab Slider Js
  var productSlider = new Swiper('.product-home-slider-custom2', {
    autoplay: false,
    slidesPerView : 4,
    spaceBetween: 26,
    loop: true,
    speed: 500,
    breakpoints: {
      1400: {
        slidesPerView : 4,
      },
      1200: {
        slidesPerView : 4,
      },
      992: {
        slidesPerView : 3,
      },
      768: {
        slidesPerView : 3,
      },
      576: {
        slidesPerView : 2,
      },
      480: {
        slidesPerView : 2,
      },
      0: {
        slidesPerView : 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style10 .swiper-button-next',
      prevEl: '.swiper-button-style10 .swiper-button-prev',
    }
  });

  // Product Categories Slider Js
  var productSlider = new Swiper('.product-categories-two-slider', {
    autoplay: false,
    slidesPerView : 5,
    slidesPerGroup: 2,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    breakpoints: {
      1600: {
        slidesPerView : 5,
      },
      1200: {
        slidesPerView : 4,
      },
      992: {
        slidesPerView : 4,
      },
      768: {
        slidesPerView : 3,
      },
      576: {
        slidesPerView : 3,
        spaceBetween: 10
      },
      480: {
        slidesPerView : 3,
      },
      0: {
        slidesPerView : 2,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style10 .swiper-button-next',
      prevEl: '.swiper-button-style10 .swiper-button-prev',
    }
  });
  
  // Gallery Slider Js
  var gallerySlider = new Swiper('.gallery-slider-container', {
    autoplay: false,
    loop: true,
    slidesPerView : 6,
    spaceBetween: 0,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView : 6,
      },
      768: {
        slidesPerView : 4,
      },
      576: {
        slidesPerView : 3,
      },
      480: {
        slidesPerView : 3,
      },
      0: {
        slidesPerView : 2,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style9 .swiper-button-next',
      prevEl: '.swiper-button-style9 .swiper-button-prev',
    },
  });

  // Product Details Slider Nav
  var productNav = new Swiper('.single-product-nav-slider', {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-prodnav .swiper-button-next',
      prevEl: '.swiper-button-prodnav .swiper-button-prev',
    },
  });

  // Product Details Slider Thumb
  var productThumb = new Swiper('.single-product-thumb-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-style11 .swiper-button-next',
      prevEl: '.swiper-button-style11 .swiper-button-prev',
    },
    thumbs: {
      swiper: productNav
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  // Testimonial Slider Js
  var testimonialSlider = new Swiper('.testimonial-slider-container', {
    autoplay: false,
    slidesPerView : 3,
    spaceBetween: 30,
    loop: true,
    speed: 500,
    breakpoints: {
      992: {
        slidesPerView : 3,
        spaceBetween: 45,
      },
      768: {
        slidesPerView : 2,
        spaceBetween: 45,
      },
      576: {
        slidesPerView : 2,
      },
      480: {
        slidesPerView : 1,
      },
      0: {
        slidesPerView : 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style2 .swiper-button-next',
      prevEl: '.swiper-button-style2 .swiper-button-prev',
    },
  });

  // Brand Logo Slider Js
  var brandLogoSlider = new Swiper('.brand-logo-slider-container', {
    autoplay: false,
    loop: true,
    slidesPerView : 5,
    spaceBetween: 0,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView : 5,
      },
      768: {
        slidesPerView : 4,
      },
      576: {
        slidesPerView : 3,
      },
      480: {
        slidesPerView : 3,
      },
      0: {
        slidesPerView : 2,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style8 .swiper-button-next',
      prevEl: '.swiper-button-style8 .swiper-button-prev',
    },
  });

  // Brand Logo Slider Js
  var brandLogoSlider = new Swiper('.brand-logo-two-slider-container', {
    autoplay: false,
    loop: true,
    slidesPerView : 7,
    spaceBetween: 0,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView : 7,
      },
      768: {
        slidesPerView : 5,
      },
      576: {
        slidesPerView : 3,
      },
      480: {
        slidesPerView : 3,
      },
      0: {
        slidesPerView : 2,
      },
    },
    navigation: {
      nextEl: '.swiper-button-style8 .swiper-button-next',
      prevEl: '.swiper-button-style8 .swiper-button-prev',
    },
  });

  // Countdown Js
  $('[data-countdown]').each(function () {
    var $this = $(this),
    $finalDate = $this.data('countdown');
    $this.countdown($finalDate, function (event) {
      $this.html(event.strftime('<div class="count"><span class="amount" title="Ημέρες">%-D</span><span class="period">Ημέρες</span></div><div class="count"><span class="amount" title="Ώρες">%-H</span><span class="period">Ώρες</span></div><div class="count"><span class="amount" title="Λεπτά">%-M</span><span class="period">Λεπτά</span></div><div class="count"><span class="amount" title="Δευτερόλεπτα">%-S</span><span class="period">Δευτερόλεπτα</span></div>'));
    });
  });

  // Nice Select JS
  $('select').niceSelect();

  // Product Quantity JS
  var proQty = $(".pro-qty");
  proQty.append('<div class= "dec qty-btn">-</div>');
  proQty.append('<div class="inc qty-btn">+</div>');
  $('.qty-btn').on('click', function (e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find('input').val(newVal);
  });

  // Scroll Top Hide Show
  var varWindow = $(window);
  varWindow.on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  //Scroll To Top Animate
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  // Sticky Header

  $(window).scroll(function () {
			if ($(window).scrollTop() > 200) {
        if (($('.wrapper').height()) > ($(window).height() + 200)){
          $('.header-wrapper').addClass('sticky-header');  
        }
			} else {
        $('.header-wrapper').removeClass('sticky-header');
			}
    });


  // Product filters mobile toggler
  $('.mob-fliter-btn').on('click', function(){
    $('.product-area .sidebar-area ').addClass('active');
  });
  $('.product-area .sidebar-area .close-btn').on('click', function(){
    $('.product-area .sidebar-area').removeClass('active');
  });
  $('.product-area .sidebar-area').on("click", function (e) {
      e.target === this && $('.product-area .sidebar-area').removeClass('active');
  });

  

  
  // Close sidebar navigation submenus
  function closeSidebarSubmenus (){
    $('.offcanvas-menu ul ul').hide();
    $('.offcanvas-menu ul li').removeClass('active');
  }

  $('.aside-side-menu-wrapper').on('hide.bs.offcanvas', function() {
    closeSidebarSubmenus();
  });


  

  // Hide Preloader 
  $( document ).ready(function() {


    $('.preloader').hide();
  });
})(window.jQuery);