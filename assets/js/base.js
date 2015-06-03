/**
 * Global javascript, loads on every page
 */

'use strict';

(function () {
  $(document).ready(function () {

    // Activate any/all Bootstrap Popovers on page
    $('[data-toggle="popover"]').popover({
      placement:  'auto',
      trigger:    'hover focus'
    });

    // "Back-to-top" widget functionality
    $('#back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: '0px' });
    });

    // activate all advanced Google Analytics tracking
    jQuery(function($) {
      $.universalAnalytics();
    });

  });
})();
