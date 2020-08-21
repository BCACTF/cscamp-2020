# Name
Assembly 4

## Description
Alright, you've started to understand assembly.
But, do you think you can write it?
This server will execute your machine code, but it's up to you to get a shell (and the flag).
`nc [url] [port]`

## Flag
camp{b4ck_1n_mY_d4y_w3_a55eMb1ed_0ur_b1t5_By_h4nD}

## Points
400

## Category
Binary Exploitation

## Hints
* This is a reminder that your target is the `x86-64` platform.
* You want code that will get you a shell... would that be "shellcode"?
* Why bother writing code if it's probably already been done before? Maybe someone's even uploaded some to a database?
* Machine code means that you'll have non-printable ASCII characters. How do you type those? One way is by using `pwntools`.

## Compilation
* `gcc src.c -o assembly-4 -z execstack`

## Files
* `src.c`
* `assembly-4`

## Name
Edward Feng

## Solvepath
Launching a shell is fairly common in CTFs, so it's no surprise someone's already written the code to solve this.
For example, [shell-storm](http://shell-storm.org/shellcode/) has assembly for launching a shell (among many other things).

My binex tool of choice, `pwntools`, also has something that can help us.
The function `shellcraft.sh()` will give us assembly to start up a shell.
The function `asm()` will take that assembly and assemble it into a binary, which we can then send to the program.
For more details, take a look at `solve.py`.
