#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    long check = 0;
    char input[64];

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    puts("Okay, so just using `gets()` was a bad idea.");
    puts("But this time, I added a check! Now I'll know when someone just sends \"A\"s, and I won't let them in!");
    puts("I'm sure nobody will ever be able to crack this now!");
    gets(input);

    if (check == 0x506d3463) {
        puts("Haha, literally unreachable. Fools.");
        system("/bin/sh");
    } else {
        printf("See? The check is only 0x%08lx. You'll never get in!\n", check);
    }
}
