# NuPIC Website Sourcecode

This is the open source code for the NuPIC Website hosted at
[http://numenta.org](http://numenta.org)

[![Build Status](https://travis-ci.org/numenta/numenta.org.png?branch=gh-pages)](https://travis-ci.org/numenta/numenta.org)


## Tech Stack

### Client

* Web Platform:
  * [HTML5](http://en.wikipedia.org/wiki/HTML5) markup semantic page structure
    * HTML pages are found in `./**/*.html`
      * These pages are wrapped in layout templates found in `./_layouts/`
      * These pages pull in partial include templates from `./_includes/`
        * Pages and Includes will load and render Markdown `.md` text content
          from the `./_includes/content/` directory
    * Final output is generated and served from the `./_site/` directory
  * [CSS3](http://en.wikipedia.org/wiki/Cascading_Style_Sheets) styling with
    [SASS](http://sass-lang.com/) preprocessing
    * Pages load CSS from the `./assets/css/` directory.
      * These files originate as `.scss` SASS files
        * The SASS files include template partials from the `./_sass/` directory
  * [JS](http://en.wikipedia.org/wiki/ECMAScript) functionality
* [jQuery](http://jquery.com/) dom helper lib
* [Bootstrap](http://getbootstrap.com/) responsive frontend framework

### Server

* [Git](http://git-scm.com/) source control
  * [GitHub](http://github.com) source git hosting
    * [GitHub Pages](https://pages.github.com/) web hosting
    * Source Repo: https://github.com/numenta/numenta.org
* [Ruby](https://www.ruby-lang.org/) lang
  * [RubyGems](https://rubygems.org/) packages
    * [bundler](http://bundler.io/) packager
    * [jekyll](http://jekyllrb.com/) static site generator
    * [github-pages](https://github.com/github/pages-gem) local devel
* [Node.js](https://nodejs.org/) lang
  * [npm](https://www.npmjs.com/) packages
    * [Gulp](https://github.com/gulpjs/gulp) streaming build tooling
    * [KSS](https://github.com/kss-node/kss-node) Living Styleguide generator
    * [SASS](http://sass-lang.com/) CSS pre-processor language
    * Web Testing: [Mocha](http://mochajs.org/),
      [Casper + Phantom](http://casperjs.org/),
      [Chai + Should](http://chaijs.com/guide/styles/#should)


## Build

### Prerequisites

Example of a quick Mac OS X setup:
```
brew install git ruby node
git clone git@github.com:numenta/numenta.org.git
cd numenta.org
gem install bundler
bundle install
npm install
```

### Development

Build and serve local dev site:
```
npm run dev
```

Visit local development site:

> http://localhost:4000

Run webtests and linkchecks against local environment:
```
# use defaults
npm run test

# customize test target if needed (defaults listed)
TEST_HOST=http://localhost TEST_PORT=8008 TEST_PATH=  npm run test
```

### Staging

Build:
* Modify `_config.yml` and set `baseurl` to be `/numenta.org`
* Push changes to your own github `username/gh-pages` branch
* *Note:* Living Styleguide doesn't work fully on Staging yet, it doesn't know
  about the gh-pages Jekyll `baseurl` setting.
* Your own staging site will build and be available:

> `http://username.github.io/numenta.org/`

Test against Staging:
```
TEST_HOST=http://username.github.io TEST_PORT=80 TEST_PATH=/numenta.org npm run test
```

### Production

Build:
* In `_config.yml` set `baseurl` to be `http://numenta.org`
* Changes to the `gh-pages` branch of the
  [numenta.org repo](https://github.com/numenta/numenta.org) are automatically
  built and pushed to production by [GitHub Pages](https://pages.github.com/)
* Changes, Pull Requests, and Issues are welcome and appreciated
  * First, please make sure to sign the
    [Contributor licenese](http://numenta.org/licenses/cl/)
  * [Create a Pull Request](https://help.github.com/articles/using-pull-requests)
    against `numenta/numenta.org:gh-pages` branch
* Production build is available at the main URL:

> `http://numenta.org`

Test against Production:
```
TEST_HOST=http://numenta.org TEST_PORT=80 TEST_PATH=  npm run test
```


## Best Practices

### Design

* [Living Styleguide](http://numenta.org/styleguide/)
* Mobile First for all design
* Standards-compliant as possible
* Support a wide array of users with accessibility needs

### Development

* Keep Standards-compliant as possible
* Support a wide array of users with accessibility needs
* [Node Style](https://github.com/felixge/node-style-guide): 2 space text file
  indentation, 80-width text files, etc.
* Clean simple file and directory names, no spaces (please use dash "-" instead)
  with lowercase and alphanumeric characters.
* Keep local dev Ruby gems updated: `bundle update`
* Modules:
  * `node_modules` meant for inclusion by the browser (jquery, bootstrap, etc)
    are stored in source control, and copied to `_site/node_modules` on build,
    where the browser can get to them.
  * `node_modules` not meant for the frontend (devDependencies, etc) should
    be ignored in `.gitignore` and `_config.yml`.
* Links:
  * DO NOT forget to include the `{{ site.baseurl }}` template variable on
    internal links.
    * If you forget to use it, you will break staging sites.
  * Use `&amp;` instead of `&` within links.
* Markdown:
  * Main content text is stored as markdown here: `_includes/content/`
    * Quick snippet to load a Markdown text block:
      * `{% include base/markdown.html file='text.md' %}`
  * Be careful with links, use `&amp;` instead of `&`.
    * (Local Jekyll may run fine, but GitHub Pages may die without warning.)
