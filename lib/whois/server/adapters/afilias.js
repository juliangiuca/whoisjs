(function() {
  var Afilias, Base;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Base = require("./base").base;
  Afilias = (function() {
    __extends(Afilias, Base);
    function Afilias() {
      Afilias.__super__.constructor.apply(this, arguments);
    }
    Afilias.prototype.negative = function() {
      var domain;
      domain = this.domain.toUpperCase();
      return "No match for \"" + domain + "\".";
    };
    Afilias.prototype.positive = function() {
      var domain;
      domain = this.domain.toUpperCase();
      return "Domain Name \"" + domain + "\"";
    };
    return Afilias;
  })();
  exports.afilias = Afilias;
}).call(this);
