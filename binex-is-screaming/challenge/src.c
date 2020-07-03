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
    puts("Understandable, have a nice day.");

    if (check != 0) {
        // Secret shell, users shouldn't be able to access this.
        puts("Activating secret shell...");
        system("/bin/sh");
    }
}
