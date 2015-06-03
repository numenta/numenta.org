var commonTests = require('./common/'),
    util =        require('./lib/util');

describe('Blog Item', function () {

  before(function () {
    casper.start(util.getUrl('/blog/2013/06/03/introducing-nupic.html'));
  });

  commonTests();

  describe('Page Meta', function () {

    it('should have correct page title', function () {
      casper.then(function () {
        "Introducing NuPIC".should.matchTitle;
      });
    });

  }); // meta

  describe('Page Content', function () {

    describe('h1 Title', function () {

      var selector = "main section h1";

      it('should exist', function () {
        casper.then(function () {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function () {
        casper.then(function () {
          selector.should.be.visible;
        });
      });

      it('should contain valid text', function () {
        casper.then(function () {
          selector.should.have.text(/Introducing NuPIC/);
        });
      });

    }); // h1

    describe('Paragraph Text', function () {

      var selector = "main section p";

      it('should exist', function () {
        casper.then(function () {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function () {
        casper.then(function () {
          selector.should.be.visible;
        });
      });

      it('should contain valid text', function () {
        casper.then(function () {
          selector.should.have.text(/good place to be/);
        });
      });

    }); // p

  }); // content

}); // blog item
