# Problem name (but without the above modifications)
Passwords 2.5
# Problem description
So if integer arrays are too easy, maybe I should combine my integers into one big monster...
# Flag (camp{...} format)
camp{c0mb1ne-l1k3-t3rms-kb563e7u}
# Point value (use pico scale, will be rebalanced later)
250
# Category
Reversing
# Hints
How do you reverse multiplication and addition?
What is `modulo`?
# List of files the player should be allowed to download
Passwords25.java
# Any steps for deployment (compilation instructions, etc.)
Literally nothing, just upload the file. It doesn't even need to be ran.
# Your name!
Erez Israeli Miller
# Intended solvepath
Possible solve paths:
1. Write the code in reverse using modulos (at each step, int % 128 is the character of the string) and division (divide by 128 for each step)
2. Write the code in reverse using comparisons (subtract until int is divisible by 128) and division (divide by 128 for each step)
3. Manually compute the remainders of the division operations then convert the remainders into ASCII characters
