# CS Camp CTF 2020

Put your challenge details in a file called `<challenge-name>/challenge.txt`.
The folder `<challenge-name>` should be the problem name, except with a few modifications:
* Everything should be lowercase (eg. `nUmBeRs` -> `numbers`)
* No spaces (eg. `Threads of Knowledge` -> `threads-of-knowledge`; please use dashes, ie. `-`)
* Only letters, numbers, and dashes (eg. `You Can't Touch That!` -> `you-cant-touch-that`)
* If the problem name is really long, just shorten it a bit (eg. `Binex is Literally Just Screaming` -> `binex-is-screaming`)

The file `challenge.txt` should have the following things:
* Problem name (but without the above modifications)
* Problem description
* Flag (`camp{...}` format)
* Point value (use pico scale, will be rebalanced later)
* Category
* Hints
* List of files the player should be allowed to download
* Any steps for deployment (compilation instructions, etc.)
* Your name!
* Intended solvepath

Keep any other files in the problem directory.
This includes:
* Files for the players to download
* Problem generation script
* Web service
* etc.

When you have a problem, just submit a pull request with the problem name.
Make sure to add the category and milestone.

Thanks! -ed
