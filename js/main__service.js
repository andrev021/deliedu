jQuery(document).ready(function ($) {

  let doFullpage = document.documentElement.clientWidth;

  if (doFullpage > 768) {
    (function ($) {
      let $isAnimatedFirst = $('.service_d1 .is-animated')
        $isAnimatedSecond = $('.d2 .is-animated'),
        $isAnimatedThird = $('.d3 .is-animated'),
        $isAnimatedFourth = $('.d4 .is-animated'),
        $isAnimatedFive = $('.d5 .is-animated'),
        $isAnimatedSix = $('.d6 .is-animated'),
        $isAnimatedSeven = $('.service_d6 .is-animated'),
        $isAnimatedEight = $('.footer .is-animated');

      $('#fullPage').fullpage({
        afterLoad: function (index, nextIndex, direction) {
          if (nextIndex > 1) {
            $('.menu__logo_w').css('display', 'none');
            $('.menu__logo').css('display', 'block');
            $('.menu__burger').addClass('black');
          }
          else {
            $('.menu__burger.black').removeClass('black');
          }
        },
        onLeave: function (index, nextIndex, direction) {


          if (index == 1 && nextIndex == 2) {
            $('.fp-section').css('transition-delay', '.8s');
            $isAnimatedSecond.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedSecond.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedSecond.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedSecond.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedFirst.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s');
          }



          if (index == 2 && nextIndex == 3) {
            $isAnimatedThird.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedThird.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedThird.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedThird.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedSecond.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedSecond.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedSecond.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedSecond.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }



          if (index == 3 && nextIndex == 4) {
            $isAnimatedFourth.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedFourth.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedFourth.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedFourth.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedThird.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedThird.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedThird.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedThird.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }



          if (index == 4 && nextIndex == 5) {
            $isAnimatedFive.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedFive.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedFive.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedFive.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedFourth.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedFourth.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFourth.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedFourth.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }



          if (index == 5 && nextIndex == 6) {
            $isAnimatedSix.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedSix.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedSix.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedSix.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedFive.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedFive.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFive.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedFive.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }



          if (index == 6 && nextIndex == 7) {
            $isAnimatedSeven.eq(0).removeClass('fadeOutRight').addClass('animated fadeInDown').css('animation-delay', '1.3s');
            $isAnimatedSeven.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInUp').css('animation-delay', '1.6s');

            $isAnimatedSix.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedSix.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedSix.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedSix.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }


          if (index == 7 && nextIndex == 8) {
            $isAnimatedEight.eq(0).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.3s');
            $isAnimatedEight.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.6s');
            $isAnimatedEight.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.7s');


            $isAnimatedSeven.eq(0).addClass('animated fadeOutRight').css('animation-delay', '.1s');
            $isAnimatedSeven.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
          }






          if (index == 2 && nextIndex == 1) {
            $('.menu__logo_w').css('display', 'block');
            $('.menu__logo').css('display', 'none');
            $isAnimatedFirst.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInRight').css('animation-delay', '1.1s');


            $isAnimatedSecond.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedSecond.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedSecond.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedSecond.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }


          if (index == 3 && nextIndex == 2) {
            $isAnimatedSecond.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedSecond.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedSecond.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedSecond.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedThird.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedThird.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedThird.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedThird.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }


          if (index == 4 && nextIndex == 3) {
            $isAnimatedThird.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedThird.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedThird.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedThird.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedFourth.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedFourth.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFourth.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedFourth.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }



          if (index == 5 && nextIndex == 4) {
            $isAnimatedFourth.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedFourth.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedFourth.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedFourth.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedFive.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedFive.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFive.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedFive.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }



          if (index == 6 && nextIndex == 5) {
            $isAnimatedFive.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedFive.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedFive.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedFive.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedSix.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.1s');
            $isAnimatedSix.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedSix.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedSix.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.2s');
          }



          if (index == 7 && nextIndex == 6) {
            $isAnimatedSix.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedSix.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeftBig').css('animation-delay', '1.3s');
            $isAnimatedSix.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedSix.eq(3).removeClass('fadeOutDown').addClass('animated fadeInUp').css('animation-delay', '1.5s');


            $isAnimatedSeven.eq(0).addClass('animated fadeOutRight').css('animation-delay', '.1s');
            $isAnimatedSeven.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
          }



          if (index == 8 && nextIndex == 7) {
            $isAnimatedSeven.eq(0).removeClass('fadeOutRight').addClass('animated fadeInDown').css('animation-delay', '1.3s');
            $isAnimatedSeven.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInUp').css('animation-delay', '1.6s');


            $isAnimatedEight.eq(0).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedEight.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.4s');
            $isAnimatedEight.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.5s');
          }

        }
      });
    })(jQuery)
  }

  $('.service_d1__missions').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear'
  });


  var slider1 = $('.service_d1__missions');
  $(".service_d1__missions").on('beforeChange', function (event, slick, currentSlide) {
    $(".service_d1").toggleClass('service_d1_bg2');
  });


  $('.menu__burger').click(function (event) {
    $('.menu__close').toggleClass('active');
    $('.menu__overlay').toggleClass('active');
  });

  $('.menu__close').click(function (event) {
    $(this).removeClass('active');
    $('.menu__overlay').removeClass('active');
  });
});