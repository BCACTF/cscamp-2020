#include <stdio.h>

int asm2(int a, int b)
{
    int c = 0xf00d;

    if (a < b)
        c += 0xc4fe + a;
    else
        c -= 0xc0d3 + b;

    return c;
}

void main()
{
    printf("camp{0x%x}\n", asm2(0xdeadb33f, 0xbcac5138));
}
