# Name
Beachside Resort

## Description
You know what?
It was a mistake asking you where you wanted to go.
We're just going to head to the beach.
Hey, cheer up!
I got us a room at that fancy new hotel, and it's pretty close to that restaurant you always liked.
`nc [url] [port]`

## Flag
camp{fl4g_5t0r3d_1n_7h3_h0t3l_s4f3}

## Points
400

## Category
Binary Exploitation

## Hints
* How are arguments passed into functions? (Keep in mind this is x86_64, not x86).
* If you've done `road-trip`, you've already made a "ROP" (return oriented programming) exploit. That's a keyword that could help you search for resources.
* As previously recommended in `road-trip`, you should take a look at tools to help you. (I will again recommend looking at `pwntools`, maybe now with the second hint in mind).

## Compilation
* `gcc src.c -o beachside-resort -fno-stack-protector -no-pie`

## Files
* `src.c`
* `beachside-resort`

## Name
Edward Feng

## Solvepath
This is a more involved ROP exploit, but luckily, `pwntools` has got us covered.
Take a look at `solve.py` for an example exploit using `pwntool`'s ROP features.
