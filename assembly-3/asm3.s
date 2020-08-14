.intel_syntax noprefix
.global asm3

asm3:
	push rbp
	mov rbp, rsp
	mov DWORD PTR [rbp-20], edi
	mov DWORD PTR [rbp-24], esi
	mov DWORD PTR [rbp-4], 61453
	mov eax, DWORD PTR [rbp-20]
	cmp eax, DWORD PTR [rbp-24]
	jge .L2
	mov eax, DWORD PTR [rbp-20]
	add eax, 50430
	add DWORD PTR [rbp-4], eax
	jmp .L3
.L2:
	mov eax, DWORD PTR [rbp-24]
	add eax, 49363
	sub DWORD PTR [rbp-4], eax
.L3:
	mov eax, DWORD PTR [rbp-4]
	pop rbp
	ret
