var commonTests = require('./common/'),
    util =        require('./lib/util');

describe('Styleguide', function () {

  before(function () {
    casper.start(util.getUrl('/styleguide/'));
  });

  describe('Page Meta', function () {

    it('should load page styles', function () {
      casper.then(function () {
        "html > head > link[href*='base.css']".should.be.inDOM;
        "html > head > link[href*='kss.css']".should.be.inDOM;
      });
    });

    it('should have correct page title', function () {
      casper.then(function () {
        "NuPIC (http://numenta.org) Living Styleguide (kss-node)".should.matchTitle;
      });
    });

    it('should load page scripts', function () {
      casper.then(function () {
        "html > body script[src*='jquery-1.9.1.min.js']".should.be.inDOM;
        "html > body script[src*='kss.js']".should.be.inDOM;
        "html > body script[src*='main.js']".should.be.inDOM;
      });
    });

  }); // meta

  describe('Main Page Sections', function () {

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
          selector.should.have.text(/Overview/);
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
          selector.should.have.text(/explore our styleguide/);
        });
      });

    }); // p

  }); // main

}); // styleguide
