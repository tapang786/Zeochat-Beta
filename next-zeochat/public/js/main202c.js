;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#zeochat-offcanvas, .js-zeochat-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-zeochat-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="zeochat-offcanvas" />');
		$('#zeochat-offcanvas').prepend('<div id="zeochat-logo-offcanvas"><a href="index.html"><span>Zeo</span>chat <span class="icon-feed"></span></a></div>');
		// Hamburger menu removed - now handled in Navbar component
		// $('#page').prepend('<a href="javascript:void(0)" onclick="goToTopall()" class="js-zeochat-nav-toggle zeochat-nav-toggle zeochat-nav-white"><i></i></a>');
		
		// Clone divs with menu classes 1-3 and input in #zeochat-offcanvas.
		var clone1 = $('.col-md-9.menu-1 > ul').clone();
		$('#zeochat-offcanvas').append(clone1);


		var clone2 = $('.menu-2 > ul').clone();
		$('#zeochat-offcanvas').append(clone2);
				 
 
		var clone3 = $('.menu-3 > ul').clone();
		$('#zeochat-offcanvas').append(clone3);
    
    	var clone31 = $('.float-left-position').clone();
		$('.float-left-position').remove();
		var wrapper = $('<div class=""></div>');

		// Append the clone inside wrapper
		wrapper.append(clone31);
		$('#zeochat-offcanvas').append(clone31);
		
		var clone4 = $('.menu-4 > footer').clone();
		$('#zeochat-offcanvas').append(clone4);
		
		$('.item-2 a.edit-intro-profile').click(function(){
			$('.zeochat-nav-white.active').removeClass('active');
			$("#profile-select .modal-content .zeochat-heading h2").fadeIn(1000).text("Edit My Profile");
		});

		$('.item-2.info-added span.js-zeochat-nav-toggle.text-right').click(function(){
			$('a.js-zeochat-nav-toggle.zeochat-nav-white').removeClass('active');
			$("#profile-select .modal-content .zeochat-heading h2").fadeIn(1000).text("Edit My Profile");
		});

		$('.item-2 .ambassador-view button').on("click", function (){
			$(".modal-content .zeochat-heading h2").fadeIn(1000).text("Quick Apply");
			// $(".modal-content .zeochat-heading h3").fadeIn(1000).text("We're here to help students earn in a whole new way");
		});
		
		$('.item-2 .explorer-view button').on("click", function (){
			$(".modal-content .zeochat-heading h2").fadeIn(1000).text("Quick Apply");
			$(".modal-content .zeochat-heading h3").fadeIn(1000).text("Connect with Guides To Explore the world");
		});
		
		$('.item-2 button').on("click", function (){
			$(".js-zeochat-nav-toggle.zeochat-nav-toggle.zeochat-nav-white.active").removeClass('active');
		});
		
		$('#zeochat-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#zeochat-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').click(function(){
			var $this = $(this);

			$this
 				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		});
 
		
		$(".offcanvas-has-dropdown").click(function(){
		   if (!$(this).hasClass("active")) {
			   $(this).toggleClass("active"); return false;
		   } else
			 $(this).removeClass('active')
					   .find('ul')
					   .slideUp(500, 'easeOutExpo');
	   });
 
        $('.offcanvas-has-dropdown a.menu-icon').click(function(e) {
            e.preventDefault();
        });
		// If window width is greater than 768px, then remove body class = offcanvas.
		$(window).on('resize', function(){
			var win = $(this); //this = window
			if (win.width() >= 768) {
				if ( $('body').hasClass('offcanvas') ) {
	
					$('body').removeClass('offcanvas');
					$('.js-zeochat-nav-toggle').removeClass('active');
				}
			}
		});
			if ($(window).width() <= 768) {
					$('a.menu-live-chat').append('<span class="menu-item-text">Live Chat </span>');
					$('a.menu-campuses').append('<span class="menu-item-text">Campuses </span>');				
					$('a.menu-explorers').append('<span class="menu-item-text">Explorers </span>');				
					$('a.menu-ambassadors').append('<span class="menu-item-text">Ambassadors </span>');				
			}
	};

	var burgerMenu = function() {

		$('body').on('click', '.js-zeochat-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 30, 'easeInOutExpo' );
					});
					
				}, 30);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
				$('.zeochat-nav').addClass('scrolled');
				$('.zeochat-nav-toggle').addClass('fixed-hamburger');
			} else {
				$('.js-top').removeClass('active');
				$('.zeochat-nav').removeClass('scrolled');
				$('.zeochat-nav-toggle').removeClass('fixed-hamburger');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".zeochat-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#zeochat-counter').length > 0 ) {
			$('#zeochat-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#zeochat-hero .flexslider').flexslider({
			animation: "fade",

			// easing: "swing",
			// direction: "vertical",

			slideshowSpeed: 7500,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};
/*
	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};
*/
	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			center: false,
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
			autoplay: false,
			items: 4,
			autoHeight: true,
		   loop: false,
		   margin: 0,
			responsive:{
		      0:{
			         items:1
		      },
	         600:{
			         items:2
		      },
		      1000:{
			         items:4
		      }
		   },
		   nav: false,
			   dots: true,
			   dotsEach: 4,
		   autoplayHoverPause: true,
		   mouseDrag: false,
		   smartSpeed: 500,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		// parallax();
		owlCrouselFeatureSlide();
	});


}());