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
        var urlcourses2 = $("#iframe-courses2").attr('src');
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
        
        $("#Modal-courses").on('hide.bs.modal', function(){
            $("#iframe-courses2").attr('src', '');
        });
        
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
        $("#Modal-courses").on('show.bs.modal', function(){
            $("#iframe-courses2").attr('src', urlcourses2);
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


$(document).ready(function() {
    if ($(".container_carru").html() != null)  {
    var objects = $(".container_carru #items img");
    var items = $(".container_carru #items img").length - 1;
    var i = 0;
    $(".container_carru #items img").each(function (index) { 
         if (i == 0) {
             $(this).addClass('img_left');
         }else if (i == 1) {
            $(this).addClass('img_center');
         }else if (i == 2) {
           $(this).addClass('img_rigth');
         };
         i++;
    }); 
    var dataimg_Cen = 1;
    $("#arrowleft").on( "click", function( event ) {
    $(".container_carru #items img").attr('class', '');
        if (dataimg_Cen == 0) {
            dataimg_left = items;
        }else{
            dataimg_left = dataimg_Cen - 1;
        };
        if (dataimg_left == 0) {
            dataimg_rigth = items;
        }else{
            dataimg_rigth = dataimg_left - 1;
        };
          //center
          img_center = $(objects[dataimg_Cen]);
          img_center.addClass('animaterigthR');
          img_center.addClass("img_rigth");
          //left 
          img_left =  $(objects[dataimg_left]);
          img_left.addClass("animaterigthC");
          img_left.addClass("img_center");
          //rigght
          img_rigth =  $(objects[dataimg_rigth]);
          img_rigth.addClass("animaterigthL");
          img_rigth.addClass("img_left");
          if (dataimg_Cen == 0) {
              dataimg_Cen = items; 
              }else{
                  dataimg_Cen = dataimg_Cen - 1;
           }; 
      });
      //izquierdo
     $("#arrowrigth").on( "click", function( event ) {
         $(".container_carru #items img").attr('class', '');
        if (dataimg_Cen == items) {
            dataimg_rigth = 0;
        }else{
            dataimg_rigth = dataimg_Cen + 1;
        };
        if (dataimg_rigth == items) {
            dataimg_left = 0;
        }else{
            dataimg_left = dataimg_rigth + 1;
        };
        //center
          img_center = $(objects[dataimg_Cen]);
          img_center.addClass('animateleftL');
          img_center.addClass("img_left");
          // //  //left 
          img_left =  $(objects[dataimg_left]);
          img_left.addClass("animateleftR");
          img_left.addClass("img_rigth");
          // // // //rigght
          img_rigth =  $(objects[dataimg_rigth]);
          img_rigth.addClass("animateleftC");
          img_rigth.addClass("img_center");
          //
          if(dataimg_Cen == items) {
              dataimg_Cen = 0;
              }else{
                dataimg_Cen = dataimg_Cen + 1;
          }; 
      });
    //sweet
    var myElement = document.getElementsByClassName('container_carru')[0];
    var mc = new Hammer(myElement);
    mc.on("swipeleft", function(ev) {
         $("#arrowrigth" ).trigger( "click" );
    });
    mc.on("swiperight", function(ev) {
         $("#arrowleft" ).trigger( "click" );
    });
    }
    });
    
        