# Name
Assembly 3

## Description
You're telling me that code doesn't have to execute?
`asm3(0xdeadb33f, 0xbcac5138)`

## Flag
camp{0x4353de02}

## Points
300

## Category
Binary Exploitation

## Hints
* `jge`? What sort of nonsense is this? That's not a word!
* What are `.L2` and `.L3` doing?

## Compilation
* `gcc asm3.c -S -masm=intel`
* `gcc asm3.c -o asm3` (for testing)

## Files
* `asm3.s`

## Name
Edward Feng

## Solvepath
* Line 4, 5, 6:
  * `[rbp-20]`: `0xdeadb33f`
  * `[rbp-24]`: `0xbcac5138`
  * `[rbp-20]`: 61453, `0xf00d`
* Lines 7-9: Comparing `[rbp-20]` with `[rbp-24]`
  * If `[rbp-20]` is *greater than* or *equal to* `[rbp-24]`, then it will jump
  * `0xdeadb33f` is greater than `0xbcac5138`, so we skip forward to `.L2`
* Line 15: `eax = [rbp-24]`, so `eax = 0xbcac5138`
* Line 16: `eax += 49363` (ie. adding `0xc0d3`), so `eax = 0xbcad120b`
* Line 17: `[rbp-4] -= eax` (ie. `0xf00d - 0xbcad120b`), so `[rbp-4] = 0x4353de02`
* Line 19: `eax = [rbp-4]`

So our final answer is `code{0x4353de02}`
