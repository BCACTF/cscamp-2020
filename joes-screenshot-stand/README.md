# joe's screenshot stand
I found this website providing free, organic screenshots of any webpage! They also have a flag for some reason...

## Flag
```
camp{the_duck_walked_up_to_the_screenshot_stand_103296864}
```

## Points
150

## Category
Webex

## Hints
* How can you impersonate Joe?

## Downloads
None.

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `JSS_FLAG` - the flag
* `JSS_PORT` - desired port to listen to (default: 1337)
* `JSS_TOKEN` - token that the screenshotter uses to authenticate to the flag endpoint
* `JSS_TIMEOUT` - timeout when screenshotting a page, in milliseconds (default: 5000)
* `JSS_RATELIMIT_MAX` - amount of requests to limit an IP address to within a period of `JSS_RATELIMIT_WINDOW` milliseconds (default: 3)
* `JSS_RATELIMIT_WINDOW` - amount of time before rate limits are reset for a given IP address, in milliseconds (default: 60,000)

Given the potentially computationally intensive nature of this problem, some tweaking may be required to ensure that the server remains within a desired CPU/memory/disk usage limit.

## Solution
Copy the URL of the `flag.txt` file into the webpage, then submit the URL. This effectively impersonates Joe, yielding the flag.

A more succint solution is as follows:
```bash
curl -X POST --data-urlencode "url=http://problem-host/flag.txt" http://problem-host/screenshot | imgcat
```