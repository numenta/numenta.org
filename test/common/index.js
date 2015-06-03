module.exports = function() {
  describe('Common Tests Across Pages', function() {

    // perform common tests meant for all pages
    [
      'response',
      'header',
      'main',
      'footer'
    ].forEach(function(test) {
      var testFn = require('./' + test);
      testFn();
    });

  });
};
