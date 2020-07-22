import java.util.Scanner;

public class Passwords35 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Hello everyone! Welcome to Erez's password manager version 3.5!");
		System.out.println("A friend told me that Java characters are actually two bytes, but what does that mean?");
		System.out.println("What's my password?");

		String password = scan.nextLine();

		if (compress(password).equals("慣灭捻灭獲攭牶瑹湨ⵧ摮洭浮\u2D7A睶獬漭\u2D72番瑳甭敳挭楨敮敳㼿㌭杢絩")) // I love Chinese letters!
			System.out.println("Here's the secret: I used trick this to make my discord name fit in 30 characters!");
		else
			System.out.println("Sorry, that's not my real password! My secrets are safe with me ;)");
	}

	public static String compress(String password) {
		if (password.length() % 2 == 1)
			password += "\u0000";
		String compressed = "";
		for (int i = 0; i < password.length(); i += 2) { // Don't forget to read the for loop!
			compressed += (char) (password.charAt(i) + (password.charAt(i + 1) << 8));
		}
		return compressed;
	}

}
