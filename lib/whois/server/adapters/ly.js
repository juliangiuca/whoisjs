(function() {
  var Base, Ly;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Base = require("./base").base;
  Ly = (function() {
    __extends(Ly, Base);
    function Ly() {
      Ly.__super__.constructor.apply(this, arguments);
    }
    Ly.prototype.negative = function() {
      var domain;
      domain = this.domain.toUpperCase();
      return "Not found|NOT FOUND|No match for \"" + domain + "\"";
    };
    Ly.prototype.positive = function() {
      var domain;
      domain = this.domain.toLowerCase();
      return "Domain Name:\\s+" + domain;
    };
    Ly.prototype.request = function() {
      var domain;
      domain = this.domain.toLowerCase();
      return domain + '\r\n';
    };
    Ly.prototype.failure = function() {
      return "WHOIS LIMIT EXCEEDED|Domain wrong format";
    };
    return Ly;
  })();
  exports.ly = Ly;
}).call(this);
