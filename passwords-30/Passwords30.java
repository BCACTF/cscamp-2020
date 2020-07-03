import java.util.Scanner;

public class Passwords30 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Hello everyone! Welcome to Erez's password manager version 3.0!");
		System.out.println("I just learned that bit shifting preserves information, but does it really?!?!?!?!?!");
		System.out.println("What's my password?");

		String password = scan.nextLine();
		String passwordShifted = "";
		for (int i = 0; i < password.length(); i++)
			passwordShifted += (char) (password.charAt(i) << 1);

		if (passwordShifted.equals("ÆÂÚàöÄbèZæÐhÌnbÜÎZÌhÜÆòZêàrhú")) // I didn't know I spoke Icelandic!
			System.out.println("Here's the secret: I don't actually use this many exclamation points in real life!" +
					"ALSO, I'm saving the really-super-duper-ultra big secret for my final password manager, and there are more to come!");
		else
			System.out.println("Sorry, that's not my real password! My secrets are safe with me ;)");
	}
}
