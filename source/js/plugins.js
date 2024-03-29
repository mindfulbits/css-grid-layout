// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

// @codekit-append quiet "includes/plugins/_owl-hero.js"
// @codekit-append quiet "includes/plugins/_owl-intrest.js"
// @codekit-append quiet "includes/plugins/_owl-current.js"
// @codekit-append quiet "includes/plugins/_instagram.js"
// @codekit-append quiet "includes/plugins/_scroll.js"
// @codekit-append quiet "includes/plugins/_nav.js"