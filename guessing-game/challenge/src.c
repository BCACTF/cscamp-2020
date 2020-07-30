#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

// Generates a random number and returns it as a string.
// Attacking this is *not* the intended solvepath.
char *generate_random()
{
    int rand;
    FILE *f;
    char *out;

    f = fopen("/dev/urandom", "r");
    fread(&rand, sizeof(rand), 1, f);

    out = malloc(12);
    sprintf(out, "%d", rand);

    return out;
}

int main()
{
    char *rand;
    char input[12];

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    rand = generate_random();

    printf("Let's play a little guessing game!\n");
    printf("I'll give you a random integer.\n");
    printf("You have two tries to guess it.\n");

    scanf("%11s", &input);

    if (strcmp(input, rand) != 0) {
        printf("Sorry, ");
        printf(input);
        printf(" was incorrect. Have another try!\n");

        scanf("%11s", &input);

        if (strcmp(input, rand) != 0) {
            free(rand);
            printf("Sorry, you used both tries. Bad luck!\n");
            exit(0);
        }
    }

    free(rand);
    printf("Congrats, you won! Here's a shell as a reward.\n");
    execve("/bin/sh", NULL, NULL);
}
