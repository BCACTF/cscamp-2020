import java.util.Scanner;

public class Passwords10 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Hello everyone! Welcome to Erez's password manager version 1.0!");
		System.out.println("I'll tell you my secrets only if you can tell me the super-duper-ultra-secret password.");
		System.out.println("What is it?");

		String password = scan.nextLine();

		if (password.equals("camp{pl4intext-p455w0rds-4re-d4ng3r0us-p4dbf8cg7t9hlrn}")) // This is AOK, because nobody reads source code anymore!
			System.out.println("Here's the secret: I knew you'd break in here, so I've hidden my true secrets under more passwords!");
		else
			System.out.println("Sorry, that's not my real password! My secrets are safe with me ;)");
	}
}
