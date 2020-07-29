#include <stdio.h>
#include <unistd.h>

void destination()
{
    puts("And, we've reached our destination; now get out of the car!");
    execve("/bin/sh", NULL, NULL);
}

int main(void)
{
    char destination[12];

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    puts("Hey kids, it's a pretty nice day today!");
    puts("We're going to be going on a roadtrip!");
    puts("Here's a map, now where do you want to go?");

    gets(destination);
    printf("Alright everyone, we're heading to %s!\n", destination);
}
