#include <stdio.h>
#include <stdlib.h>

char* xorWord(char*);

int main() {
    char password[64];
    char check[] = "\x7a\x1b\x76\x6\x7d\x19\x28\x4c\x61\x18\x28\x5d\x70\x5\x76\x45\x68\x2f\x67\x56\x12\x40\x74\x59\x36\x44\x69\x1a\x77\x3\x6b\x5\x62\x4f\x7c\x10\x63\x6\x39\x14\x61\x3\x30\x4\x79";
    printf("Hello everyone! Welcome to Erez's password manager version 5.5!\n");
    printf("Linux! GCC! Compilation! Execution! So many fancy words!\n");
    printf("What's my password?\n");

    gets(password + 1);

    if (strcmp(xorWord(password), check) == 0) 
        printf("Here's the secret: Ghidra is an absolutely beautiful program! It turns assembly into C for easy reading!\n");
    else
        printf("Sorry, that's not my real password! My secrets are safe with me ;)\n");
}

char* xorWord(char* password) {
	// Comments should be removed by the preprocessor, so I've killed them all >:)
    int i;
    password[0] = 25;
    for (i = 1; password[i] != '\0'; i++)
        password[i] = password[i] ^ password[i - 1];
    return password + 1;
}