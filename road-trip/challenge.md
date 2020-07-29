# Name
Road Trip

## Description
Hey, we're going on a road trip!
I was thinking about heading to the beach, but was there anywhere you wanted to go?
`nc [url] [port]`

## Flag
camp{r04d_7r1p_c4nC3l1ed_b3c4u5e_c0v1d}

## Points
300

## Category
Binary Exploitation

## Hints
* When we call a function, how does the computer know where to return? It stores the "return pointer" on the stack, and if you've seen the `screaming` problems, you'll realize we can overwrite this.
* First, we'll want to figure out how to overwrite the return pointer. It might be useful to use `gdb`, which will let you see all the values in memory while a program runs. (You might also want to look at plugins like `pwndbg`).
* Now that we know how to overwrite what we want, what do we overwrite it with? There's a very interesting function in the source code, but where is that located in the ELF binary?
* You have a destination now, but how do you actually input the values you need? Like, you can't type that. Maybe you need to start writing programs to exploit things... take a look at `pwntools`.

## Compilation
* `gcc src.c -o road-trip -fno-stack-protector -no-pie`

## Files
* `src.c`
* `road-trip`

## Name
Edward Feng

## Solvepath
First, we need to figure out how much padding we need to overwrite the return pointer.
Use `pwntool`'s `cyclic()` to overflow the buffer.
When we attach to the running process with GDB, we see the return pointer is `"faaagaaa"`.
Use `pwntool`'s `cyclic_find()` to give us a padding of 20 bytes.

Now, we need to find the address of the `destination()` function.
One easy way is to just use `objdump`, with `objdump -d road-trip | grep destination`.
On my computer, I got `0x4006c7`.

From here, it's a simple pwntools script to send the padding and pointer.

Reference code is available in the file `solve.py`.
