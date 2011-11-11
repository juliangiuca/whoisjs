class Answer
  constructor: (negative_regex, positive_regex, error_regex) ->
    this.nRegex = new RegExp(negative_regex)
    this.pRegex = new RegExp(positive_regex)
    this.eRegex = new RegExp(error_regex)
    this.raw = new Array

  isAvailable: ->
    result = false
    if this.raw
      if this.raw == "timeout"
        this.reason = "timeout"
      else if this.error()
        this.reason = "error"
      else if this.positive()
        this.reason = "Domain taken!"
      else
        result = !this.positive() and this.negative()

    return result

  available: ->
    !this.positive() and !this.error() and this.negative()

  unavailable: ->
    this.positive() and !this.negative() and !this.error()

  timeout: ->
    this.raw == "timeout"

  positive: ->
    !!this.raw.match(this.pRegex)

  negative: ->
    !!this.raw.match(this.nRegex)

  error: ->
    !!this.raw.match(this.eRegex) || this.raw == "error"

exports.answer = Answer
