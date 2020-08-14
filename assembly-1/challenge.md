# Name
Assmebly 1

## Description
As you might have figured out by now, `binex` problems are about executable binaries.
(Some) code is written in C, which is (fairly) human readable.
But to get the computer to understand this, we need to compile to assembly, then assemble the program into a binary.
This set of problems will take a look at the "assembly" step.

Here's some simple (64-bit) assembly.
If I say `asm1(0xdeadb33f, 0xbcac5138)`, what will the function return?

**Notes on flag format:**
The flag format for all `assembly` problems will be the return value, in hex, all lowercase, wrapped by `camp{0x...}`.
For example, if a function returns the hex value `0xa1b2c3d4` (or the decimal value `2712847316`), the flag will be `camp{0xa1b2c3d4}`.

## Flag
camp{0xbcac5138}

## Points
200

## Category
Binary Exploitation

## Hints
* There are many "dialects" to assembly: this challenge uses "intel syntax".
* You can ignore `DWORD PTR`, it just means the thing it's referring to is 4 bytes long.
* "Function", eh? What do functions look like in assembly?
* How are arguments passed to functions in (64-bit) assembly?
* How are values returned from functions in (64-bit) assembly?

## Compilation
* `gcc asm1.c -S -masm=intel`
* `gcc asm1.c -o asm1` (for testing)

## Files
* `asm1.s`

## Name
Edward Feng

## Solvepath
Let's start from the end and work our way back.
By convention, `eax` is the return register in x86_64, so we want to see what happens to that.
On line 8, we move `[rbp-8]` into `eax`.
We don't need to know it for this problem, but `[rbp-8]` refers to an address on the stack.

In any case, we can continue working our way back.
On lines 8 and 9, we move data from `edi` and `esi` into `[rbp-4]` and `[rbp-8]` respectively.
We only care about `[rbp-8]`, so we can ignore `edi` and focus on `esi`.

For reference, `esi` is the lower half of `rsi`:
```
┌───────────────────────────────────────────────┐
│ RSI                                           │
├───────────────────────┬───────────────────────┤
│                       │ ESI                   │
├───────────────────────┴───────────┬───────────┤
│                                   │ SI        │
├───────────────────────────────────┴─────┬─────┤
│                                         │ SIL │
└─────────────────────────────────────────┴─────┘
```

If we search the web for "x86_64 argument registers", we can find that the register `rsi` refers to the second parameter.
In this case, our second parameter is `0xbcac5138`, so, our flag is `camp{0xbcac5138}`.

---

*Alternatively*, you can run the file.
Take the following code:
```c
#include <stdio.h>

extern int asm1(int a, int b);

int main()
{
    printf("%x\n", asm1(0xdeadb33f, 0xbcac5138));
}
```
Compile it with `gcc solve.c asm1.s -o solve`, and run the resulting program.
You could probably also do this with the other two assembly problems. ¯\\\_(ツ)\_/¯
