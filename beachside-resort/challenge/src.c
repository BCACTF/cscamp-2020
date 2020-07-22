#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void hotel(unsigned int room_key)
{
    char shell[] = "/bin/sh";

    if (room_key != 0x07e1c0d3) {
        puts("Sorry, that's not the right key!");
        exit(0);
    }

    puts("I'm tired, I'll just head to sleep now.");
    puts("Feel free to make yourself at home, though.");
    execve(shell, NULL, NULL);
}

int main(void)
{
    char destination[12];

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    puts("Alright, that was a fun day at the beach, can't wait for more fun tomorrow!");
    puts("Now, if only I could remember our hotel room key...");

    gets(destination);
}
