window.onload = () => {
  let hamburger = document.getElementById('hamburger');
  let menu = document.getElementById('nav-small');
  let close = document.getElementById('close-menu');
  let opacity = document.getElementById('opacity');
  let subMenu = document.getElementById('show-submenu');
  let sb = document.getElementById('product-nav');
  let open = false, submenu = false;
  hamburger.onclick = () => {
    if (!open) {
      menu.className = '';
      menu.classList.add('animate__animated', 'animate__slideInRight');
      open = true;
      opacity.style.opacity = '0.5';
      opacity.style.zIndex = '88888';
    }
  }
  close.onclick = () => {
    if (open) {
      menu.className = '';
      menu.classList.add('animate__animated', 'animate__slideOutRight');
      open = false;
      opacity.style.opacity = '0';
      opacity.style.zIndex = '-99999999';
    }
  }
  subMenu.onmouseenter = () => {
    sb.style.visibility = 'visible';
    sb.style.display = 'block';
  }

  subMenu.onmouseleave = () => {
    sb.style.display = 'none';
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    var hT = $('#circle2').offset().top,
      hH = $('#circle2').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    // console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
      $('#circle2').addClass('scrolled');
    } else {
      $('#circle2').removeClass('scrolled');

    }
  });
});

$(document).ready(function ($) {
  // $(window).scroll(function () {
  //   var hT = $('#circle1').offset().top,
  //     hH = $('#circle1').outerHeight(),
  //     wH = $(window).height(),
  //     wS = $(this).scrollTop();
  //   // console.log((hT - wH), wS);
  //   if (wS > (hT + hH - wH)) {
  //     $('#circle').addClass('scrolled');
  //   } else {
  //     $('#circle').removeClass('scrolled');

  //   }
  // });
  $('.internet-quality').mouseenter(function () {
    $('.internet-quality rect').attr('transform', 'rotate(-120.8139 0 100.824)')

  })
  $('.internet-quality').mouseleave(function () {
    $('.internet-quality rect').attr('transform', 'rotate(-57.8139 0 100.824)')

  })
  /*end scroll animation*/

  /* mouse leave add class for animation */
  $('.delay').mouseleave(function () {
    $('.delay').addClass('mouse-leave');


  })
  $('.delay').mouseenter(function () {
    $('.delay').removeClass('mouse-leave');


  })
  //request demo button reverse animation add class
  $('a.request').mouseenter(function () {
    $(this).removeClass('mouse-leave');
  })
  $('a.request').mouseleave(function () {
    $(this).addClass('mouse-leave');


  })
  //request-demo top right
  $('div.request-demo').mouseenter(function () {
    $(this).removeClass('mouse-leave');
  })
  $('div.request-demo').mouseleave(function () {
    $(this).addClass('mouse-leave');
  })
  //ready-hover
    //request-demo top right
    $('a.ready-hover').mouseenter(function () {
      $(this).removeClass('mouse-leave');
    })
    $('a.ready-hover').mouseleave(function () {
      $(this).addClass('mouse-leave');
    })

});


function textScrollAnimation() {
  $('.text-scroll-effect').css('transform', 'translateX(0px)');
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var text_element = document.querySelector('.text-scroll-effect');
    var style = window.getComputedStyle(text_element);
    var matrix = new WebKitCSSMatrix(style.transform);
    sy = matrix.m41;
    var hT = $('.text-scroll-effect').offset().top,
      hH = $('.text-scroll-effect').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    // console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
      $('.text-scroll-effect').addClass('scrolled');

      var scroll = $(window).scrollTop();
      if (scroll > position) {
        sy = sy - 4;
        $('.text-scroll-effect').css('transform', 'translateX(' + sy + 'px');
      } else {
        sy = sy + 4;
        $('.text-scroll-effect').css('transform', 'translateX(' + sy + 'px');
      }
      position = scroll;
    } else {
      $('.text-scroll-effect').removeClass('scrolled');
    }

  });
}

textScrollAnimation();

