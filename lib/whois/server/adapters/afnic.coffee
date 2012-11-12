Base = require("./base").base;
class Afnic extends Base

  negative: ->
    return "No entries found in the AFNIC Database."

  positive: ->
    return "status:      ACTIVE"

  request: ->
    return this.domain + '\r\n'

  failure: ->
    return "Too many requests..."

exports.afnic = Afnic
