Base = require("./base").base;
class Ly extends Base

  negative: ->
    domain = this.domain.toUpperCase();
    return "Not found|NOT FOUND|No match for \"" + domain + "\""

  positive: ->
    domain = this.domain.toLowerCase();
    return "Domain Name:\\s+" + domain

  request: ->
    domain = this.domain.toLowerCase();
    return domain + '\r\n'

  failure: ->
    return "WHOIS LIMIT EXCEEDED|Domain wrong format"

exports.ly = Ly
