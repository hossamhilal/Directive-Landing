/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    // Open navbarSide when button is clicked
    $('.navBtn').on('click', function () {
        $('.headerNav').toggleClass('show');
        $('body').toggleClass('no-scroll');
    });

    $('.closeMenu').on('click', function () {
        $('.headerNav').removeClass('show');     
        $('body').removeClass('no-scroll');
    });

    // Scroll Down
    $('.scrollDownBtn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        }, 1200, 'linear');
    });

    // Scroll Menu
    $('.headerNav a').on('click', function(e) {
        e.preventDefault();
        $('.headerNav a').removeClass('active');
        $('.headerNav').removeClass('show');     
        $('body').removeClass('no-scroll');
        $(this).addClass('active');
        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        }, 1200, 'linear');
    });

    // service hOVER 
    $('.service:nth-child(1)').addClass('first');
    $('.service:not(:nth-child(1))').hover(function(){
        $('.service:nth-child(1)').removeClass('first');
    }, function(){
        $('.service:nth-child(1)').addClass('first');
    });

    // Clients Owl
    $('.owlClients').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // INPUT ANIMATION 
    $('.filedInput').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');   
        }
    });

    $('.filedInput').focus(function(){
        $(this).parent().addClass('focused');
    });

    $('.filedInput').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('focused');
    });

    // iniat WOW Js
    new WOW().init();

});


