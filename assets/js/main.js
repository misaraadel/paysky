$(document).ready(function () {
    /*start the loading page */
    jQuery(".loader").fadeOut(5000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $(".scroll-top-button").addClass('active-scroll');
        } else {
            $(".scroll-top-button").removeClass('active-scroll');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $(".bottom-nav").addClass('active-bottom-nav');
        } else {
            $(".bottom-nav").removeClass('active-bottom-nav');
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //change navbar color on scroll
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    //start active navbar
    $('.nav-toggler').click(function(){
        $('.navbar-content-box').addClass('active-navbar');
    });
    $('.close-nav').click(function(){
        $('.navbar-content-box').removeClass('active-navbar');
    });
    //owl header screen 
    $('.owl-header').owlCarousel({
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });
    //why slider 
    $('.owl-why').owlCarousel({
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        center: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    //partner slider 
    $('.owl-partner').owlCarousel({
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        center: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
    //testimonial slider 
    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin: 20,
        center: true,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $( '.js-input' ).keyup(function() {
        if( $(this).val() ) {
           $(this).addClass('not-empty');
        } else {
           $(this).removeClass('not-empty');
        }
    });
});