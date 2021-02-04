/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    //iframe stop
    $(document).ready(function(){
        /* Get iframe src attribute value i.e. YouTube video url
        and store it in a variable */
        var urlweb1 = $("#iframe-web1").attr('src');
        var urlweb2 = $("#iframe-web2").attr('src');
        var urlresponsive = $("#iframe-responsive").attr('src');
        var urlhosting = $("#iframe-hosting").attr('src');
        var urlseo = $("#iframe-seo").attr('src');
        var urlcourses1 = $("#iframe-courses1").attr('src');
       // var urlcourses2 = $("#iframe-courses2").attr('src');
        var urldomain = $("#iframe-domain").attr('src');
        var urldesign = $("#iframe-design").attr('src');
        
        /* Assign empty url value to the iframe src attribute when
        modal hide, which stop the video playing */
        $("#Modal-web").on('hide.bs.modal', function(){
            $("#iframe-web1").attr('src', '');
        });
        $("#Modal-web").on('hide.bs.modal', function(){
            $("#iframe-web2").attr('src', '');
        });
        $("#Modal-responsive").on('hide.bs.modal', function(){
            $("#iframe-responsive").attr('src', '');
        });
        $("#Modal-hosting").on('hide.bs.modal', function(){
            $("#iframe-hosting").attr('src', '');
        });
        $("#Modal-seo").on('hide.bs.modal', function(){
            $("#iframe-seo").attr('src', '');
        });
        $("#Modal-courses").on('hide.bs.modal', function(){
            $("#iframe-courses1").attr('src', '');
        });
        /*
        $("#Modal-courses").on('hide.bs.modal', function(){
            $("#iframe-courses2").attr('src', '');
        });
        */
        $("#Modal-design").on('hide.bs.modal', function(){
            $("#iframe-design").attr('src', '');
        });
        $("#Modal-domain").on('hide.bs.modal', function(){
            $("#iframe-domain").attr('src', '');
        });
        
        /* Assign the initially stored url back to the iframe src
        attribute when modal is displayed again */
        $("#Modal-web").on('show.bs.modal', function(){
            $("#iframe-web1").attr('src', urlweb1);
        });
        $("#Modal-web").on('show.bs.modal', function(){
            $("#iframe-web2").attr('src', urlweb2);
        });
        $("#Modal-responsive").on('show.bs.modal', function(){
            $("#iframe-responsive").attr('src', urlresponsive);
        });
        $("#Modal-hosting").on('show.bs.modal', function(){
            $("#iframe-hosting").attr('src', urlhosting);
        });
        $("#Modal-seo").on('show.bs.modal', function(){
            $("#iframe-seo").attr('src', urlseo);
        });
        $("#Modal-courses").on('show.bs.modal', function(){
            $("#iframe-courses1").attr('src', urlcourses1);
        });
        $("#Modal-design").on('show.bs.modal', function(){
            $("#iframe-design").attr('src', urldesign);
        });
        $("#Modal-domain").on('show.bs.modal', function(){
            $("#iframe-domain").attr('src', urldomain);
        });
    });

    //checkbox
    var el1 = document.getElementById('btn-services1')
    var el2 = document.getElementById('btn-services2')
    var clickHandler = function () {
        setTimeout(function(){         //delay de 0.5 seg
            document.getElementById("menu").checked = true; //checkbox = ON
        }, 500);}
    el1.addEventListener('click', clickHandler)
    el2.addEventListener('click', clickHandler)

    //mouseover
    document.getElementById("services").addEventListener("mouseover", mouseOver);
    document.getElementById("services").addEventListener("mouseout", mouseOut);
    function mouseOver() {
        document.getElementById("menu").checked = true;
    }
    function mouseOut() {
        document.getElementById("menu").checked = true;
    }

    //touchover
    var el3 = document.getElementById("services");
    function handleStart(ev)
    {
        document.getElementById("menu").checked = true;
    }
    el3.addEventListener("touchstart", handleStart, false);

})(jQuery); // End of use strict