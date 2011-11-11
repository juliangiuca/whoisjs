net = require('net');
queue = new Array
maxQueue = 200
spawned = 0

class Base
  Answer = require('../../answer').answer;

  constructor: ->
    this.port = 43;
    this.timeout = 5000;

  lookup: (domain, callback) ->
    this.domain = domain;
    result = new Answer(this.negative(), this.positive(), this.failure());
    result.domain = domain;
    if (spawned < maxQueue)
      _lookup [result, this.request(), this.port, this.host, this.timeout, (response) ->
        callback(response)]
    else
      queue.push [result, this.request(), this.port, this.host, this.timeout, (response) ->
        callback(response)]

  _lookup = (inArray) ->
    result = inArray[0]
    request = inArray[1]
    port = inArray[2]
    host = inArray[3]
    timeout = inArray[4]
    cb = inArray[5]
    spawned++
    domain = result.domain
    r = result
    r.raw = new Array();
    stream = net.createConnection(port, host);

    stream.setTimeout(timeout) if (timeout?)

    stream.addListener 'connect', () ->
        stream.write(request);

    stream.addListener 'data', (data) ->
      r.raw.push(data);

    stream.addListener 'end', () ->
      stream.end();
      r.raw = r.raw.toString();
      cb(r)
      spawned--
      if (queue.length)
        _lookup(queue.shift());

    stream.addListener 'timeout', () ->
      stream.destroy();
      r.raw = "timeout"
      cb(r);
      spawned--
      if (queue.length)
        _lookup(queue.shift());

    stream.addListener 'error', (e) ->
      stream.destroy();
      console.log("Bad things just happened!" + e);
      r.raw = "error"
      cb(r);
      spawned--
      if (queue.length)
        _lookup(queue.shift());

  request: ->
    return "=" + this.domain + '\r\n';

  negative: ->
    domain = this.domain.toUpperCase();
    return "No match for \"" + domain + "\""

  positive: ->
    domain = this.domain.toUpperCase();
    return "Domain Name: " + domain

  failure: ->
    return "ERROR|WHOIS LIMIT EXCEEDED"

exports.base = Base
