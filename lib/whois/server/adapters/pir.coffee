Base = require("./base").base;
class Pir extends Base

  negative: ->
    domain = this.domain.toUpperCase();
    return "NOT FOUND|No match for \"" + domain + "\""

  positive: ->
    domain = this.domain.toUpperCase();
    return "Domain Name:" + domain

  request: ->
    return "FULL " + this.domain + '\r\n'

  failure: ->
    return "WHOIS LIMIT EXCEEDED"

exports.pir = Pir
