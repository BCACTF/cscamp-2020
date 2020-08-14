# Problem name (but without the above modifications)
We've sPRuNG a leak!
# Problem description
To cope with increased infection risks, we've installed HEPA filters in our random number generators! 
They should keep out any Haphazardly Elucidative Pseudorandom Artifacts that might cause infection, or -- even worse -- allow a virus to guess our random numbers!
That would be horrible. If our filter springs a leak, we're all doomed...
# Flag (camp{...} format)
camp{bl0w-1t-4w4y-yt-link-m2s0nB2VPvs}
# Point value (use pico scale, will be rebalanced later)
250
# Category
Reversing
# Hints
I don't randomly capitalize things, because that's annoying. What might sPRuNG mean?
# List of files the player should be allowed to download
sprung-1.c
# Any steps for deployment (compilation instructions, etc.)
TODO
# Your name!
Erez Israeli Miller
# Intended solvepath
The PRNG is seeded with user input, and this can be easily exploited.
Either using an online C compiler or writing the code locally, you can find the seed (`hash`) for your input and use that to guess the next five random numbers with `rand()`.
