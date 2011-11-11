(function() {
  var Base, Pir;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Base = require("./base").base;
  Pir = (function() {
    __extends(Pir, Base);
    function Pir() {
      Pir.__super__.constructor.apply(this, arguments);
    }
    Pir.prototype.negative = function() {
      var domain;
      domain = this.domain.toUpperCase();
      return "NOT FOUND|No match for \"" + domain + "\"";
    };
    Pir.prototype.positive = function() {
      var domain;
      domain = this.domain.toUpperCase();
      return "Domain Name:" + domain;
    };
    Pir.prototype.request = function() {
      return "FULL " + this.domain + '\r\n';
    };
    Pir.prototype.failure = function() {
      return "WHOIS LIMIT EXCEEDED";
    };
    return Pir;
  })();
  exports.pir = Pir;
}).call(this);
