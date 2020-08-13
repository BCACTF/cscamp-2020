# ourbcabus
[*soviet anthem starts playing*](https://www.youtube.com/watch?v=U06jlgpMtQs)
Can you leak `flag.txt`?

## Flag
```
camp{l0c4l_f1l3_1nclus10n_15_1337_gFSWV2QgvV3XvgGa}
```

## Points
200

## Category
Webex

## Hints
* The URL for each bus appears to be referencing a file. What happens if you change that?

## Downloads
None.

## Deployment
Deploy the contents of `server/` with an up-to-date version of Node.js. Pass in the following environment variables:
* `OBB_FLAG` - the flag
* `OBB_PORT` - desired port to listen to

## Solution
The problem description and hints strongly hint at a Local File Inclusion (LFI) vulnerability, so click on any bus, then replace the URL's query with `?file=flag.txt`.

A succinct `curl` solution is as follows:
```
curl http://problem-host/bus?file=flag.txt
```

## Author
Anthony Li
