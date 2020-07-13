# ap ajax
The ~~College Board~~ University Plank has an AP class on AJAX requests. I don't know what that means, but rumor has it they're offering free flags to anyone who can manage a perfect score...

## Flag
```
camp{ajax_h4x0r_EBb2h29uqvvzBKsSYYWF3ALe}
```

## Points
150

## Category
Webex

## Hints
* How do you inspect AJAX in the web browser?
* `script.js` appears to be making a call to an interesting function when it loads the exam questions. What might that do?

## Downloads
None.

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `APH1_FLAG` - the flag
* `APH1_PORT` - desired port to listen to, default `1337`

## Solution
1. Looking at `script.js` or at the Network tab of the Web Inspector reveals that the site fetches the test questions from `/totally/innocuous/api/questions`.
2. Going to this API endpoint yields a JSON response, containing the correct answers.
3. Inputting the correct answers and submitting gives the flag.

## Author
Anthony Li
College Board logo from: pinclipart.com
