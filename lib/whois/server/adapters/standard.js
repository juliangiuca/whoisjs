(function() {
  var Base, Standard;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Base = require("./base").base;
  Standard = (function() {
    __extends(Standard, Base);
    function Standard() {
      Standard.__super__.constructor.apply(this, arguments);
    }
    return Standard;
  })();
  exports.standard = Standard;
}).call(this);
