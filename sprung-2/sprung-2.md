# Problem name (but without the above modifications)
It's about time.
# Problem description
After the HEEEEEEPA filter was bypassed, the school fell into disarray.
And so did the fabric of space, I think, or something. So what if we use time instead?
What's the opposite of random?
E.
# Flag (camp{...} format)
camp{EE-E-EEEEEEE-yt-link-S6CtlvmXA-E}
# Point value (use pico scale, will be rebalanced later)
300
# Category
Reversing
# Hints
You should probably solve `sprung-1` first.
How does the `time()` command work? What is UNIX time?
# List of files the player should be allowed to download
sprung-2.c
# Any steps for deployment (compilation instructions, etc.)
TODO
# Your name!
Erez Israeli Miller
# Intended solvepath
This can be solved much like sprung-1. 
Using something like `time + 10` to seed the PRNG in the guessing code allows for a 10-second window to connect to the server.
