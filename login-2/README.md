# login 2
In this SeQueL to our Secure™ Login™ Page™, We™ have switched from JavaScriptLogin™ to a Very™ Secure™ ServerSideLogin™ technology. That's why We™ call it the Very™ Secure™ Login™ Page™! Good luck logging in now!

## Flag
```
camp{sql_1nj3ct10n_1s_quite_nice_txWks8wC}
```

## Points
200

## Category
Webex

## Hints
* I had to **inject** some capital letters into this word: **S**e**Q**ue**L**
* Try searching up things like `sql ctf` on Google.
* This problem is not solvable using Inspect Element.

## Downloads
None.

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `LOGIN2_FLAG` - the flag
* `LOGIN2_PASSWORD` - the password for the `admin` user
* `LOGIN2_PORT` - desired port to listen to

## Solution
1. The problem description and hints strongly hint at a possible SQLi vulnerability, so enter `' OR 1=1--` as the username and a dummy value in the password field.
2. Get the flag.

## Author
Anthony Li
