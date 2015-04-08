# NuPIC Website Source

### http://numenta.org

This is the open source code for the NuPIC Website hosted at
[http://numenta.org](http://numenta.org)

[![Build Status](https://travis-ci.org/numenta/numenta.org.png?branch=gh-pages)](https://travis-ci.org/numenta/numenta.org)

## TODO

* Nav > More links fill out
* Serving from `/node_modules/` not gonna work in production
* More detailed documentation on how css works (base.css, base.scss, _sass, etc)
  * Same for html/js
* .com and .org auto monitor and warn, logs, etc.

## Technology

### Client / Browser

* [HTML5](http://en.wikipedia.org/wiki/HTML5) semantic structure and content
* [CSS3](http://en.wikipedia.org/wiki/Cascading_Style_Sheets) visual styling
  * [Bootstrap 3](http://getbootstrap.com/) responsive frontend framework
* [ECMAScript 5+](http://en.wikipedia.org/wiki/ECMAScript)
  (Javascript) functionality and interaction
  * [jQuery 2](http://getbootstrap.com/) responsive frontend framework

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
    * [KSS](https://github.com/kss-node/kss-node) Living Styleguide generator
    * [SASS](http://sass-lang.com/) CSS pre-processor language


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

Build and serve site:
```
npm run dev
```

When the build is finished, visit local URL in browser:

> `http://localhost:4000`

### Staging

  TBD

### Production

* Changes to the `gh-pages` branch of the
  [numenta.org repo](https://github.com/numenta/numenta.org) are automatically
  built and pushed to production by [GitHub Pages](https://pages.github.com/)
* Changes, Pull Requests, and Issues are welcome and appreciated
  * First, please make sure to sign the
    [Contributor licenese](http://numenta.org/licenses/cl/)


## Design

* [Living Styleguide](http://numenta.org/styleguide/)


## Best Practices

* Adhere and sync with the [Living Styleguide](http://numenta.org/styleguide/)
* Mobile First for all design and development
* Be as Standards-compliant as possible
* Support a wide array of users with accessibility needs
* NO spaces in File or Directory Names, use dash "-" instead
* 2-space node-style text file indentation
* Keep local dev Ruby gems updated: `bundle update`
