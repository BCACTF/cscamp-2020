# Name
Binex is... Controlled Screaming?

## Description
Okay, so maybe using `gets()` was not the best idea... I know!
I'll add a special check, so at least someone can't just scream their way into messing everything up!
Heh, people can't just blindly enter "AAAAA" now!
`nc [url] [port]`

## Flag
camp{pl34s3_u53_y0uR_1nd00r_v01c3s}

## Points
200

## Category
Binary Exploitation

## Hints
* You would think that `0x12345678` is stored as `0x12345678`, but no! Sometimes, it's stored as `0x78563412`! Look up [endianness](https://en.wikipedia.org/wiki/Endianness).

## Compilation
* `gcc src.c -o controlled-screaming -fno-stack-protector`

## Files
* `src.c`
* `controlled-screaming`

## Name
Edward Feng

## Solvepath
Read the code, and see that the check is `0x506d3463`.
This translates in ASCII to `c4mP`.

Run the program, put in a bunch of "A"s, and then just add some recognizable string after (ex. `"...AAAA123456789"`).
Then, see what value gets printed out (ex.`0x37363534`).
This means that `check` was `4567`, so replace `4567` with `c4mP`.
