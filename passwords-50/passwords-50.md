# Problem name (but without the above modifications)
Passwords 5.0
# Problem description
My friends keep making fun of me for using Java. 
I think it's the best language ever, but they keep telling me *real* programmers use C.
I guess I'll give it a shot.
# Flag (camp{...} format)
camp{sc4ry-c-c0de-o0o0o-ib8m}
# Point value (use pico scale, will be rebalanced later)
350
# Category
Reversing
# Hints
This is extremely similar to Passwords 4.5, just in a different language.
What is the loop actually doing?
# List of files the player should be allowed to download
Passwords50.c
# Any steps for deployment (compilation instructions, etc.)
Literally nothing, just upload the file. It doesn't even need to be ran.
# Your name!
Erez Israeli Miller
# Intended solvepath
Possible solve paths:
XORing the last character with the second to last yields the decoded second to last.
XORing the UN-DECODED second to last character with the third to last yields the decoded third to last.
Continuing this process with an iteration over the string in reverse will yield the flag.

