# Hidden file
You have a secret file?  Don't want anyone to see it?  Easy!  Just hide it!

## Flag
```
camp{w3L1_DoN3_pHR35hm4n}
```

## Points
300

## Category
Forensics

## Hints
* Who said folders and archives were the only things that could be used to store files?
* What's a fast, easy to use tool for analyzing, reverse engineering, and extracting firmware images?

## Downloads
this-is-the-flag.jpg

## Solution
1. . Use [*binwalk*](https://github.com/ReFirmLabs/binwalk/) or a similar program to extract the embeded JPEG image, originally named `this-is-not-the-flag.jpg`.  After *binwalk* extraction, it may be named differently.  
```shell
$ binwalk --dd='.*' this-is-the-flag.jpg
```
2. Open this image to find the flag.

## Author
David Ionita
