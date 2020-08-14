#include <stdio.h>

int asm1(int a, int b)
{
    return b;
}

void main()
{
    printf("camp{0x%x}\n", asm1(0xdeadb33f, 0xbcac5138));
}