//powered by section animation svg
function poweredByScrollAnimation() {
  $('svg.powered-by path.second').css('transform', 'translateX(-50%)');
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    if ($('svg.powered-by path.second').offset().top < ($(window).scrollTop() + ($(window).height() / 2))) {
      // console.log('in');
    }
    if ($('svg.powered-by path.second').offset().top > ($(window).scrollTop() + ($(window).height() / 2))) {
      // console.log('out');
    }

    var powered_by_element = document.querySelector('svg.powered-by path.second');
    var style = window.getComputedStyle(powered_by_element);
    var matrix = new WebKitCSSMatrix(style.transform);
    var current_translateX_value = matrix.m41;
    var hT = $(powered_by_element).offset().top,
      hH = $(powered_by_element).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    // console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
      $(powered_by_element).addClass('scrolled');

      var scroll = $(window).scrollTop();
      if (scroll > position) {
        // if( current_translateX_value<0){
        current_translateX_value = current_translateX_value + 50;
        if (current_translateX_value >= 0) {
          $('rect.haivision').css('opacity', 1);

          current_translateX_value = 0;
          $(powered_by_element).css('transform', 'translateX(' + current_translateX_value + 'px');
        } else {
          $('rect.haivision').css('opacity', 0);

          $(powered_by_element).css('transform', 'translateX(' + current_translateX_value + 'px');

        }
      } else {

        if (powered_by_element.getBoundingClientRect().y > 200) {
          var pwidth = powered_by_element.getBoundingClientRect().width;
          current_translateX_value = current_translateX_value - 50;
          if (current_translateX_value < '-' + pwidth) {
          } else {

            $(powered_by_element).css('transform', 'translateX(' + current_translateX_value + 'px');
            $('rect.haivision').css('opacity', 0);

          }

        }

      }
      position = scroll;
    } else {
      $(powered_by_element).removeClass('scrolled');
    }

  });
}

poweredByScrollAnimation();


//ar capabilities svg animation
function ARcapabilitiesScrollAnimation() {
  $('svg.ar-capabilities ellipse').css('transform', 'scale(0)');
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    if ($('svg.ar-capabilities').offset().top < ($(window).scrollTop() + ($(window).height() / 2))) {
      console.log('in1');
    }
    if ($('svg.ar-capabilities').offset().top > ($(window).scrollTop() + ($(window).height() / 2))) {
      console.log('out');
    }

    var ar_capibility = document.querySelector('svg.ar-capabilities ellipse');
    var style = window.getComputedStyle(ar_capibility);
    var matrix = new WebKitCSSMatrix(style.transform);
    var current_scale_value = matrix.m11;
    // alert(current_scale_value);
    var hT = $(ar_capibility).offset().top,
      hH = $(ar_capibility).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    // console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
      $(ar_capibility).addClass('scrolled');

      var scroll = $(window).scrollTop();
      if (scroll > position) {
        // if( current_scale_value<0){
        current_scale_value = current_scale_value + 0.5;
        if (current_scale_value >= 1) {
          current_scale_value = 0;
          $('.ar-capabilities ellipse').css('transform', 'scal(1)');
        } else {


          $('.ar-capabilities ellipse').css('transform', 'scale(' + current_scale_value);

        }
      } else {

        if (ar_capibility.getBoundingClientRect().y > 200) {
          console.log('scrolled up')

          var pwidth = ar_capibility.getBoundingClientRect().width;
          current_scale_value = current_scale_value - 0.07;
          if (current_scale_value < '-' + pwidth) {
          } else {
            $('.ar-capabilities ellipse').css('transform', 'scale(1)');

            $(ar_capibility).css('transform', 'scale(' + current_scale_value);

          }

        }

      }
      position = scroll;
    } else {
      $(ar_capibility).removeClass('scrolled');
    }

  });
}

ARcapabilitiesScrollAnimation();

//pictureQuality section animation

