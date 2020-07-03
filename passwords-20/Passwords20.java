import java.util.Arrays;
import java.util.Scanner;

public class Passwords20 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Hello everyone! Welcome to Erez's password manager version 2.0!");
		System.out.println("Apparently plaintext passwords are bad, so I switched to integer arrays!");
		System.out.println("What's my password?");

		String password = scan.nextLine();
		int[] passwordArray = new int[27];
		for (int i = 0; i < password.length(); i++)
			passwordArray[i] = password.charAt(i);
		int[] realArray = {99, 97, 109, 112, 123, 119, 104, 52, 116, 115, 45, 52, 110, 45, 97, 114, 114, 97, 121, 63, 63, 45, 107, 98, 101, 117, 125};

		if (Arrays.equals(passwordArray, realArray)) // Nobody will be able to read that annoyingly long int array!
			System.out.println("Here's the secret: Integer arrays are really just strings in disguise!");
		else
			System.out.println("Sorry, that's not my real password! My secrets are safe with me ;)");
	}
}
