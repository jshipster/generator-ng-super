// Proxy all requests to target the local application.

var SERVER_CONFIG = {
  host: 'localhost',
  port: 3030,
  context: '/api'
}

var proxyOptions = require('url').parse(serverAddr(SERVER_CONFIG));
proxyOptions.route = SERVER_CONFIG.context;
var proxyMiddleware = require('proxy-middleware');

function serverAddr(serverConfig){
  return 'http://'+serverConfig.host+':'+serverConfig.port+serverConfig.context;
}

module.exports = {
  server:{
    options: {
      port: 7030,
      base: 'app',
      hostname: 'localhost',
      keepalive: true,
      open: true,
      middleware: function (connect, options) {
        // Proxy all requests to target the local application.
        var middlewares = [];
        options.base.forEach(function(base){
          middlewares.push(connect.static(base));
          middlewares.push(connect.directory(base));
        });
        middlewares.push(proxyMiddleware(proxyOptions));
        return middlewares;
      }
    }
  }
}