function pictureQualityScrollAnimation() {
  $('.quality-section img.circle').css('transform', 'translateX(-100%)');
  $('body .main .quality-section .rectangle').css('transform', 'translateY(100%)')
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    if ($('.quality-section img.circle').offset().top < ($(window).scrollTop() + ($(window).height() / 2))) {
      // console.log('in');
    }
    if ($('.quality-section img.circle').offset().top > ($(window).scrollTop() + ($(window).height() / 2))) {
      // console.log('out');
    }
    //circle
    var qualityCircleElement = document.querySelector('.quality-section img.circle');
    var style = window.getComputedStyle(qualityCircleElement);
    var matrix = new WebKitCSSMatrix(style.transform);
    var current_translateX_value = matrix.m41;


    var hT = $(qualityCircleElement).offset().top,
      hH = $(qualityCircleElement).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    // console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
      $(qualityCircleElement).addClass('scrolled');

      var scroll = $(window).scrollTop();
      if (scroll > position) {
        // if( current_translateX_value<0){
        current_translateX_value = current_translateX_value + 10;
        if (current_translateX_value >= 0) {

          current_translateX_value = 0;
          $(qualityCircleElement).css('transform', 'translateX(' + current_translateX_value + 'px');
        } else {

          $(qualityCircleElement).css('transform', 'translateX(' + current_translateX_value + 'px');

        }
      } else {

        if (qualityCircleElement.getBoundingClientRect().y > 200) {
          var pwidth = qualityCircleElement.getBoundingClientRect().width;
          current_translateX_value = current_translateX_value - 10;
          if (current_translateX_value < '-' + pwidth) {
          } else {

            $(qualityCircleElement).css('transform', 'translateX(' + current_translateX_value + 'px');

          }

        }

      }
      position = scroll;
    } else {
      $(qualityCircleElement).removeClass('scrolled');
    }

  });
}

pictureQualityScrollAnimation();


function pictureQualityRectangleAnimation() {
  $('body .main .quality-section .rectangle').css('transform', 'translateY(100%)')
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    if ($('.quality-section .rectangle').offset().top < ($(window).scrollTop() + ($(window).height() / 2))) {
      // console.log('in');
    }
    if ($('.quality-section .rectangle').offset().top > ($(window).scrollTop() + ($(window).height() / 2))) {
      // console.log('out');
    }
    //circle
    var qualityCircleElement = document.querySelector('.quality-section .rectangle');
    var style = window.getComputedStyle(qualityCircleElement);
    var matrix = new WebKitCSSMatrix(style.transform);
    var current_translateX_value = matrix.m41;


    //rectangle
    var qualityRectangleElement = document.querySelector('.quality-section div.rectangle');
    var style2 = window.getComputedStyle(qualityRectangleElement);
    var matrix2 = new WebKitCSSMatrix(style2.transform);
    var current_translateY_value = matrix2.m42;
    // alert(current_translateY_value);


    var hT = $(qualityCircleElement).offset().top,
      hH = $(qualityCircleElement).outerHeight() - 150,
      wH = $(window).height(),
      wS = $(this).scrollTop();
    // console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
      $(qualityCircleElement).addClass('scrolled');

      var scroll = $(window).scrollTop();
      if (scroll > position) {
        //scroll down
        // if( current_translateX_value<0){
        current_translateY_value = current_translateY_value - 20;
        if (current_translateY_value > 0) {
          // current_translateX_value=0;
          $(qualityRectangleElement).css('transform', 'translateY(' + current_translateY_value + 'px');
        } else {

          // $(qualityRectangleElement).css('transform','translateY('+current_translateX_value+'px');

        }
      } else {
        //scroll up
        console.log('scrollup')
        if (qualityRectangleElement.getBoundingClientRect().y > 100) {
          console.log('yes')
          // alert(qualityRectangleElement.getBoundingClientRect().y)
          var pheight = qualityRectangleElement.getBoundingClientRect().height;
          current_translateX_value = current_translateX_value - 10;
          current_translateY_value = current_translateY_value + 50;

          if (current_translateY_value < pheight) {
            $(qualityRectangleElement).css('transform', 'translateY(' + current_translateY_value + 'px');

          } else {

          }

        }

      }
      position = scroll;
    } else {
      $(qualityRectangleElement).removeClass('scrolled');
    }

  });
}

pictureQualityRectangleAnimation();
