#include <stdio.h>

int asm2(int a, int b)
{
    return 2 * b - a + 0x1337;
}

void main()
{
    printf("camp{0x%x}\n", asm2(0xdeadb33f, 0xbcac5138));
}
