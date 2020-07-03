#include <stdio.h>
#include <stdlib.h>

#define price 10000

int main()
{
    int money = 1000;
    int amount;

    printf("Welcome to America, the land of the free, where anyone can do anything!\n");
    printf("I mean, not everyone can buy my shells, but that's just how capitalism works, right?\n");
    printf("But back to business!\n");
    printf("You currently have $%d.\n", money);
    printf("And my shells sell for $%d, which I promise is not a ripoff.\n", price);
    printf("How many would you like to buy?\n");
    
    printf("> ");
    scanf("%d", &amount);

    if (amount > 0) {
        amount *= price;
        printf("That'll cost $%d.\n", amount);

        if (amount <= money) {
            printf("Here is your fancy shell! Enjoy!\n");
            system("/bin/sh");
        } else {
            printf("Sorry, but you don't have enough money.\n");
        }
    }

    printf("Goodbye!\n");
}
