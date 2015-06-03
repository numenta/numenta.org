module.exports = function() {

  describe('FOOTER tag', function() {

    it('should exist', function() {
      casper.then(function() {
        "footer".should.be.inDOM;
      });
    });

    describe('Footer Social area', function() {

      var selector = "footer > section.social";

      it('should exist', function() {
        casper.then(function() {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function() {
        casper.then(function() {
          selector.should.be.visible;
        });
      });

    });

    describe('Footer Nav area', function() {

      var selector = "footer > section.nav";

      it('should exist', function() {
        casper.then(function() {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function() {
        casper.then(function() {
          selector.should.be.visible;
        });
      });

    });

    describe('Footer Legal area', function() {

      var selector = "footer > section.legal",
          year = new Date().getFullYear();

      it('should exist', function() {
        casper.then(function() {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function() {
        casper.then(function() {
          selector.should.be.visible;
        });
      });

      it('should have correct copyright text', function() {
        casper.then(function() {
          selector.should.have.text(/Copyright.*Numenta/);
        });
      });

      it('should have correct copyright year', function() {
        casper.then(function() {
          selector.should.have.text(new RegExp(year));
        });
      });

    });

  });
};
