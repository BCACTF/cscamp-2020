# Problem name (but without the above modifications)
Word Search 1
# Problem description
One file: ws1.txt [LINK THIS]
One regex: `camp\{[a-zA-Z0-9]{5}-[a-zA-Z0-9!?]{4}_[a-zA-Z0-9]{7}\}`
Can you find the flag?
# Flag (camp{...} format)
camp{f1r5t-s0ln_3xcex01}
# Point value (use pico scale, will be rebalanced later)
100
# Category
Forensics
# Hints
What is a regex?
How do you search using regex?
What is a word search?
# List of files the player should be allowed to download
ws1.txt
# Any steps for deployment (compilation instructions, etc.)
Literally nothing, just upload the file. It doesn't even need to be ran.
# Your name!
Erez Israeli Miller
# Intended solvepath
Use the `search with regex` feature that basically exists in any text editor to find the only instance of the provided regex in the file. 
The flag is in plaintext.
