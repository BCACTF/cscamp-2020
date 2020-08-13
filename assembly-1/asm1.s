.intel_syntax noprefix
.global asm1

asm1:
	push rbp
	mov rbp, rsp
	mov DWORD PTR [rbp-4], edi
	mov DWORD PTR [rbp-8], esi
	mov eax, DWORD PTR [rbp-8]
	pop rbp
	ret
