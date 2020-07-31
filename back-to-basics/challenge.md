# Name
Back to Basics

## Description
We're going back to the basics!
I have a value for you, and I'm bettin' you can't overwrite it.
This time, I'm finally not using `gets()`, so you can't use that.
I saw `printf()` could leak data, but it doesn't matter if you can leak my check as long as you can't overwrite it!
`nc [url] [port]`

## Flag
camp{AAAAAAAA_0h_w4i7_w3_5t0pp3d_5cr34m1ng}

## Points
350

## Category
Binary Exploitation

## Hints
* `printf()` can only print stuff, right?
* Take a look at the `%n` flag.

## Compilation
* `gcc src.c -o back-to-basics`

## Files
* `src.c`
* `back-to-basics`

## Name
Edward Feng

## Solvepath
Just to be nice, the location of the `check` variable is printed out for us.
We can use a `%n` to overwrite the check, we just need to figure out what parameter number to use.

We can use the same strategy as `guessing-game` to get the parameter number.
Start with `%1$x`, then`$2$x`, and so on.
When testing, `%8$x` printed out the same value as the location of `check`.

Now, we can overwrite `check`.
The code checks if `check` is not `12345`, so we can set it to, for example, 1.
So our final exploit is `a%8$n`.
