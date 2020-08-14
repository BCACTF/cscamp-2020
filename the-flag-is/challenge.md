# Name
The Flag Is

## Description
Do *you* want a flag?
Well, I have one right in this PDF!
Here, it's&mdash;wait, where did it go?
I'm sure I typed it in!

## Flag
camp{d0n7_4g3t_4b0u7_1nCr3Men74l_uPd473s}

## Points
250

## Category
Forensics

## Hints
* Well, I typed in the flag, and *then* I added "The flag is...". Do you think my editor overwrote the flag?
* What happens when you try to open a PDF in a text editor instead of a PDF viewer?
* There's a bunch of gibberish. I wonder how I can decode that...

## Files
* `the-flag.pdf`

## Name
Edward Feng

## Solvepath
Open the PDF in a text editor.
There are two interesting strings of text, on line 12 and 31.
Above each of these interesting strings is the string `/Filter /ASCII85Decode`.

Here's what you get when you place both strings in an ASCII85 decoder:
* Line 12: `BT /F1 16 Tf 100 700 Td (camp{d0n7_4g3t_4b0u7_1nCr3Men74l_uPd473s}) Tj ESû`
* Line 31: `BT /F1 16 Tf 100 700 Td (The flag is...) Tj ET`

(Alternatively, open the PDF in a reader that doesn't support incremental updates. Such as the Github web interface.)

This problem takes advantage of "incremental updates".
PDFs are constructed with "objects".
Both ASCII85 streams are part of an object.
For example:
```
5 0 obj << /Length 89 /Filter /ASCII85Decode >>
stream
6<#'\7PQ#?2BYt2+>GQ(+?(u.+B2ko-t?\&E-l+LDDtoZB/=X:1h&.]2d\:W6ZOtWASsF`CgV<]A2H5$F+#J[<,*OE;u~>
endstream
endobj
```
The general gist of incremental updates is that you can replace existing objects by appending replacement objects after the last `%%EOF`.
(This is useful if, say, you are recompiling a LaTeX file multiple times with minimal changes).
The second ASCII85 stream does exactly this; it redefines the `5 0` object.
This effectively hides the flag from view, replacing it with the text `The flag is...`.

Here's a [SANS diary](https://isc.sans.edu/diary/Phishing+PDF+With+Incremental+Updates./25904) with more details, if you want to learn more.
