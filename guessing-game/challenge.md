# Name
Guessing Game

## Description
Step right up!
I'm running a guessing game.
It's pretty hard, so I'm offering a valuable shell as the top prize.
Will today be your lucky day?
`nc [url] [port]`

## Flag
camp{g0od_gUe55_0r_Ju5t_5ki11z?}

## Points
250

## Category
Binary Exploitation

## Hints
* I'm just printing back what you tell me, what could go wrong with that?
* What is a "printf format string"? What happens when you send one?
* You can only type in 11 characters, but you want a value that's more than 5 places away. Is there a way to have `printf` print out any arbitrary value?

## Compilation
* `gcc src.c -o guessing-game`

## Files
* `src.c`
* `guessing-game`

## Name
Edward Feng

## Solvepath
The code prints back the user input with a `printf(input)`, which allows for a format string vulnerability.
We can start typing in `%s` and `%s%s` and so on, but `scanf` will only take in 11 characters.
This limits us to `%s%s%s%s%s`.

Luckily, POSIX extends printf format strings to include a `parameter` field.
For example, `%1$s` will print the first parameter.
This isn't that helpful, as it's equivalent to `%s`, but we can use different numbers.
`%2$s` prints the second parameter, and `%3$s` prints out the third.
We can try every parameter until we get something that looks like our random number.
This ended up being `%6$s` (may vary).
