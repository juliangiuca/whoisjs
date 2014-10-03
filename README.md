# WhoisJS

A WHOIS module for Node.js written in CoffeeScript. WhoisJS is able to perform lookups on over 200 TLDs.

## Requirements
This library has been tested with Node.JS v0.4.12 and v0.10.26

## How to Install
  $ npm install whoisjs

## How to Use
```
  Whoisjs = require('whoisjs').whois

  who = new Whoisjs()
  domain = "google.fr"

  who.query domain, (response) ->
    state = "available" if response.available()
    state = "unavailable" if response.unavailable()
    state = "timeout" if response.timeout()
    state = "error" if response.error()
    state ||= "unknown"
    callback(domain, state);
```

## How to debug
#### Show me the whois response already!
From the above, `response.raw` contains the response data from the Whois server. console.log it, and see what's happening.  

The `lib/whois/server/adapters` files describe how the response is interpreted via the `positive()`, `negative()`, and `error()` functions.
If you notice the responses aren't being registered correctly, please file an issue or send a pull request, and it'll get fixed up!

## License
WhoisJS is released under the MIT license.

## Credit
WhoisJS is inspired by [Ruby Whois](https://github.com/weppos/whois)

## Author
[Julian Giuca](mailto:whoisjs@eggandjam.com).

Please feel free to contact me with any questions, tips, or suggestions.
