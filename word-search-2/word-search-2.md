# Problem name (but without the above modifications)
Word Search 2
# Problem description
Same file: ws1.txt [LINK THIS]
Same regex: `camp\{[a-zA-Z0-9]{5}-[a-zA-Z0-9!?]{4}_[a-zA-Z0-9]{7}\}`
Can you find the *second* flag?
# Flag (camp{...} format)
camp{s3cnd-sol!_56i3wv2}
# Point value (use pico scale, will be rebalanced later)
200
# Category
Forensics
# Hints
What is a word search?
# List of files the player should be allowed to download
ws1.txt
# Any steps for deployment (compilation instructions, etc.)
Literally nothing, just upload the file. It doesn't even need to be ran.
# Your name!
Erez Israeli Miller
# Intended solvepath
Rotate the file 90 degrees counterclockwise to turn the downward-facing flag into a rightward-facing flag.
Then, use the `search with regex` feature that basically exists in any text editor to find the only instance of the provided regex in the file. 
The flag is in plaintext.
