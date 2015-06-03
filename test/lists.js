var commonTests = require('./common/'),
    util =        require('./lib/util');

describe('Mailing Lists', function () {

  before(function () {
    casper.start(util.getUrl('/lists/'));
  });

  commonTests();

  describe('Page Meta', function () {

    it('should have correct page title', function () {
      casper.then(function () {
        "NuPIC Mailing Lists".should.matchTitle;
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
          selector.should.have.text(/NuPIC Mailing Lists/);
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
          selector.should.have.text(/any other topic/);
        });
      });

    }); // p

  }); // content

}); // lists
