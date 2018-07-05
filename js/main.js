/**
 * Main namespace for our stuff.
 *
 * @namespace
 */
var UI = UI || {};

/**
 * @module
 * @param {jQuery} $
 */
UI.Main = (function ($) {
  "use strict";

  return {
    init: function () {
      this.avoidConsoleErrors();
    },
    avoidConsoleErrors: function() {
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
    }
  }
})(jQuery || $);

$(document).ready(function () {
  UI.Main.init();
});
