(function() {
  var Client;
  Client = (function() {
    function Client() {}
    require("./definitions/tlds");
    Client.prototype.lookup = function(domain, callback, server) {
      server = server[1];
      return server.lookup(domain, function(response) {
        return callback(response);
      });
    };
    return Client;
  })();
  exports.client = Client;
}).call(this);
