/*--------------------- Copyright (c) 2024 -----------------------
[Master Javascript]

Project: Impel Car Dealer Responsive HTML Template
Version: 1.0.0
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var impel = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Impel Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Search();
            this.Popup();
            this.Menu();
            this.Togglemenu();
            this.Slider();
            this.Home_Slider();
            this.Bottom_Scroll();
            this.RangeSlider();
            this.Video_popup();
            this.Counter();
            this.Testimonial();
            this.Color_slider();
            this.Parts_slider();
            this.Review_slider();
            this.Carthumb_slider();
            this.Nice_select();
            this.color_switch();
        },
        /*-------------- Impel Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        // Menu		
        Menu: function() {
            $('.sub-menu').parent().hover(function() {
                var menu = $(this).find("ul");
                var menupos = $(menu).offset();

                if (menupos.left + menu.width() > $(window).width()) {
                    var newpos = -$(menu).width();
                    menu.css({
                        left: newpos
                    });
                }
            });
        },
        // Toggle Menu
        Togglemenu: function() {
            $(".px_menu_btn").on('click', function() {
                $(".px_menu_wrapper").toggleClass('open_menu');
            });
            $(".menu_cross").on('click', function() {
                $(".px_menu_wrapper").removeClass('open_menu');
            });
          
           
        },

        // Popup
        Popup: function() {
            $('.px_modal').on('click', function() {
                $('.modal-open #signin').hide();
                $('.modal-backdrop').hide();

            })

        },

        // Main Slider		
        Slider: function() {
            if ($('#rev_slider_28_1').length > 0) {
                var tpj = jQuery;
                var revapi28;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_28_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_28_1");
                    } else {
                        revapi28 = tpj("#rev_slider_28_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "revolution/js/",
                            sliderLayout: "auto",
                            dottedOverlay: "none",
                            delay: 7000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                arrows: {
                                    style: "uranus",
                                    enable: false,
                                    hide_onmobile: false,
                                    hide_onleave: false,
                                    tmp: '',
                                    left: {
                                        h_align: "left",
                                        v_align: "center",
                                        h_offset: 20,
                                        v_offset: 0
                                    },
                                    right: {
                                        h_align: "right",
                                        v_align: "center",
                                        h_offset: 20,
                                        v_offset: 0
                                    }
                                },
                                bullets: {
                                    enable: true,
                                    hide_onmobile: false,
                                    style: "hermes",
                                    hide_onleave: false,
                                    direction: "horizontal",
                                    h_align: "center",
                                    v_align: "bottom",
                                    h_offset: 0,
                                    v_offset: 20,
                                    space: 5,
                                    tmp: ''
                                }
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [800, 600, 500, 400],
                            lazyType: "none",
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "off",
                            stopAfterLoops: -1,
                            stopAtSlide: -1,
                            shuffle: "off",
                            autoHeight: "off",
                            autoPlay: "off",
                            fullScreenAutoWidth: "off",
                            fullScreenAlignForce: "off",
                            fullScreenOffsetContainer: "",
                            fullScreenOffset: "60px",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                    if (revapi28) revapi28.revSliderSlicey();
                }); /*ready*/
            }

        },
        // Home Slider		
        Home_Slider: function() {
            if ($(".px_home_slider").length > 0) {
                $(".px_home_slider").slick({
                    autoplay: true,
                    autoplaySpeed: 10000,
                    speed: 600,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    dots: true,
                    fade: true,
                    arrows: false,
                });
            }
        },

        // Text Changer		
        Text_Changer: function() {


        },

        // Scroll		
        Bottom_Scroll: function() {
            $('.px_scroll').on('click', function() {
                var height = $(window).height();
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, height);
            });
        },


        // Search
        Search: function() {
            $('.px_search').on('click', function() {
                $('.px_search_area').addClass('open_search');

            });
            $('.srch_close_btn').on('click', function() {
                $('.px_search_area').removeClass('open_search');

            });

        },

        // Range Slider
        RangeSlider: function() {
            if ($('#range_24').length > 0) {
                $("#range_24").ionRangeSlider({
                    type: "double",
                    min: 1000,
                    max: 2000,
                    from: 1200,
                    to: 1800,
                    hide_min_max: true,
                    hide_from_to: false,
                    grid: false
                });
            }
        },

        // Video Popup
        Video_popup: function() {
            if ($('.impl-popup-youtube').length > 0) {
                $('.impl-popup-youtube').magnificPopup({
                    // disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }

        },

        // Counter
        Counter: function() {
            if ($('.px_count_text').length > 0) {
                $('.px_count_text').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },

        // Testimonial Slider
        Testimonial: function() {
            if ($('.px_test_slider').length > 0) {
                $(".px_test_slider").slick({
                    autoplay: false,
                    autoplaySpeed: 10000,
                    speed: 600,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    dots: true,
                    arrows: false,
                    // fade:true,
                    draggable: true,
                });
            }
        },
        // Color Slider
        Color_slider: function() {
            if ($('#color_car').length > 0) {
                $('#color_car .slider-for1').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav1'
                });
                $('#color_car .slider-nav1').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for1',
                    dots: false,
                    autoplay: false,
                    arrows: false,
                    focusOnSelect: true
                });

                $('a[data-slide]').on('click', function(e) {
                    e.preventDefault();
                    var slideno = $(this).data('slide');
                    $('#color_car .slider-nav1').slick('slickGoTo', slideno - 1);
                });
            }

        },
        // Car Parts Slider
        Parts_slider: function() {
            if ($('.px_carparts').length > 0) {
                $('.px_carparts .slider-for').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav'
                });
                $('.px_carparts .slider-nav').slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    dots: false,
                    autoplay: false,
                    arrows: false,
                    focusOnSelect: true,
                    responsive: [{
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: true,
                                dots: false
                            }
                        },

                    ]
                });

                $('a[data-slide]').on('click', function(e) {
                    e.preventDefault();
                    var slideno = $(this).data('slide');
                    $('.px_carparts .slider-nav').slick('slickGoTo', slideno - 1);
                });
            }

        },
        // Review Slider
        Review_slider: function() {
            if ($('.review_slider').length > 0) {
                $('.review_slider').slick({
                    dots: false,
                    vertical: true,
                    slidesToShow: 3,
					centerMode: false,
                  
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 3000,
                    arrows: false,
                    responsive: [{
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: false,
								centerMode: false,
                                dots: false
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
								infinite: false,								
                                dots: false
                            }
                        },

                    ]
                });
            }

        },
        // Car Description Slider
        Carthumb_slider: function() {
            if ($('.px_buy_old_car').length > 0) {
                $('.px_buy_old_car .slider-for').slick({
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav'
                });
                $('.px_buy_old_car .slider-nav').slick({
                    slidesToShow: 4,
                    asNavFor: '.slider-for',
                    dots: false,
                    autoplay: false,
                    arrows: false,
                    focusOnSelect: true,
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }
                    ]

                });

                $('a[data-slide]').on('click', function(e) {
                    e.preventDefault();
                    var slideno = $(this).data('slide');
                    $('.px_buy_old_car .slider-nav').slick('slickGoTo', slideno - 1);
                });
            }
        },
        // Nice Select	
        Nice_select: function() {
            if ($('.custom_select').length > 0) {
                $('.custom_select select').niceSelect();
            }
        },

        // Color Switcher
        color_switch: function(){
            $('.ff-switch-btn').on('click',function(){
                $('body').toggleClass('ff-switch-open');
            })
            $(document).on('click','.colorchnage',function(event){
                event.preventDefault();
                let color = $(this).attr('id');
                let css_url ='<link rel="stylesheet" href="assets/color/'+color+'.css"/>';
                $('head').append(css_url)
            });			
        },
	// Color Switcher

    };
    $(document).ready(function() {
        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
        //Progressbar
        var each_bar_width
        $(function() {
            $('[data-toggle="tooltip"]').tooltip({
                trigger: 'manual'
            }).tooltip('show');
        });

        $(".progress-bar").each(function() {
            each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
        });

        impel.init();
    });
    // Preloader Js
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");


    });

    // Window Scroll
    $(window).scroll(function() {
        var wh = window.innerWidth;
        //Go to top
        if ($(this).scrollTop() > 100) {
            $('.gotop').addClass('goto');
        } else {
            $('.gotop').removeClass('goto');
        }

    });
    $(".gotop").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });



})(jQuery);
            if ($('.px_change_text').length > 0) {
                var $slogans = $("p.slogan").find("strong");
                var $holder = $("#holder");

                //set via JS so they're visible if JS disabled
                $slogans.parent().css({
                    position: "absolute",
                    top: "0px",
                    left: "0px"
                });

                //settings
                var transitionTime = 0.6;
                var slogansDelayTime = 11.3;

                //internal
                var totalSlogans = $slogans.length;

                var oldSlogan = 0;
                var currentSlogan = -1;

                //initialize	
                switchSlogan();

            }
	function switchSlogan() {

		oldSlogan = currentSlogan;

		if (currentSlogan < totalSlogans - 1) {
			currentSlogan++
		} else {
			currentSlogan = 0;
		}

		TweenLite.to($slogans.eq(oldSlogan), transitionTime, {
			top: -20,
			alpha: 0,
			rotationX: 90
		});
		TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {
			top: 20,
			alpha: 0,
			rotationX: -90
		}, {
			top: 0,
			alpha: 1,
			rotationX: 0
		});

		TweenLite.delayedCall(slogansDelayTime, switchSlogan);
	}
	

// dropedown menu header js start
    $('.px_menu_section li a').click(function(e) {
        $(this).siblings('ul.px_submenu_dropedown ').toggleClass('openSub_menu');
        $('ul.px_submenu_dropedown ').not($(this).siblings()).removeClass('openSub_menu');
        e.stopPropagation();
      });
    $('body').click(function() {
      $('ul.px_submenu_dropedown').removeClass('openSub_menu');
    });

    $(".pxToggle").on('click',function(){
        $("body").toggleClass("toggleshow");
    });
// dropedown menu header js end








	$('.blog_slider').slick({
		dots: true,
		slidesToShow: 2,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});




















