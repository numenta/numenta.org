var commonTests = require('./common/'),
    util =        require('./lib/util');

describe('Media Item', function () {

  before(function () {
    casper.start(util.getUrl('/media/2007/05/23/how-brain-science-will-change-computing-ted-2007.html'));
  });

  commonTests();

  describe('Page Meta', function () {

    it('should have correct page title', function () {
      casper.then(function () {
        "How Brain Science Will Change Computing @ TED 2007".should.matchTitle;
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
          selector.should.have.text(/How Brain Science Will Change Computing @ TED 2007/);
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
          selector.should.have.text(/take a new look at the brain/);
        });
      });

    }); // p

  }); // content

}); // media item
