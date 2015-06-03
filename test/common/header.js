module.exports = function() {

  describe('HEADER tag', function() {

    it('should exist', function() {
      casper.then(function() {
        "header".should.be.inDOM;
      });
    });

    describe('Header NAV tag', function() {

      var selector = "header > nav";

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

      describe('Header NAV Brand', function() {

        var selector = "header > nav a.navbar-brand";

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

      }); // header nav brand

      describe('Header NAV Menu', function() {

        var selector = "header > nav ul.nav";

        it('should exist', function() {
          casper.then(function() {
            selector.should.be.inDOM;
          });
        });

        describe('Header NAV Menu Items', function() {

          describe('Start', function() {

            var selector = "header > nav ul.nav > li:nth-child(1) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text(/Start/);
              });
            });

          }); // start

          describe('Docs', function() {

            var selector = "header > nav ul.nav > li:nth-child(2) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text(/Docs/);
              });
            });

          }); // docs

          describe('Theory', function() {

            var selector = "header > nav ul.nav > li:nth-child(3) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text(/Theory/);
              });
            });

          }); // theory

          describe('Community', function() {

            var selector = "header > nav ul.nav > li:nth-child(4) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text(/Community/);
              });
            });

          }); // community

          describe('Latest', function() {

            var selector = "header > nav ul.nav > li:nth-child(5) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text(/Latest/);
              });
            });

          }); // latest

          describe('More', function() {

            var selector = "header > nav ul.nav > li:nth-child(6) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text(/More/);
              });
            });

          }); // more

        }); // header nav menu items

        describe('Header NAV Menu Dropdown', function() {

          var selector = "header > nav ul.nav > li.dropdown ul.dropdown-menu";

          it('should exist', function() {
            casper.then(function() {
              selector.should.be.inDOM;
            });
          });

          it('should NOT be visible by default', function() {
            casper.then(function() {
              selector.should.not.be.visible;
            });
          });

        });

      }); // header nav menu

    }); // header nav

  }); // header

};
