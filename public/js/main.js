$(document).ready(function() {
  'use strict';

  // Check if jQuery is loaded
  if (typeof $ === 'undefined') {
    console.error('jQuery is not loaded');
    return;
  }

  try {
    // Preloader
    var preloader = $('.sb-preloader');
    if (preloader.length) {
      var preloaderNumber = $('.sb-preloader-number');
      var count = preloaderNumber.data('count') || 100;
      
      $({countNum: 0}).animate({countNum: count}, {
        duration: 2000,
        easing: 'linear',
        step: function() {
          preloaderNumber.text(Math.floor(this.countNum));
        },
        complete: function() {
          preloaderNumber.text(this.countNum);
          setTimeout(function() {
            preloader.fadeOut();
          }, 500);
        }
      });
    }
  } catch (error) {
    console.error('Error in main.js:', error);
  }
});