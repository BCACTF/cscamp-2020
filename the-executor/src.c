#include <stdio.h>

int main()
{
    static const int flag[] = {99, 97, 109, 112, 123, 69, 120, 51, 99, 117, 55, 105, 78, 103, 95, 98, 49, 110, 52, 114, 105, 51, 53, 95, 108, 49, 107, 51, 95, 52, 95, 112, 82, 48, 125};
    int i;

    puts("Welcome to the CS Camp CTF!");
    puts("Let's start off binex easy: simply executing a program.");
    printf("Here's your flag: ");

    for (i = 0; i < 35; i++) {
        printf("%c", flag[i]);
    }

    printf("\n");
}
