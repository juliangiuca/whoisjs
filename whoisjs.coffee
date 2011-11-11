class Whois
  
  Serverdef = require("./lib/whois/server").serverdef;
  Client = require("./lib/whois/client").client

  query: (domain, callback) ->
          client = new Client
          this.answer = client.lookup(domain, callback, Serverdef.guess(domain))

exports.whois = Whois
