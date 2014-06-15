Base = require("./base").base;

class Uniregistry extends Base

  request: ->
    domain = this.domain.toLowerCase();
    return domain + '\r\n'

  negative: ->
    return "is available for registration"

  positive: ->
    domain = this.domain.toLowerCase();
    return "Domain Name: " + domain

exports.uniregistry = Uniregistry
