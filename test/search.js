var commonTests = require('./common/'),
    util =        require('./lib/util');

describe('Search', function () {

  before(function () {
    casper.start(util.getUrl('/search/'));
  });

  commonTests();

  describe('Page Meta', function () {

    it('should have correct page title', function () {
      casper.then(function () {
        "NuPIC Search".should.matchTitle;
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
          selector.should.have.text(/Search NuPIC/);
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
          selector.should.have.text(/custom search index/);
        });
      });

    }); // p

  }); // content

}); // search
