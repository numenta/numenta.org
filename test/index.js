var commonTests = require('./common/'),
    util =        require('./lib/util');

describe('Homepage', function () {

  before(function () {
    casper.start(util.getUrl('/'));
  });

  commonTests();

  describe('Page Meta', function () {

    it('should load page styles', function () {
      casper.then(function () {
        "html > head > link[href*='index.css']".should.be.inDOM;
      });
    });

    it('should have correct page title', function () {
      casper.then(function () {
        "NuPIC | Numenta Platform for Intelligent Computing".should.matchTitle;
      });
    });

    it('should load page scripts', function () {
      casper.then(function () {
        "html > body > script[src*='index.js']".should.be.inDOM;
      });
    });

  }); // meta

  describe('Page Content Sections', function () {

    describe('Hero Section', function () {

      var selector = "main > section.hero";

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

      describe('h1 Title', function () {

        var selector = "main > section.hero h1";

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
            selector.should.have.text(/Welcome/);
          });
        });

      }); // h1

      describe('Paragraph Text', function () {

        var selector = "main > section.hero p";

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
            selector.should.have.text(/both space and time/);
          });
        });

      }); // p

      describe('Features', function () {

        var selector = "main > section.hero ul.features";

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

      }); // features

    }); // hero

    describe('Start Section', function () {

      var selector = "main > section.start";

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

      describe('Heading', function () {

        var selector = "main > section.start h2";

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
            selector.should.have.text(/Start/);
          });
        });

      }); // heading

      describe('Content', function () {

        var selector = "main > section.start p";

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
            selector.should.have.text(/learning curve/);
          });
        });

      }); // content

    }); // start

    describe('Docs Section', function () {

      var selector = "main > section.docs";

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

      describe('Heading', function () {

        var selector = "main > section.docs h2";

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
            selector.should.have.text(/Docs/);
          });
        });

      }); // heading

      describe('Content', function () {

        var selector = "main > section.docs p";

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
            selector.should.have.text(/how to use/);
          });
        });

      }); // content

    }); // docs

    describe('Theory Section', function () {

      var selector = "main > section.theory";

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

      describe('Heading', function () {

        var selector = "main > section.theory h2";

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
            selector.should.have.text(/Theory/);
          });
        });

      }); // heading

      describe('Content', function () {

        var selector = "main > section.theory p";

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
            selector.should.have.text(/a set of algorithms/);
          });
        });

      }); // content

    }); // theory

    describe('Community Section', function () {

      var selector = "main > section.community";

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

      describe('Heading', function () {

        var selector = "main > section.community h2";

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
            selector.should.have.text(/Community/);
          });
        });

      }); // heading

      describe('Content', function () {

        var selector = "main > section.community p";

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
            selector.should.have.text(/a new era/);
          });
        });

      }); // content

    }); // community

    describe('Latest Section', function () {

      var selector = "main > section.latest";

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

      describe('Heading', function () {

        var selector = "main > section.latest h2";

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
            selector.should.have.text(/Latest/);
          });
        });

      }); // heading

      describe('Content', function () {

        var selector = "main > section.latest p";

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
            selector.should.have.text(/with the latest/);
          });
        });

        describe('Sections', function () {

          var selector = "main > section.latest h3";

          it('should exist', function () {
            casper.then(function () {
              selector.should.have.text(/Blog/);
              selector.should.have.text(/Events/);
              selector.should.have.text(/News/);
              selector.should.have.text(/Media/);
            });
          });

        });

      }); // content

    }); // latest

  }); // content

}); // index
