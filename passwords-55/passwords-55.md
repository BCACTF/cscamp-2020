# Problem name (but without the above modifications)
Passwords 5.5
# Problem description
Edward told me compilers turn my C code into... assembly?
And that humans can't really read that, or something.
He said if I compile my code, the only people who could decode it are in the NSA.
And it's not like the NSA give away their old decompiling tools for free or anything...
# Flag (camp{...} format)
camp{d1d-y0u-us3-GH1DR4-or-smthng-3lse?-ub34}
# Point value (use pico scale, will be rebalanced later)
400
# Category
Reversing
# Hints
Make sure you look through the descriptions of early `Binary Exploitation` problems for info! You'll need those tools for many reversing problems.
It would be really nice to have an old NSA decompilation program. Maybe something was declassified and put on Github?
This problem is basically just Passwords 5.0, but compiled. You'll need to decompile it for more info. 
Maybe you should try compiling Passwords 5.0 yourself? You already have the source code, so it might help you make sense of Ghidra's 5.5 output.
# List of files the player should be allowed to download
Passwords55 (The complied program! No source code!)
# Any steps for deployment (compilation instructions, etc.)
`gcc Passwords55.c -o Passwords55` -O0 -fno-stack-protector
# Your name!
Erez Israeli Miller
# Intended solvepath
Possible solve paths:
Once the file is decompiled using Ghidra, it will be clear that this is the exact same program as Passwords 5.0, and should be solved in the same way.

