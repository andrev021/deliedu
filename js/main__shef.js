jQuery(document).ready(function($) {

	var doFullpage = document.documentElement.clientWidth;

	if (doFullpage > 768) {
       (function($) {
	var	$isAnimatedFirst = $('.shef_d1 .is-animated')
		$isAnimatedSecond = $('.shef_d2 .is-animated'),
	    $isAnimatedThird = $('.shef_d3 .is-animated'),
	    $isAnimatedFourth = $('.shef_d4 .is-animated'),
	    $isAnimatedFive = $('.shef_d5 .is-animated'),
	    $isAnimatedSix = $('.shef_d6 .is-animated'),
	    $isAnimatedSeven = $('.main_d7 .is-animated'),
	    $isAnimatedEight = $('.footer .is-animated');

	    $('#fullPage').fullpage({
	     normalScrollElements: '.main_d7__spoilers',
	 	 onLeave:function(index, nextIndex, direction){


	 	 if( index == 1 && nextIndex == 2 ) { 
	      $('.fp-section').css('transition-delay', '.8s')
	      $isAnimatedSecond.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInUp').css('animation-delay', '1.2s'); 
	      $isAnimatedSecond.eq(1).removeClass('fadeOutRight').addClass('animated fadeInUp').css('animation-delay', '1.4s');
	      

		  $isAnimatedFirst.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s');
		  $isAnimatedFirst.eq(1).addClass('animated fadeOutUp').css('animation-delay', '.2s');
	    }



	    if( index == 2 && nextIndex == 3 ) { 
	      $isAnimatedThird.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s'); 
	      $isAnimatedThird.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', ' 1.2s');
	      $isAnimatedThird.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', ' 1.3s');
	      

		  $isAnimatedSecond.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s');
		  $isAnimatedSecond.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.2s');
	    }



	    if( index == 3 && nextIndex == 4 ) { 
	      $isAnimatedFourth.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s'); 
	      $isAnimatedFourth.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', ' 1.2s');
	      $isAnimatedFourth.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', ' 1.3s');
	      

		  $isAnimatedThird.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s'); 
	      $isAnimatedThird.eq(1).addClass('animated fadeOutLeft').css('animation-delay', ' .3s');
	      $isAnimatedThird.eq(2).addClass('animated fadeOutRight').css('animation-delay', ' .4s');
	    }



	    if( index == 4 && nextIndex == 5 ) { 
	      $isAnimatedFive.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInRight').css('animation-delay', '1.1s'); 
	      $isAnimatedFive.eq(1).removeClass('fadeOutRight').addClass('animated fadeInLeft').css('animation-delay', ' 1.2s');
	      

		  $isAnimatedFourth.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s'); 
	      $isAnimatedFourth.eq(1).addClass('animated fadeOutLeft').css('animation-delay', ' .3s');
	      $isAnimatedFourth.eq(2).addClass('animated fadeOutRight').css('animation-delay', ' .4s');
	    }



	    if( index == 5 && nextIndex == 6 ) { 
	      $isAnimatedSix.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInDown').css('animation-delay', '1.1s'); 
	      $isAnimatedSix.eq(1).removeClass('fadeOutRight').addClass('animated fadeInUp').css('animation-delay', ' 1.2s');
	      

		  $isAnimatedFive.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s'); 
	      $isAnimatedFive.eq(1).addClass('animated fadeOutRight').css('animation-delay', ' .3s');
	    }



	    if( index == 6 && nextIndex == 7 ) { 
	      $('.quest__link').css('display', 'none');
	      $isAnimatedSeven.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s'); 
	      $isAnimatedSeven.eq(1).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.1s');
	      $isAnimatedSeven.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.3s');
	      $isAnimatedSeven.eq(3).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
	      $isAnimatedSeven.eq(4).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.5s');
	      $isAnimatedSeven.eq(5).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.6s');
	      $isAnimatedSeven.eq(6).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.7s');

	      $isAnimatedSix.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s'); 
	      $isAnimatedSix.eq(1).addClass('animated fadeOutRight').css('animation-delay', ' .3s');
	    }


	    if( index == 7 && nextIndex == 8 ) { 
	      $isAnimatedEight.eq(0).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.3s'); 
	      $isAnimatedEight.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.6s');
	      $isAnimatedEight.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.7s');


	      $isAnimatedSeven.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s'); 
	      $isAnimatedSeven.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.2s');
	      $isAnimatedSeven.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.3s');
	      $isAnimatedSeven.eq(3).addClass('animated fadeOutRight').css('animation-delay', '.35s');
	      $isAnimatedSeven.eq(4).addClass('animated fadeOutRight').css('animation-delay', '.4s');
	      $isAnimatedSeven.eq(5).addClass('animated fadeOutRight').css('animation-delay', '.45s');
	      $isAnimatedSeven.eq(6).addClass('animated fadeOutRight').css('animation-delay', '.5s');
	    }


	    if( index == 2 && nextIndex == 1 ) { 
	      $isAnimatedFirst.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s'); 
	      $isAnimatedFirst.eq(1).removeClass('fadeOutUp').addClass('animated fadeInDown').css('animation-delay', ' 1.2s');
	      

		  $isAnimatedSecond.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s');
		  $isAnimatedSecond.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.2s');
	    }


	    if( index == 3 && nextIndex == 2 ) { 
	      $isAnimatedSecond.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInUp').css('animation-delay', '1.2s'); 
	      $isAnimatedSecond.eq(1).removeClass('fadeOutRight').addClass('animated fadeInUp').css('animation-delay', '1.4s');
	      

		  $isAnimatedThird.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s'); 
	      $isAnimatedThird.eq(1).addClass('animated fadeOutLeft').css('animation-delay', ' .3s');
	      $isAnimatedThird.eq(2).addClass('animated fadeOutRight').css('animation-delay', ' .4s');
	    }


	    if( index == 4 && nextIndex == 3 ) { 
	      $isAnimatedThird.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s'); 
	      $isAnimatedThird.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', ' 1.2s');
	      $isAnimatedThird.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', ' 1.3s');
	      

		  $isAnimatedFourth.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s'); 
	      $isAnimatedFourth.eq(1).addClass('animated fadeOutLeft').css('animation-delay', ' .3s');
	      $isAnimatedFourth.eq(2).addClass('animated fadeOutRight').css('animation-delay', ' .4s');
	    }



	    if( index == 5 && nextIndex == 4 ) { 
	      $isAnimatedFourth.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s'); 
	      $isAnimatedFourth.eq(1).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', ' 1.2s');
	      $isAnimatedFourth.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', ' 1.3s');
	      

		  $isAnimatedFive.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s'); 
	      $isAnimatedFive.eq(1).addClass('animated fadeOutRight').css('animation-delay', ' .3s');
	    }



	    if( index == 6 && nextIndex == 5 ) { 
	      $isAnimatedFive.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInRight').css('animation-delay', '1.1s'); 
	      $isAnimatedFive.eq(1).removeClass('fadeOutRight').addClass('animated fadeInLeft').css('animation-delay', ' 1.2s');
	      

		  $isAnimatedSix.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.2s'); 
	      $isAnimatedSix.eq(1).addClass('animated fadeOutRight').css('animation-delay', ' .3s');
	    }



	    if( index == 7 && nextIndex == 6 ) { 
	      $('.quest__link').css('display', 'block');
	      $isAnimatedSix.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInDown').css('animation-delay', '1.1s'); 
	      $isAnimatedSix.eq(1).removeClass('fadeOutRight').addClass('animated fadeInUp').css('animation-delay', ' 1.2s');
	      

		  $isAnimatedSeven.eq(0).addClass('animated fadeOutLeft').css('animation-delay', '.1s'); 
	      $isAnimatedSeven.eq(1).addClass('animated fadeOutRight').css('animation-delay', '.2s');
	      $isAnimatedSeven.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.3s');
	      $isAnimatedSeven.eq(3).addClass('animated fadeOutRight').css('animation-delay', '.35s');
	      $isAnimatedSeven.eq(4).addClass('animated fadeOutRight').css('animation-delay', '.4s');
	      $isAnimatedSeven.eq(5).addClass('animated fadeOutRight').css('animation-delay', '.45s');
	      $isAnimatedSeven.eq(6).addClass('animated fadeOutRight').css('animation-delay', '.5s');
	    }



	    if( index == 8 && nextIndex == 7 ) { 
	      $isAnimatedSeven.eq(0).removeClass('fadeOutLeft').addClass('animated fadeInLeft').css('animation-delay', '1.1s'); 
	      $isAnimatedSeven.eq(1).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.1s');
	      $isAnimatedSeven.eq(2).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.3s');
	      $isAnimatedSeven.eq(3).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.4s');
	      $isAnimatedSeven.eq(4).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.5s');
	      $isAnimatedSeven.eq(5).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.6s');
	      $isAnimatedSeven.eq(6).removeClass('fadeOutRight').addClass('animated fadeInRight').css('animation-delay', '1.7s');
	      

		  $isAnimatedEight.eq(0).addClass('animated fadeOutRight').css('animation-delay', '.2s'); 
	      $isAnimatedEight.eq(1).addClass('animated fadeOutLeft').css('animation-delay', '.4s');
	      $isAnimatedEight.eq(2).addClass('animated fadeOutRight').css('animation-delay', '.5s');
	    }

	     }
	});
	})(jQuery)
    }

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

	if (doFullpage < 768) {

		$('.shef_d2__cards').slick({
		dots: false,
		arrows: false,
		infinite: false
		});

	}

	if (doFullpage < 768) {

		$('.shef_d5__cards').slick({
		dots: false,
		arrows: false,
		infinite: false
		});

	}

	var slider = $('.shef_d6__slider');
	$('.sl-count__total').text( slider.slick("getSlick").slideCount);
	$(".shef_d6__slider").on('afterChange', function(event, slick, currentSlide){
	     $(".sl-count__current").text(currentSlide + 1);
	});


	$('.shef_d5__cards__desc').slick({
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 4,
		pauseOnHover: false
	});
	

	$('.quest__link').click(function(event) {
		$('.quest').toggleClass('active');
	});
	$('.quest__close').click(function(event) {
		$('.quest').removeClass('active');
	});


	$('.menu__burger').click(function(event) {
		$('.menu__close').toggleClass('active');
		$('.menu__overlay').toggleClass('active');
	});

	$('.menu__close').click(function(event) {
		$(this).removeClass('active');
		$('.menu__overlay').removeClass('active');
	});
});