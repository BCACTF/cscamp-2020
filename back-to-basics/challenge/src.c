#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main()
{
    int check = 12345;
    int *check_location = &check;
    char input[12];

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    puts("I've finally moved away from `gets()`, which means that my code is now perfect!");
    puts("You can try to attack all you want, but you'll never get in! HA!");
    printf("The check is at 0x%x, but you can't overwrite it, because I removed `gets()`!\n", check_location);
    puts("You can try to hack me, but you can't.");

    scanf("%10s", &input);
    printf(input);
    puts("\nYou see? Foolproof.");

    if (check != 12345) {
        puts("No `gets()` means this shell is inaccessible.");
        execve("/bin/sh", NULL, NULL);
    }
}
