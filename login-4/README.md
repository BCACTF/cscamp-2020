# login 4
Very™ Enterprise® Login™ Page™ Ultimate℠. Now® With℠ [RFC 7519](https://tools.ietf.org/html/rfc7519).

Once™ Again™, We™ Have™ Provided™ A™ Premium™ Guest™ Login™ Ultimate℠ For™ You®!℠ The℠ Username™ Is™ `Guest™`, And® The® Password™ Is™ Also® `Guest℠`. As® You® Can® See™, This℠ Is℠ Very™ Enterprise® Secure™ Ultimate℠!

## Flag
```
camp{CVE-2016-10555_fw4hiI7}
```

## Points
400

## Category
Webex

## Hints
* What's [RFC 7519](https://tools.ietf.org/html/rfc7519)?
* [Another helpful website](https://jwt.io)
* What are some common vulnerabilities with JWT libraries?
* You need to some sort of key to make tokens...

## Downloads
* `server/enterpriseloginsigning.key.pub` (as-is, without a trailing newline)
* `server/index.js`

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `LOGIN4_FLAG` - the flag
* `LOGIN4_USERNAME` - guest username
* `LOGIN4_PASSWORD` - guest password
* `LOGIN4_PORT` - desired port to listen to

## Solution
TBD.

## Author
Anthony Li