# postal service
I shipped some flags using this **POST**al service, but I don't know the **method** they're using to deliver them. Can you track the package for me? The tracking number is `1234`.

## Flag
```
camp{h0w_m3th0d1cal_4hdy35c}
```

## Points
200

## Category
Webex

## Hints
* What's **POST**? What's **GET**? What's a **method**?
* Where can you see a reference to the method in the HTML?

## Downloads
None.

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `POSTAL_FLAG` - the flag
* `POSTAL_NUMBER` - tracking number (does not have an impact on the solvepath)
* `POSTAL_PORT` - desired port to listen to

## Solution
The problem returns an HTTP 405 error when attempting to track a package. This indicates that one must send a POST request to track a package, so open the web inspector and change:
```html
<form method="get">
```
to:
```html
<form method="post">
```

This yields the flag.

## Author
Anthony Li
