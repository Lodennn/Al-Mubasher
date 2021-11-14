/*global $, alert, console*/

$(function () {

    'use strict';

    /* *************** Variables *************** */

    var windowH = $(window).height(),
        upperH = $(".uppernav").innerHeight(),
        brandH = $(".brand").innerHeight(),
        navbarH = $(".navbar").innerHeight(),
        navbar = $(".navbar"),
        navbarLi = $(".navbar ul li"),
        searchBar = $(".navbar input[type='search']"),
        logo = $(".navbar .logo-img"),
        loginForm = document.getElementById('login-form'),
        fixedLogin = document.getElementById('fixedLogin'),
        loginWindow = document.getElementById('loginWindow'),
        close = document.getElementById('close'),
        mobNav = $(".mobnav"),
        lastScroll = 0,
        mobOptions = $(".mob-options");

    /* *************** Variables *************** */

    /* *************** Functions *************** */
    function closeElement(close, elem) {
        $(close).click(function () {
            $(elem).fadeOut(200);
        });
    }

    function formsControl(btn, holder) {
        $(btn).click(function () {
            $(holder).fadeIn(200);
        });
    }
    /* *************** Functions *************** */

    /* Set Slider Height */
    $(".slider, .carousel-item").height(windowH - (upperH + 50));
    $(".list").height($(".slider .carousel").innerHeight());
    /* Set Slider Height */

    $(".slider ul li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $("." + $(this).data('class')).click();
        console.log("." + $(this).data('class'));
    });

    /* Add Active Class */
    $(".mob-nav ul li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(".navbar ul li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    /* Add Active Class */

    /* Fixed Navbar */
    $(window).scroll(function () {
        var sc = $(this).scrollTop();

        if (sc > navbar.height() + 150) {
            if (!navbar.hasClass('active fixed-top')) {
                navbar.addClass('active fixed-top');
            }
        } else {
            $(".navbar").removeClass('active fixed-top');
        }
        if (sc > mobNav.height() + 150) {
            if (!mobNav.hasClass('fixed-top')) {
                mobNav.addClass('fixed-top');
            }
        } else {
            mobNav.removeClass('fixed-top');
        }
        if ($(window).width() > 767) {
            if (navbar.hasClass('active fixed-top')) {
                navbarLi.css('padding', '5px 8px');
                searchBar.fadeIn(200);
                logo.fadeIn(200);
            } else {
                navbarLi.css('padding', '15px 10px');
                searchBar.fadeOut(200);
                logo.fadeOut(200);
            }
        }
        
        /* Show And Hide Mobile Options */
        if (sc > lastScroll) {
            mobOptions.addClass('hidden');
        } else {
            mobOptions.removeClass('hidden');
        }
        lastScroll = sc;
        /* Show And Hide Mobile Options */
    });

    /* Fixed Navbar */

    /* Search Bar */
    searchBar.click(function () {
        $(this).css("width", '320px');
    });
    /* Search Bar */

    /* Login & Signup Forms */
    formsControl("#login-form", ".login");
    formsControl("#signup-form", ".signup");
    closeElement(close, '.login');
    closeElement("#closes", '.signup');
    /* Login & Signup Forms */

    /* Contact Form */
    $(".contact-form textarea").click(function () {
        $(this).css('height', '200px');
    });
    /* Contact Form */

    /* Window Location Mobile */
    /*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href =  هنا يكتب لينك نسخه الموبيل علشان لما المستخدم يتصفح من الموبيل يرسله لنسخه الجوال اوتوماتيك ;
                                 مثال 
                                window.location.href = "https://www.almobasher.com/mob.html";
                                
    }*/
    /* Window Location Mobile */

});
