# Name
Open Documents

## Description
Documents deserve to be free!
In fact, they mostly are nowadays...
There's a reason MS Office uses the extension `.docx`.

## Flag
camp{L1nu5_s41d_7h4t_1t_w45_0p3n}

## Points
150

## Category
Forensics

## Hints
* Microsoft Word used to use a `.doc` extension, but now they use `.docx`. What happened?
* How does the `.docx` format store data?

## Compilation
* `cd open-documents && zip -r open-documents.docx . && cd .. && mv open-documents/*.docx .`

## Files
* `open-documents.docx`

## Name
Edward Feng

## Solvepath
Change the file extension to `.zip`.
Extract the file.
Inside the folder called `secrets`, there is a file called `flag.txt`.
