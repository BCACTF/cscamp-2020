# letterhead
Someone from Flag Industries sent me this urgent email! I'm pretty sure there's a flag in it though... maybe they put it in a **header**?

## Flag
```
camp{n0t_5p4m_22FF3KAdbRuHdPt2}
```

## Points
200

## Category
Webex

## Hints
* Header? What's a header?
* What protocol do we use to communicate with websites?
* Are there headers in that protocol?
* How can you access these headers in the web inspector?

## Downloads
None.

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `LH_FLAG` - the flag
* `LH_PORT` - desired port to listen to, default `1337`

**IMPORTANT:** Direct participants to visit `/letter.txt`, not `/`. Visiting `/` will result in a 404 error.

## Solution
The description and hints strongly suggest that the flag is located within the HTTP headers.

Therefore:
```
❯ curl -I http://problemhost/letter.txt | grep "camp{"
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0  1461    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
X-Flag: camp{n0t_5p4m_22FF3KAdbRuHdPt2}
```

## Author
Anthony Li

Spam email courtesy of Edward Feng