/**
 * Homepage script
 */

'use strict';


/**
 * Homepage Start section - dynamic functionality class
 * @class StartPage
 */
var Page = function () {
  this.platform = window.platform;
  this.os =       this.platform.os;
  this.family =   this.os.family;
};

/**
 * Download button - dynamic functionality
 */
Page.prototype.AugmentDownloadButton = function () {
  var $form =   $('form');
  var $os =     $('#os');
  var $ver =    $('#ver');
  var url =     window.Numenta.url.download;
  var version = url.split('/').pop();

  // switch button from general target url to specific versioned url
  $form.attr('action', url);

  // set overlay button click target, i don't trust the form action fully
  $form.find('button').on('click', function (event) {
    event.preventDefault();
    window.location.href = url;
    return;
  });

  // show download semver version release number
  $ver.text('Version ' + version);

  // show users operating system name
  // $os.text(this.family); // github issues #185 #197
}; // AugmentDownloadButton

/**
 * Quickstart console example - dynamic change per OS
 */
Page.prototype.AugmentQuickstartConsole = function () {
  var $console =  $('#console');
  var key = this.family.replace(/\s/g, '').toLowerCase();
  var $element;

  if(key === 'ubuntu') key = 'linux';
  $element = $console.find('.' + key);
  $console.children().addClass('hidden');
  $element.removeClass('hidden');
}; // AugmentQuickstartConsole


/**
 * Homeage Script - Main
 */
(function () {
  $(document).ready(function () {

    Numenta.StartPage = new Page();

    // Homepage Start section, Download button: browser/platform customizations.
    Numenta.StartPage.AugmentDownloadButton();
    Numenta.StartPage.AugmentQuickstartConsole();

  });
})();
