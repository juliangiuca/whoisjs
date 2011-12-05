(function() {
  var Serverdef;
  Serverdef = (function() {
    var Standard, tlds, _;
    function Serverdef() {}
    Standard = require("./server/adapters/standard").standard;
    _ = require('underscore');
    tlds = [];
    Serverdef.guess = function(domain) {
      var server;
      server = new Serverdef();
      return server.find_for_tld(domain);
    };
    Serverdef.define_tld = function(allocation, host, adapter) {
      adapter = adapter || new Standard;
      adapter.host = host;
      return tlds.push([allocation, adapter]);
    };
    Serverdef.prototype.find_for_tld = function(domain) {
      var definition, _i, _len;
      for (_i = 0, _len = tlds.length; _i < _len; _i++) {
        definition = tlds[_i];
        if (domain.match(definition[0].replace(/\./g, '\\.') + "$")) {
          return definition;
        }
      }
    };
    Serverdef.tlds = function() {
      return _(tlds).map(function(ele) {
        return ele[0];
      });
    };
    return Serverdef;
  })();
  exports.serverdef = Serverdef;
}).call(this);
