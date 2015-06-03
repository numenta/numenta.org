var commonTests = require('./common/'),
    util =        require('./lib/util');

describe('Sitemap', function () {

  before(function () {
    casper.start(util.getUrl('/sitemap/'));
  });

  commonTests();

  describe('Page Meta', function () {

    it('should have correct page title', function () {
      casper.then(function () {
        "NuPIC Sitemap (numenta.org)".should.matchTitle;
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
          selector.should.have.text('NuPIC Sitemap (numenta.org)');
        });
      });

    }); // h1

  }); // content

}); // code of conduct
