.intel_syntax noprefix
.global asm2

asm2:
	push rbp
	mov rbp, rsp
	mov DWORD PTR [rbp-4], edi
	mov DWORD PTR [rbp-8], esi
	mov eax, DWORD PTR [rbp-8]
	add eax, eax
	sub eax, DWORD PTR [rbp-4]
	add eax, 4919
	pop rbp
	ret
