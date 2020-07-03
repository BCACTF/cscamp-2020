# login 1
Welcome™ to our Secure™ Login™ Page™! With our speedy JavaScriptLogin™ technology, We™ Assure™ you that our Page™ is Secure™ enough to prevent you from logging in as the `admin` user.

## Flag
```
camp{client_side_is_a_terrible_idea_Fw9dgptH}
```

## Points
100

## Category
Webex

## Hints
* Try poking around in the web inspector and see if you can find something new.
* What's JavaScript? Where can you find it in HTML?

## Downloads
None.

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `LOGIN1_FLAG` - the flag
* `LOGIN1_PASSWORD` - the password for the login form
* `LOGIN1_PORT` - desired port to listen to

## Solution
1. Open `securelogin.js` in the web inspector.
2. Find the line checking for a hardcoded username and password:
   ```javascript
   if (username === "admin" && password === "thisisaverysecurepasswordhahaaaaaa") {
   ```
3. Copy the password into the login field. The flag should appear above the username field in a box.

## Author
Anthony Li
