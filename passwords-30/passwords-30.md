# Problem name (but without the above modifications)
Passwords 3.0
# Problem description
I've heard bit shifting preserves information, so I should be able to make my password unreadable!
# Flag (camp{...} format)
camp{b1t-sh4f71ng-f4ncy-up94}
# Point value (use pico scale, will be rebalanced later)
150
# Category
Reversing
# Hints
What is bit shifting?
# List of files the player should be allowed to download
Passwords30.java
# Any steps for deployment (compilation instructions, etc.)
Literally nothing, just upload the file. It doesn't even need to be ran.
# Your name!
Erez Israeli Miller
# Intended solvepath
Possible solve paths:
1. Literally just write the code in reverse
2. Replace the left bit shift with a right bit shift in the `for` loop of the already-written shifting code
3. Manually bit shift each character with ASCII

