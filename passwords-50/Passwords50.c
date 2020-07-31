#include <stdio.h>
#include <stdlib.h>

char* xorWord(char*);

int main() {
    // This makes an array with size 32 to store the user input.
    char password[32];
    // C doesn't have Java's nice format string features, so I've just put all the hex values in manually...
    char check[] = "\x64\x5\x68\x18\x63\x10\x73\x47\x35\x4c\x61\x2\x2f\x4c\x7c\x18\x7d\x50\x3f\xf\x60\x50\x3f\x12\x7b\x19\x21\x4c\x31";
    printf("Hello everyone! Welcome to Erez's password manager version 5.0!\n");
    printf("Encrypting each character on its own makes it too easy to crack, so I mashed them all together!\n");
    printf("What's my password?\n");

    // This just stores the user input in the `password` array, _starting at index 1_.
    gets(password + 1);

    if (strcmp(xorWord(password), check) == 0) // So similar, yet so different...
        printf("Here's the secret: C is just like Java, but only *slightly* scarier!\n");
    else
        printf("Sorry, that's not my real password! My secrets are safe with me ;)\n");
}

char* xorWord(char* password) {
    // Good luck!
    int i;
    password[0] = 7;
    for (i = 1; password[i] != '\0'; i++)
        password[i] = password[i] ^ password[i - 1]; // A tiny change like this shouldn't make it THAT much harder...
    return password + 1;
}