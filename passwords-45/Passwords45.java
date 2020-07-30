import java.util.Scanner;

public class Passwords45 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Hello everyone! Welcome to Erez's password manager version 4.5!");
		System.out.println("Encrypting each character on its own makes it too easy to crack, so I mashed them all together!");
		System.out.println("What's my password?");

		String password = scan.nextLine();

		if (xorWord(password).equals("\u0002\f\u001D\u000B\u001EQW\u000BEZFE\u001CEY\u001C[\u001EC]KO\u001A\u0019^\u0012KN}")) // Curly brace at the end? I'm almost there already!
			System.out.println("Here's the secret: I am abandoning Java once and for all!");
		else
			System.out.println("Sorry, that's not my real password! My secrets are safe with me ;)");
	}

	public static String xorWord(String password) {
		// I'm sticking a period at the beginning of the input for... reasons.
		password = "." + password;
		char[] passwordArray = password.toCharArray();
		for (int i = 0; i < password.length() - 1; i++)
			passwordArray[i] = (char) (passwordArray[i] ^ passwordArray[i + 1]);
		String modified = new String(passwordArray);
		return modified.substring(1); // Wow, all that code would be so much nicer in C...
	}

}
