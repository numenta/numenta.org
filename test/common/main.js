module.exports = function() {
  describe('Main Content', function() {

    it('should have a main content area', function() {
      casper.then(function() {
        "main".should.be.inDOM;
      });
    });

  });
};
