#include <stdio.h>

int main()
{
    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    puts("This is my homemade CTF program.");
    puts("See? Here's a flag: 🚩");
    puts("Goodbye!");
}
