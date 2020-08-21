# Problem name (but without the above modifications)
Primes Galore!
# Problem description
I seriously considered making the public key a full megabyte for this problem, but that's seriously too much.
Guess I'll save that idea for BCACTF!
Anyways, it's RSA, but instead of a 1024-bit key it's REALLY BIG. Good luck!
# Flag (camp{...} format)
camp{crt-tv-gang-b4ck}
# Point value (use pico scale, will be rebalanced later)
400
# Category
Crypto
# Hints
What is RSA?
What makes RSA hard?
What is CRT in cryptography?
# List of files the player should be allowed to download
encode.py
ciphertext.txt
# Any steps for deployment (compilation instructions, etc.)
Nothing!
# Your name!
Erez Israeli Miller
# Intended solvepath
Because the primes are so small, `n` can be easily factored using an online calculator. 
From there, `phi` and `d` can be calculated like in `GaloreGenerator.java`, and that can be used to decode the ciphertext as in `decode.py`.
