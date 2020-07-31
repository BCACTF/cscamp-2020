# Problem name (but without the above modifications)
Passwords 4.5
# Problem description
What if instead of XORing each character with a number, I did something else? Something more... Connected...
# Flag (camp{...} format)
camp{e4ch-w1th-th3-n3x7-4jx3}
# Point value (use pico scale, will be rebalanced later)
300
# Category
Reversing
# Hints
Try to solve Passwords 3.5 and 4.0 before this one, as you'll use techniques from both.
This time, the problem doesn't encode each character separately; the whole message is combined and hidden together.
# List of files the player should be allowed to download
Passwords45.java
# Any steps for deployment (compilation instructions, etc.)
Literally nothing, just upload the file. It doesn't even need to be ran.
# Your name!
Erez Israeli Miller
# Intended solvepath
As always, write the code in reverse. 
XORing the last character with the second to last yields the decoded second to last.
XORing the DECODED second to last character with the third to last yields the decoded third to last.
Continuing this process with an iteration over the string in reverse will yield the flag.
