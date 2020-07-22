# Rip into this RAR
What starts with a lowercase letter, ends with 2021, and has four uppercase letters in between?

## Flag
```
camp{password_dAVEI2021}
```

## Points
400

## Category
Forensics

## Hints
* Jack the Ripper's brother was known for liking cats, specifically hashcats.
* Why start from *nothing*, if you already have *something*? (Read the question again!)

## Downloads
secure-enclave.rar

## Solution
1. Get the RAR5 password hash of try-me!.rar using a program like **OpenWall**'s [*John the Ripper*](https://www.openwall.com/john/).
```shell
$ rar2john.exe secure-enclave.rar
```
2. Input that hash into a brute force password recovery program like [*hashcat*](https://hashcat.net/hashcat/), specifying that it is a RAR5 password hash.  To speed up this process, notice the hint in the challenge prompt and specify the type and order of characters in the password.  
```shell
$ hashcat.exe -m 13000 -a3 $rar5$16$9d39a2acb7253f595d9387c48894b303$15$3220147144545d5f30e6ef45bd653e50$8$3a05c407954d0f37 ?l?u?u?u?u2021
```
3. Open the text inside to find the flag.

## Author
David Ionita
