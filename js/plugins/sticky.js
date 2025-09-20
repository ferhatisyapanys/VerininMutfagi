// Sticky - minimal implementation
(function() {
  'use strict';
  
  window.Sticky = function(element, options) {
    this.element = element;
    this.options = options || {};
    this.init();
  };
  
  window.Sticky.prototype = {
    init: function() {
      console.log('Sticky initialized');
    }
  };
})();