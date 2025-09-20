// Smooth scroll polyfill
(function() {
  'use strict';
  
  function polyfill() {
    var w = window;
    var d = document;
    
    if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    }
    
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;
    
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };
    
    var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
    
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }
    
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
    
    function smoothScroll(el, x, y) {
      var scrollX = el.scrollLeft;
      var scrollY = el.scrollTop;
      var deltaX = x - scrollX;
      var deltaY = y - scrollY;
      var start = now();
      
      (function step() {
        var elapsed = now() - start;
        var progress = elapsed / SCROLL_TIME;
        
        if (progress > 1) {
          progress = 1;
        }
        
        var amount = ease(progress);
        
        el.scrollLeft = scrollX + deltaX * amount;
        el.scrollTop = scrollY + deltaY * amount;
        
        if (progress < 1) {
          w.requestAnimationFrame(step);
        }
      })();
    }
    
    w.scroll = w.scrollTo = function() {
      if (arguments[0] === undefined) {
        return;
      }
      
      if (arguments[0].behavior === 'smooth') {
        smoothScroll(d.body, arguments[0].left || 0, arguments[0].top || 0);
        return;
      }
      
      original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : arguments[0], arguments[0].top !== undefined ? arguments[0].top : arguments[1]);
    };
    
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      if (arguments[0] === undefined) {
        return;
      }
      
      if (arguments[0].behavior === 'smooth') {
        smoothScroll(this, arguments[0].left || 0, arguments[0].top || 0);
        return;
      }
      
      original.elementScroll.call(this, arguments[0].left !== undefined ? arguments[0].left : arguments[0], arguments[0].top !== undefined ? arguments[0].top : arguments[1]);
    };
  }
  
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = { polyfill: polyfill };
  } else {
    polyfill();
  }
})();