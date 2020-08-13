# login 3
We have improved our Very™ Secure™ ServerSideLogin™ technology to be Enterprise® ready and certified for SOS-404™! That's why We™ call it the Very™ Enterprise® Login™ Page™, already Used™ by Determined™ Enterprise®s such as Generic™ Cookie™ Company™! With™ Very™ Enterprise® Login™ Page™, the Flag™ is only accessible by Admins™!

> Very™ Enterprise® helped our IT team pass our SOS-404™ audit with flying colors!
> 
> *- John Pesche, CISO, Parts Limited®*

Our™ Very™ Enterprise® Login™ Page™ is so Secure™ that We™ have even provided a Premium™ Guest™ Login™ for you! The Username™ is `guest`, and the Password™ is also `guest`. As you can See™, this is Very™ Secure™!

## Flag
```
camp{c00k135_1n_th3_3nt3rpr1s3_HJ67tfijk}
```

## Points
300

## Category
Webex

## Hints
* When you log in to a site, how does the website keep track of who you are?
* What are cookies? How can you edit them in the Web Inspector?

## Downloads
None.

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `LOGIN3_FLAG` - the flag
* `LOGIN3_USERNAME` - guest username
* `LOGIN3_PASSWORD` - guest password
* `LOGIN3_PORT` - desired port to listen to

## Solution
1. The problem description and hints strongly hint at a cookie m modification vulnerability.
2. Log in as guest.
3. Set the `is_admin` cookie to `1`.
4. Reload and get the flag.

Alternatively:
```
curl -b "logged_in=1; is_admin=1;" http://localhost:1337/flag | grep 'camp{'
```

## Author
Anthony Li
