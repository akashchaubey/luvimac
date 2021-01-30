(function ($) {

  "use strict";

        $(document).ready(function(){
        var screen_width = $(document).width();
        if(screen_width >= 992){
            $(this).find('.dropdown').hover(function() {
                $(this).addClass('show');
                $(this).find('.dropdown-menu').first().addClass('show');
            }, function() {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').first().removeClass('show');
            });
        }
        $('.dropdown-menu a.doggle-menu').on('click', function(e) {
          if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
          }
          var $subMenu = $(this).next(".dropdown-menu");
          $subMenu.toggleClass('show');

          $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
          });
          return false;
        });
        
      });


    // fixed header
    $(window).on('scroll', function(){
      var scrollValue =$(window).scrollTop();
        if (scrollValue >= 160) {
          $('header') .addClass('fixed wow animate__animated animate__fadeInDown');
        } else {
          $('header') .removeClass('fixed wow animate__animated animate__fadeInDown')
        }
    });
    

    //add class on header for change color

    $(document).ready(function(){
      $("#button-click").click(function(){
        if($("#header").hasClass('sEfect')){
          $('#header').removeClass('sEfect');
        }
        else{
          $('#header').addClass('sEfect');
        }
      });
    });

    // img to svg tag

  //   jQuery('img.svg').each(function(){
  //     var $img = jQuery(this);
  //     var imgID = $img.attr('id');
  //     var imgClass = $img.attr('class');
  //     var imgURL = $img.attr('src');

  //     jQuery.get(imgURL, function(data) {
  //         var $svg = jQuery(data).find('svg');
  //         if(typeof imgID !== 'undefined') {
  //             $svg = $svg.attr('id', imgID);
  //         }
  //         if(typeof imgClass !== 'undefined') {
  //             $svg = $svg.attr('class', imgClass+' replaced-svg');
  //         }
  //         $svg = $svg.removeAttr('xmlns:a');
  //         $img.replaceWith($svg);

  //     }, 'xml');
  // });


  /* svg animate */

  // function isScrolledIntoView(elem) {
  //   var docViewTop = $(window).scrollTop();
  //   var docViewBottom = docViewTop + $(window).height();
  //   var elemTop = $(elem).offset().top;
  //   var elemBottom = elemTop + $(elem).height();
  //   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  // }

  // $(window).scroll(function () {
  //     $('#svg-animate').each(function () {
  //         if (isScrolledIntoView(this) === true) {
  //             $(this).addClass('visible');
  //         }
  //     });
  // });


  }(jQuery));	


  