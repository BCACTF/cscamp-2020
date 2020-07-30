# ap gql
The ~~College Board~~ University Plank saga continues. They say they're using some sort of fancy "graph query language" this time which should prevent academic dishonesty.

## Flag
```
camp{1ntr0sp3c10n_yXLw7nXa2zNvX5Nd}
```

## Points
350

## Category
Webex

## Hints
* Uh oh, it looks like the problem no longer leaks the correct answers... or does it?
* `script.js` seems to be making another interesting call to another interesting place. Where is that?
* Try browsing to this interesting URL.
* What do **DOCS** and **SCHEMA** do? How might they help you find the `correct` answers?
* If you're still stuck, look at the code for an example query and try to plug that in to somewhere.

## Downloads
None.

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `APH2_FLAG` - the flag
* `APH2_PORT` - desired port to listen to, default `1337`

## Solution
1. Looking at `script.js` or at the Network tab of the Web Inspector reveals that the site fetches the test questions from a GraphQL endpoint.
2. Browsing to `/graphql` yields a GraphQL playground with a schema.
3. Entering this query gives the yields the correct answers, which can then be plugged into the test to obtain the flag.
   ```graphql
   {
       questions {
           response {
               correct
           }
       }
   }
   ```

## Author
Anthony Li
College Board logo from: pinclipart.com
