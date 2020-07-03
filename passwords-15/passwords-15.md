# Problem name (but without the above modifications)
Passwords 1.5
# Problem description
I hear plaintext password storage is bad, but I have a secret weapon: `for` loops!
# Flag (camp{...} format)
camp{r3versing-d0esnt-d0-much-t00-4gf345}
# Point value (use pico scale, will be rebalanced later)
100
# Category
Reversing
# Hints
What changed between this problem and Passwords 1.0?
What does adding Strings do in Java?
Can you find any information in the variable names?
# List of files the player should be allowed to download
Passwords15.java
# Any steps for deployment (compilation instructions, etc.)
Literally nothing, just upload the file. It doesn't even need to be ran.
# Your name!
Erez Israeli Miller
# Intended solvepath
Possible solve paths:
1. Look at the flag, notice it's reversed, plug it in to an online reverser
2. Notice that the variable storing the comparison flag is called "reversed", and plug in the flag to an online reverser
3. Read the for loop, understand that it is reversing the input, and plug in the flag to an online reverser
4. Plug the comparison flag into the already-written reverse code, which will automatically create the real flag
