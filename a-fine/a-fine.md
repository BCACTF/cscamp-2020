# Problem name (but without the above modifications)
A fine linear approximation
# Problem description
So, I've been getting into this crypto fad recently, but I have a problem: my computer's too dang slow to do my calculations.
Heck, even calculating 17sin(x) + 5cos(x) takes *forever*.
Luckily, I'm at BCA. 
By using the second fundamental theorem of engineering, I can get a linear approximation for my function at `x=0` that works (probably) anywhere!
All I need to do is normalize the flag to my alphabet, encode each character, and send it back to a string. Shouldn't be that hard!
# Flag (camp{...} format)
camp{y0u-l1k3-appr0xim8ns-d0nt-y0u?-4bru}
# Point value (use pico scale, will be rebalanced later)
350
# Category
Crypto
# Hints
What's an affine cipher?
What's a linear approximation?
What does the `%` operator do in Java?
The code converts each character into an integer mod 41, then encodes it using the cipher, and turns the integers back to characters.
# List of files the player should be allowed to download
AffineGenerator.java
# Any steps for deployment (compilation instructions, etc.)
Nothing!
# Your name!
Erez Israeli Miller
# Intended solvepath
Looking up "linear approximation calculator" and using the first result yields the approximation `17x+5`. 
Once this approximation is found, the procedure is the same as any other affine cipher.
`17x+5` is one-to-one mod 41, so to reverse the cipher you need to find the inverse function.
Solving `y=17x+5` mod 41 gives `x=29(y+36)`, and plugging each character in using this decoder will solve it.
Basically no code has to be written; the user can just change the "approximate" function to `return 29*(x+36)` and input the output as `flag`.

