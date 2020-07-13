# Name
Threads of Knowledge

## Description
Just like `the-executor`, this binary file contains the flag.
Unlike `the-executor`, it won't just print it out for you; you'll need to dig deeper this time.
It's still there, you'll just need to find a way to get it out.

## Flag
camp{53cRe7s_h1dd3N_1n_7he_b1n4Ry}

## Points
100

## Category
Binary Exploitation

## Hints
* Wouldn't it be nice if there was a program that would print out all the [strings](https://linux.die.net/man/1/strings) in an executable binary for you?

## Compilation
* `gcc src.c -o threads-of-knowledge -O0`

## Files
* `threads-of-knowledge`

## Name
Edward Feng

## Solvepath
Run `strings threads-of-knowledge` in a terminal.
Bonus points for piping it through `grep camp{`.
