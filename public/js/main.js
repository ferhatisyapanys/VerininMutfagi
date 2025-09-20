// Main JavaScript file
(function($) {
  'use strict';
  
  $(document).ready(function() {
    
    // Preloader
    $(window).on('load', function() {
      $('.sb-preloader').fadeOut();
    });
    
    // Menu toggle
    $('.sb-menu-btn').on('click', function() {
      $(this).toggleClass('sb-active');
      $('.sb-navigation').toggleClass('sb-active');
    });
    
    // Info bar toggle
    $('.sb-info-btn').on('click', function() {
      $(this).toggleClass('sb-active');
      $('.sb-info-bar').toggleClass('sb-active');
    });
    
    // Cart toggle
    $('.sb-btn-cart').on('click', function() {
      $('.sb-minicart').toggleClass('sb-active');
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
    
    // Add to cart functionality
    $('.sb-atc').on('click', function(e) {
      e.preventDefault();
      $(this).addClass('sb-added');
      setTimeout(function() {
        $(this).removeClass('sb-added');
      }.bind(this), 2000);
    });
    
    // FAQ toggle
    $('.sb-question').on('click', function() {
      $(this).parent().toggleClass('sb-active');
      $(this).next('.sb-answer').slideToggle();
    });
    
    // Filter functionality
    $('.sb-filter-link').on('click', function(e) {
      e.preventDefault();
      $('.sb-filter-link').removeClass('sb-active');
      $(this).addClass('sb-active');
      
      var filter = $(this).data('filter');
      $('.sb-grid-item').hide();
      $(filter).show();
    });
    
    // Input number controls
    $('.sb-input-number-btn').on('click', function() {
      var input = $(this).siblings('input[type="number"]');
      var value = parseInt(input.val());
      
      if ($(this).hasClass('sb-add')) {
        input.val(value + 1);
      } else if ($(this).hasClass('sb-sub') && value > 1) {
        input.val(value - 1);
      }
    });
    
    // Initialize sliders if Swiper is available
    if (window.Swiper) {
      // Reviews slider
      new Swiper('.sb-reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.sb-reviews-next',
          prevEl: '.sb-reviews-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          }
        }
      });
      
      // Menu sliders
      new Swiper('.sb-short-menu-slider-3i', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.sb-short-menu-next',
          prevEl: '.sb-short-menu-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }
      });
      
      new Swiper('.sb-short-menu-slider-4i', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.sb-short-menu-next',
          prevEl: '.sb-short-menu-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          }
        }
      });
      
      // Blog slider
      new Swiper('.sb-blog-slider-3i', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.sb-blog-next',
          prevEl: '.sb-blog-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }
      });
    }
    
    // Preloader animation
    var preloaderNumber = $('.sb-preloader-number');
    if (preloaderNumber.length) {
      var count = 0;
      var target = parseInt(preloaderNumber.data('count')) || 100;
      var timer = setInterval(function() {
        count++;
        preloaderNumber.text(count.toString().padStart(2, '0'));
        if (count >= target) {
          clearInterval(timer);
          setTimeout(function() {
            $('.sb-preloader').fadeOut();
          }, 500);
        }
      }, 20);
    }
    
  });
  
})(jQuery);