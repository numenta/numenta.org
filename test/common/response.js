module.exports = function () {

  describe('Response', function () {

    it('should have correct response code', function () {
      casper.then(function () {
        expect(casper.currentHTTPStatus).to.equal(200);
      });
    });

    describe('Basic Markup Tree', function () {

      describe('HTML tag', function () {

        it('should exist', function () {
          casper.then(function () {
            "html".should.be.inDOM;
          });
        });

        describe('HEAD tag', function () {

          it('should exist', function () {
            casper.then(function () {
              "html > head".should.be.inDOM;
            });
          });

          describe('TITLE tag', function () {

            it('should exist', function () {
              casper.then(function () {
                "html > head > title".should.be.inDOM;
              });
            });

          });

          describe('LINK tag', function () {

            it('should exist', function () {
              casper.then(function () {
                "html > head > link".should.be.inDOM;
              });
            });

            describe('Stylesheet Loads', function () {

              it('should load Base', function () {
                casper.then(function () {
                  "html > head > link[href*='base.css']".should.be.inDOM;
                });
              });

            });

          });

        }); // head tag

        describe('BODY tag', function () {

          it('should exist', function () {
            casper.then(function () {
              "html > body".should.be.inDOM;
            });
          });

          describe('SCRIPT tag', function () {

            it('should exist', function () {
              casper.then(function () {
                "html > body > script".should.be.inDOM;
              });
            });

            describe('Script Loads', function () {

              it('should load jQuery', function () {
                casper.then(function () {
                  "html > body > script[src*='jquery.min.js']".should.be.inDOM;
                });
              });

              it('should load Bootstrap', function () {
                casper.then(function () {
                  "html > body > script[src*='bootstrap.min.js']".should.be.inDOM;
                });
              });

              it('should load Platform', function () {
                casper.then(function () {
                  "html > body > script[src*='platform.js']".should.be.inDOM;
                });
              });

              it('should load jQuery.universal-analytics', function () {
                casper.then(function () {
                  "html > body > script[src*='jquery.universal-analytics.min.js']".should.be.inDOM;
                });
              });

              it('should load Base', function () {
                casper.then(function () {
                  "html > body > script[src*='base.js']".should.be.inDOM;
                });
              });

            });

          });

        }); // body tag

      }); // html tag

    }); // basic markup tree

  }); // response

}; // module.exports
