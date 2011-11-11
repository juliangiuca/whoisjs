Base = require("./base").base;

class Afilias extends Base

  negative: ->
    domain = this.domain.toUpperCase();
    return "No match for \"" + domain + "\"."

  positive: ->
    domain = this.domain.toUpperCase();
    return "Domain Name \"" + domain + "\""

exports.afilias = Afilias
