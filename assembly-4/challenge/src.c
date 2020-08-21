#include <stdio.h>

int main(void)
{
    char input[64];

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    puts("So you've tried your hand at reading assembly.");
    puts("Now, it's time to write some.");
    puts("Give me some assembly, and I'll execute it.");
    puts("The goal, like all the other binex problems, is to get to a shell.");
    puts("You ready?");

    fgets(input, 63, stdin);
    ((void (*)()) input)();
}
