#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int check = 0;
    char input[64];

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    puts("Hey! How are ya?");
    gets(input);

    if (check != 0) {
        puts("Understandable, have a nice day.");
        system("/bin/sh");
    }
}
