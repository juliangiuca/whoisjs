Base = require("./base").base;

class Io extends Base


  request: ->
    return this.domain + '\r\n';

  negative: ->
    domain = this.domain.toUpperCase();
    return "is available for purchase"

  positive: ->
    domain = this.domain.toUpperCase();
    return "Status : Live"

  failure: ->
    return "ERROR|WHOIS LIMIT EXCEEDED|DOMAIN RESERVED"

exports.io = Io
