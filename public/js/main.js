$(document).ready(function() {
  'use strict';

  // Preloader
  var preloader = $('.sb-preloader');
  var preloaderNumber = $('.sb-preloader-number');
  var count = preloaderNumber.data('count') || 100;
  
  // Animate preloader
  $({countNum: 0}).animate({countNum: count}, {
    duration: 2000,
    easing: 'linear',
    step: function() {
      preloaderNumber.text(Math.floor(this.countNum));
    },
    complete: function() {
      preloaderNumber.text(this.countNum);
      setTimeout(function() {
        preloader.fadeOut(500, function() {
          preloader.remove();
        });
      }, 300);
    }
  });

  // Menu button functionality
  $('.sb-menu-btn').on('click', function() {
    $(this).toggleClass('sb-active');
    $('#sb-dynamic-menu').toggleClass('sb-active');
  });

  // Info button functionality  
  $('.sb-info-btn').on('click', function() {
    $(this).toggleClass('sb-active');
    $('.sb-info-bar').toggleClass('sb-active');
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 1000);
    }
  });

  // Form submission
  $('#form').on('submit', function(e) {
    e.preventDefault();
    $('.sb-main-content').hide();
    $('.sb-success-result').show();
  });

  // Initialize swiper if available
  if (typeof Swiper !== 'undefined') {
    try {
      new Swiper('.sb-short-menu-slider-3i', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.sb-short-menu-next',
          prevEl: '.sb-short-menu-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }
      });
    } catch (error) {
      console.log('Swiper initialization failed:', error);
    }
  }
});