class Serverdef
  Standard = require("./server/adapters/standard").standard;
  _ = require('underscore')
  

  tlds = []

  Serverdef.guess = (domain) ->
    server = new Serverdef();
    server.find_for_tld(domain)

  Serverdef.define_tld = (type, allocation, host, adapter) ->
    if type == "tld"
      adapter = adapter || new Standard
      adapter.host = host
      tlds.push([allocation, adapter])

  find_for_tld: (domain) ->
    for definition in tlds
      return definition if domain.match(definition[0].replace(/\./g, '\\.') + "$")

  Serverdef.tlds = () ->
    _(tlds).map((ele) -> ele[0])

exports.serverdef = Serverdef
