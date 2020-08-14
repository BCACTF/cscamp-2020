# Name
Assembly 2

## Description
It's starting to get exciting!
What will `asm2(0xdeadb33f, 0xbcac5138)` return?

## Flag
camp{0x9aab0268}

## Points
250

## Category
Binary Exploitation

## Hints
* `add`? `sub`? Those sound simple enough... but where do they put the result?
* Remember that `4919` is in decimal, not hex.
* `eax + eax` might be a *bit* too big for 4 bytes. **But**, processors have "flags", which will store any extra information from an instruction. Here, `CF`, the carry flag is set, which `sub` will use.
* We are still using intel syntax, do don't get your lefts and rights mixed up!

## Compilation
* `gcc asm2.c -S -masm=intel`
* `gcc asm2.c -o asm2` (for testing)

## Files
* `asm2.s`

## Name
Edward Feng

## Solvepath
You should have solved `assembly-1` before solving this.
If you did, you might remember that `rdi` and `rsi` are the 1st and 2nd function arguments, respectively.
So, after line 8, `[rbp-4]` is `0xdeadb33f` and `[rbp-8]` is `0xbcac5138`.

The math:
* Line 9: `eax` is `0xbcac5138`
* Line 10: `eax += eax` (ie. eax = 2 * eax), so `eax = 0x7958a270` (with the carry flag set)
* Line 11: `eax -= [rbp-4]` (ie. `eax -= 0xdeadb33f`), so `eax = 0x9aaaef31`
* Line 12: `eax += 4919` (ie. adding `0x1337` haha), so `eax = 0x9aab0268`

So our flag is `camp{0x9aab0268}`.
