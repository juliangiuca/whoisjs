(function() {
  var Base, maxQueue, net, queue, spawned;
  net = require('net');
  queue = new Array;
  maxQueue = 200;
  spawned = 0;
  Base = (function() {
    var Answer, _lookup;
    Answer = require('../../answer').answer;
    function Base() {
      this.port = 43;
      this.timeout = 5000;
    }
    Base.prototype.lookup = function(domain, callback) {
      var result;
      this.domain = domain;
      result = new Answer(this.negative(), this.positive(), this.failure());
      result.domain = domain;
      if (spawned < maxQueue) {
        return _lookup([
          result, this.request(), this.port, this.host, this.timeout, function(response) {
            return callback(response);
          }
        ]);
      } else {
        return queue.push([
          result, this.request(), this.port, this.host, this.timeout, function(response) {
            return callback(response);
          }
        ]);
      }
    };
    _lookup = function(inArray) {
      var cb, domain, host, port, r, request, result, stream, timeout;
      result = inArray[0];
      request = inArray[1];
      port = inArray[2];
      host = inArray[3];
      timeout = inArray[4];
      cb = inArray[5];
      spawned++;
      domain = result.domain;
      r = result;
      r.raw = new Array();
      stream = net.createConnection(port, host);
      if ((timeout != null)) {
        stream.setTimeout(timeout);
      }
      stream.addListener('connect', function() {
        return stream.write(request);
      });
      stream.addListener('data', function(data) {
        return r.raw.push(data);
      });
      stream.addListener('end', function() {
        stream.end();
        r.raw = r.raw.toString();
        cb(r);
        spawned--;
        if (queue.length) {
          return _lookup(queue.shift());
        }
      });
      stream.addListener('timeout', function() {
        stream.destroy();
        r.raw = "timeout";
        cb(r);
        spawned--;
        if (queue.length) {
          return _lookup(queue.shift());
        }
      });
      return stream.addListener('error', function(e) {
        stream.destroy();
        console.log("Bad things just happened!" + e);
        r.raw = "error";
        cb(r);
        spawned--;
        if (queue.length) {
          return _lookup(queue.shift());
        }
      });
    };
    Base.prototype.request = function() {
      return "=" + this.domain + '\r\n';
    };
    Base.prototype.negative = function() {
      var domain;
      domain = this.domain.toUpperCase();
      return "No match for \"" + domain + "\"";
    };
    Base.prototype.positive = function() {
      var domain;
      domain = this.domain.toUpperCase();
      return "Domain Name: " + domain;
    };
    Base.prototype.failure = function() {
      return "ERROR|WHOIS LIMIT EXCEEDED";
    };
    return Base;
  })();
  exports.base = Base;
}).call(this);
