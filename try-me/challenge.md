# Try me!
What starts with a lowercase letter, ends with 2021, and has four uppercase letters in between?

## Flag
```
camp{w3L1_DoN3_pHR35hm4n}
```

## Points
350

## Category
Forensics

## Hints
* Jack the Ripper's brother was known for liking cats, specifically hashcats.
* Who said folders and archives were the only things that could be used to store files?

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
3. Use the password gained from the above step to extract `this-is-the-flag.jpg`.
4. Use [*binwalk*](https://github.com/ReFirmLabs/binwalk/) or a similar program to extract the embeded JPEG image, originally named `this-is-not-the-flag.jpg`.  After *binwalk* extraction, it may be named differently.  
```shell
$ binwalk --dd='.*' this-is-the-flag.jpg
```
5. Open this image to find the flag.

## Author
David Ionita
