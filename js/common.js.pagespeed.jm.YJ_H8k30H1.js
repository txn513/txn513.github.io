"use strict";
(function($) {
    $(window).on('load', function() {
        $('.loader_inner').fadeOut();
        $('.loader').delay(400).fadeOut('slow');
    });
    $('ul.sf-menu').superfish({
        delay: 50,
        speed: 'fast',
        cssArrows: true,
        disableHI: false,
        easing: 'fade',
        touchMove: false,
        swipe: false
    });
    setTimeout(function() {
        $('.tlt').textillate({
            selector: '.texts',
            loop: true,
            minDisplayTime: 500,
            initialDelay: 0,
            autoStart: true,
            inEffects: [],
            outEffects: ['hinge'],
            in: {
                effect: 'rollIn',
                delayScale: 0.4,
                delay: 50,
                sync: false,
                shuffle: false,
                reverse: false,
                callback: function() {}
            },
            out: {
                effect: 'fadeOutDown',
                delayScale: 0.5,
                delay: 50,
                sync: false,
                shuffle: false,
                reverse: false,
                callback: function() {}
            },
            callback: function() {},
            type: 'char'
        });
    }, 3000);
    $('#top-nav').sticky({
        topSpacing: 0,
        zIndex: 40
    });
    $('.link-portfolio').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
    $('#portfolio').mixItUp({
        controls: {
            toggleFilterButtons: false,
        },
        load: {
            filter: '*'
        }
    });
    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });
    $('a.smooth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 57
        }, {
            duration: 1000,
            specialEasing: {
                width: "linear",
                height: "easeInOutCubic"
            }
        });
        event.preventDefault();
    });
    $('.full-slider').slick({
        dots: true,
        fade: true,
        appendDots: '#dots-control-full-slider',
        dotsClass: 'dots',
        autoplay: true,
        autoplaySpeed: 8000,
        autoHeight: false,
        adaptiveHeight: true,
        mobileFirst: true,
        touch: false,
        cssEase: 'linear',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    $('.back-slider').slick({
        dots: false,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoHeight: false,
        adaptiveHeight: true,
        mobileFirst: true,
        touch: false,
        cssEase: 'linear'
    });
    $('.slide, .fixed-image, .bg-image').each(function() {
        var url = $(this).attr('data-image');
        if (url) {
            $(this).css('background-image', 'url(' + url + ')');
        }
    });
    $('#particles-js').particleground({
        dotColor: 'rgba(255, 255, 255, 0.40)',
        lineColor: 'rgba(255, 255, 255, 0.21)',
        parallaxMultiplier: 5,
        particleRadius: 5,
        proximity: 130,
        density: 12000
    });
    $(document).on('scroll', function() {
        var y = $(this).scrollTop();
        if (y > 500) {
            $('.top').fadeIn('slow');
        } else {
            $('.top').fadeOut('slow');
        }
    });
    if (typeof $.fn.animated !== 'undefined') {
        $(function() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
                $('.iphone-nalf').animated('fadeInUp');
                $('.section-class-image > img').animated('fadeInUp');
                $('.iphones > .right-mob-back, .left-mob-back').animated('fadeInUp');
                $('.heading-title > h2').animated('fadeInDown');
                $('.heading-title > p').animated('fadeInUp');
            }
        }());
    }
    $(function() {
        var $menu = $('#mobile-menu')
          , $body = $('body')
          , $fn = $('#mobile-menu')
          , $fnToggle = $('.toggle-mnu')
          , $window = $(window);
        $menu.find('.menu-item-has-children > a').on('click', function(e) {
            e.preventDefault();
            if ($(this).next('ul').is(':visible')) {
                $(this).removeClass('sub-active').next('ul').slideUp(250);
            } else {
                $('.menu-item-has-children > a').removeClass('sub-active').next('ul').slideUp(250);
                $(this).addClass('sub-active').next('ul').slideToggle(250);
            }
        });
        var fnOpen = false;
        var fnToggleFunc = function() {
            fnOpen = !fnOpen;
            $body.toggleClass('fullscreen-nav-open');
            $fn.stop().fadeToggle(500);
            $fn.toggleClass("active");
            $('.toggle-mnu').toggleClass('on');
            $('.logo').toggleClass('dark-logo');
            return false;
        };
        $fnToggle.on('click', fnToggleFunc);
        $(document).on('keyup', function(e) {
            if (e.keyCode == 27 && fnOpen) {
                fnToggleFunc();
            }
        });
        $fn.find('li:not(.menu-item-has-children) > a').one('click', function() {
            fnToggleFunc();
            return true;
        });
        $menu.on('click', function() {
            fnToggleFunc();
            return true;
        });
        $('.inner-wrap, .fullscreen-menu-toggle').on('click', function(e) {
            e.stopPropagation();
        });
    });
    if (typeof $.fn.mb_YTPlayer !== 'undefined') {
        $("#bgndVideo").mb_YTPlayer();
    }
    $('#contact-form').on('submit', function() {
        var form = $(this);
        var error = false;
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'form.php',
                dataType: 'json',
                data: data,
                beforeSend: function(data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                    form.trigger('reset');
                },
                success: function(data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('#success').slideToggle('slow');
                        setTimeout(function() {
                            $('#success').slideToggle('hide');
                        }, 3000);
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    $('#error').slideToggle('slow');
                },
                complete: function(data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }
            });
        }
        return false;
    });
    $('.testimonials-items').slick({
        dots: true,
        dotsClass: 'dots',
        appendDots: '#dots-control-testimonials',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        slidesToShow: 3,
        prevArrow: $('#control-testimonials > .prev'),
        nextArrow: $('#control-testimonials > .next'),
        responsive: [{
            breakpoint: 1170,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: false,
                dots: true
            }
        }, {
            breakpoint: 1170,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: false,
                dots: true
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    if ($(window).width() > 768) {
        $('#sidebar, .single-post').matchHeight();
    }
})(jQuery);
