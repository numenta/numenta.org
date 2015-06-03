var opts = casper.cli.options || {};
var host = opts.TEST_HOST || 'http://localhost';
var port = opts.TEST_PORT || 8008;
var path = opts.TEST_PATH || '';

module.exports = {

  getUrl: function(target) {
    if(! host.match(/http:\/\//)) {
      host = 'http://' + host;
    }
    return [
      host,
      ':',
      port,
      path,
      target
    ].join('');
  }

};
