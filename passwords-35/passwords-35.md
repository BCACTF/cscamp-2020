# Problem name (but without the above modifications)
Passwords 3.5
# Problem description
A friend told me that Java characters are actually two bytes, but what does that mean?
# Flag (camp{...} format)
camp{cmprs-evrythng-nd-mnmz-vwls-or-just-use-chinese??-3bgi}
# Point value (use pico scale, will be rebalanced later)
250
# Category
Reversing
# Hints
It may not look like it, but this problem is very similar to Passwords 2.5 and 3.0. Try solving all previous Passwords problems before this one.
# List of files the player should be allowed to download
Passwords35.java
# Any steps for deployment (compilation instructions, etc.)
Literally nothing, just upload the file. It doesn't even need to be ran.
# Your name!
Erez Israeli Miller
# Intended solvepath
The solution to this problem is almost identical to 2.5. Converting each char to an int, separating the characters as was done in 2.5, then recombining into a string will solve the problem. The difference is that here we use bit shifting instead of multiplication my a power of two, but bit shifting was covered in 3.0.

