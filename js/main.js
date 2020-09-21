jQuery(document).ready(function ($) {

  let doFullpage = document.documentElement.clientWidth;

  if (doFullpage > 768) {
    (function ($) {
      let $isAnimatedFirst = $('.main_d2 .is-animated')
        $isAnimatedSecond = $('.main_d3 .is-animated'),
        $isAnimatedThird = $('.main_d4 .is-animated'),
        $isAnimatedFourth = $('.main_d5 .is-animated'),
        $isAnimatedFive = $('.main_d6 .is-animated'),
        $isAnimatedSix = $('.main_d7 .is-animated'),
        $isAnimatedSeven = $('.footer .is-animated');

      $('#fullPage').fullpage({
        normalScrollElements: '.main_d7__spoilers',
        onLeave: function (index, nextIndex, direction) {
          /* this code is part of the onLeave callback */
          if (index == 1 && nextIndex == 2) {
            $('.fp-section').css('transition-delay', '.8s')
            $isAnimatedSecond.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInUp').css('animation-delay', '1.2s');
            $isAnimatedSecond.eq(1).removeClass('fadeOutRight').addClass('animated fadeInUp').css('animation-delay', '1.4s');


            $isAnimatedFirst.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s');
            $isAnimatedFirst.eq(1).addClass('animated fadeOutUp').css('animation-delay', '.2s');
            $isAnimatedFirst.eq(2).addClass('animated fadeOutDown').css('animation-delay', '.3s');
            $isAnimatedFirst.eq(3).addClass('animated fadeOutDown').css('animation-delay', '.4s');

          }

          else if ((index == 2 && nextIndex == 3)) {
            $isAnimatedThird.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s');
            $isAnimatedThird.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', ' 1.2s');
            $isAnimatedThird.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', ' 1.3s');

            $isAnimatedSecond.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.3s');
            $isAnimatedSecond.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.3s');
          }





          else if ((index == 3) && nextIndex == 4) {
            $isAnimatedFourth.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInRight').css('animation-delay', '1.3s');
            $isAnimatedFourth.eq(1).removeClass('fadeOutRight').addClass('animated fadeInLeft').css('animation-delay', '1.4s');


            $isAnimatedThird.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedThird.eq(1).addClass('animated fadeOutLeft').css('animation-delay', ' .3s');
            $isAnimatedThird.eq(2).addClass('animated fadeOutRight').css('animation-delay', ' .4s');
          }




          else if ((index == 4) && nextIndex == 5) {
            $isAnimatedFive.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.5s');
            $isAnimatedFive.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.7s');
            $isAnimatedFive.eq(2).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.9s');
            $isAnimatedFive.eq(3).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', ' 2.1s');
            $isAnimatedFive.eq(4).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.3s');

            $isAnimatedFourth.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s');
            $isAnimatedFourth.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.3s');
          }



          else if ((index == 5) && nextIndex == 6) {
            $isAnimatedSix.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s');
            $isAnimatedSix.eq(1).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.1s');
            $isAnimatedSix.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.3s');
            $isAnimatedSix.eq(3).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedSix.eq(4).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.5s');
            $isAnimatedSix.eq(5).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.6s');
            $isAnimatedSix.eq(6).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.7s');

            $isAnimatedFive.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.2s');
            $isAnimatedFive.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFive.eq(2).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFive.eq(3).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFive.eq(4).addClass('animated fadeOutRight').css('animation-delay', '.2s');
          }



          else if ((index == 6) && nextIndex == 7) {
            $isAnimatedSeven.eq(0).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.3s');
            $isAnimatedSeven.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.6s');
            $isAnimatedSeven.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.7s');


            $isAnimatedSix.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s');
            $isAnimatedSix.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedSix.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.3s');
            $isAnimatedSix.eq(3).addClass('animated fadeOutRight').css('animation-delay', '.35s');
            $isAnimatedSix.eq(4).addClass('animated fadeOutRight').css('animation-delay', '.4s');
            $isAnimatedSix.eq(5).addClass('animated fadeOutRight').css('animation-delay', '.45s');
            $isAnimatedSix.eq(6).addClass('animated fadeOutRight').css('animation-delay', '.5s');
          }




          else if ((index == 2 && nextIndex == 1)) {
            $isAnimatedFirst.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s');
            $isAnimatedFirst.eq(1).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.2s');
            $isAnimatedFirst.eq(2).removeClass('fadeOutDown').addClass('animated fadeInDown').css('animation-delay', '1.3s');
            $isAnimatedFirst.eq(3).removeClass('fadeOutDown').addClass('animated fadeInDown').css('animation-delay', '1.4s');

            $isAnimatedSecond.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.3s');
            $isAnimatedSecond.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.3s');
          }


          else if ((index == 3 && nextIndex == 2)) {
            $isAnimatedSecond.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInUp').css('animation-delay', '1.2s');
            $isAnimatedSecond.eq(1).removeClass('fadeOutRight').addClass('animated fadeInUp').css('animation-delay', '1.4s');

            $isAnimatedThird.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedThird.eq(1).addClass('animated fadeOutLeft').css('animation-delay', ' .3s');
            $isAnimatedThird.eq(2).addClass('animated fadeOutRight').css('animation-delay', ' .4s');
          }

          else if ((index == 4 && nextIndex == 3)) {
            $isAnimatedThird.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s');
            $isAnimatedThird.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', ' 1.2s');
            $isAnimatedThird.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', ' 1.3s');

            $isAnimatedFourth.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s');
            $isAnimatedFourth.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.3s');
          }

          else if ((index == 5 && nextIndex == 4)) {
            $isAnimatedFourth.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInUp').css('animation-delay', '1.3s');
            $isAnimatedFourth.eq(1).removeClass('fadeOutRight').addClass('animated fadeInUp').css('animation-delay', '1.4s');

            $isAnimatedFive.eq(0).addClass('animated fadeOutUp').css('animation-delay', '.2s');
            $isAnimatedFive.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFive.eq(2).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFive.eq(3).addClass('animated fadeOutLeft').css('animation-delay', '.2s');
            $isAnimatedFive.eq(4).addClass('animated fadeOutRight').css('animation-delay', '.2s');
          }

          else if ((index == 6 && nextIndex == 5)) {
            $isAnimatedFive.eq(0).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', '1.5s');
            $isAnimatedFive.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.7s');
            $isAnimatedFive.eq(2).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.9s');
            $isAnimatedFive.eq(3).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', ' 2.1s');
            $isAnimatedFive.eq(4).removeClass('fadeOutRight').addClass('animated fadeInUp').css('animation-delay', '1.3s');

            $isAnimatedSix.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s');
            $isAnimatedSix.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedSix.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.3s');
            $isAnimatedSix.eq(3).addClass('animated fadeOutRight').css('animation-delay', '.35s');
            $isAnimatedSix.eq(4).addClass('animated fadeOutRight').css('animation-delay', '.4s');
            $isAnimatedSix.eq(5).addClass('animated fadeOutRight').css('animation-delay', '.45s');
            $isAnimatedSix.eq(6).addClass('animated fadeOutRight').css('animation-delay', '.5s');
          }


          else if ((index == 7 && nextIndex == 6)) {
            $isAnimatedSix.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s');
            $isAnimatedSix.eq(1).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.1s');
            $isAnimatedSix.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.3s');
            $isAnimatedSix.eq(3).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
            $isAnimatedSix.eq(4).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.5s');
            $isAnimatedSix.eq(5).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.6s');
            $isAnimatedSix.eq(6).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.7s');

            $isAnimatedSeven.eq(0).addClass('animated fadeOutRight').css('animation-delay', '.2s');
            $isAnimatedSeven.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.4s');
            $isAnimatedSeven.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.5s');
          }

        }
      });
    })(jQuery)
  }







  $('.main_d7__spoiler__title').click(function (event) {
    if ($('.main_d7__spoilers').hasClass('one')) {
      $('.main_d7__spoiler__title').not($(this)).removeClass('active');
      $('.main_d7__spoiler__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });

  // $('.plate').click(function(event) {
  // 	if($('.plates').hasClass('one')){
  // 		$('.first').not($(this)).removeClass('f_active');
  // 		$('.plate').not($(this)).removeClass('active');
  // 		$('.plate').not($(this).prev()).removeClass('none');
  // 		$('.plate').removeClass('f_none');
  // 		$('.plus').not($(this).children('.plus')).removeClass('active');
  // 		$('.plate__info').not($(this).children('.plate__info')).removeClass('active');
  // 	}
  // 	$(this).children('.plus').toggleClass('active');
  // 	$(this).children('.plate__info').toggleClass('active');
  // 	$(this).prev().toggleClass('none');
  // });

  $('.menu__burger').click(function (event) {
    $('.menu__close').toggleClass('active');
    $('.menu__overlay').toggleClass('active');
  });

  $('.menu__close').click(function (event) {
    $(this).removeClass('active');
    $('.menu__overlay').removeClass('active');
  });

  $('.first').click(function (event) {
    $(this).toggleClass('f_active');
    $(this).next().toggleClass('f_none');
    if (!$('.first').hasClass('f_active')) {
      $(this).next().toggleClass('f_none');
    }
  });


  $('.shef_d6__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    responsive: [{

      breakpoint: 415,
      settings: {
        dots: false
      }

    }]
  });


  let slider = $('.shef_d6__slider');
  $('.sl-count__total').text(slider.slick("getSlick").slideCount);
  $(".shef_d6__slider").on('afterChange', function (event, slick, currentSlide) {
    $(".sl-count__current").text(currentSlide + 1);
  });


  if (doFullpage < 768) {

    $('.main_d3__cards').slick({
      dots: true,
      arrows: false,
      infinite: false
    });

  }


  if (doFullpage < 768) {

    $('.main_d5__cards').slick({
      dots: false,
      arrows: false,
      infinite: false
    });

  }



  $('.quest__link').click(function (event) {
    $('.quest').toggleClass('active');
  });
  $('.quest__close').click(function (event) {
    $('.quest').removeClass('active');
  });





});