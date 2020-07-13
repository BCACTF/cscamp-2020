# Name
Capitalist Shell Shills

## Description
Hey you! Yeah, you!
I just set up a shop, where anyone can buy my shells!
And when I say anyone, I mean that you can too!
Well okay, maybe not *everyone* can afford to buy my shells, but that's just how life works, alright?
`nc [url] [port]`

## Flag
camp{5w1ndl3d_7h3_5h3ll_5h1ll5}

## Points
200

## Category
Binary Exploitation

## Hints
* Computers use binary (base 2) for storing numbers, because they only have `0` and `1`. But, how do they store negative numbers if there's no `-`?

## Compilation
* `gcc src.c -o shell-shills`

## Files
* `src.c`
* `shell-shills`

## Name
Edward Feng

## Solvepath
Try buying one shell.
That doesn't work.
10? No.
100? No.
Keep on adding zeros, and eventually, you'll get to something that overflows.
