class Client
  require("./definitions/tlds")

  lookup: (domain, callback, server) ->
    server = server[1]
    server.lookup domain, (response) ->
      callback(response)

exports.client = Client
