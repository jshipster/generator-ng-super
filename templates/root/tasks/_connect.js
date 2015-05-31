var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = {
  options: {
    port: 7030,
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: 'localhost',
    livereload: 35729
  },
  proxies: [
    {
      context: '/api',
      host: 'localhost',
      port: 3000
    }
  ],
  livereload: {
    options: {
      open: true,
      middleware: function (connect){
        return [
          connect().use(proxySnippet),
          connect.static('./app')
        ];
      }
    }
  }
};
