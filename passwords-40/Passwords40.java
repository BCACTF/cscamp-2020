import java.util.Scanner;

public class Passwords40 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Hello everyone! Welcome to Erez's password manager version 4.0!");
		System.out.println("Apparently bit shifting isn't the only binary operation I can use to make things look weird. XORs sound cool...");
		System.out.println("What's my password?");

		String password = scan.nextLine();

		if (xorWord(password).equals("¶´¸¥®¼¡¦ø¹ä¾°øå§ø· âø\u0090\u008D\u0081\u0087\u0090\u0098\u0090øá¿\u00ADæ¨")) // Unicode?
			System.out.println("Here's the secret: If you run a XOR twice, it wil reverse itself!");
		else
			System.out.println("Sorry, that's not my real password! My secrets are safe with me ;)");
	}

	public static String xorWord(String password) {
		String modified = "";
		for (int i = 0; i < password.length(); i++)
			modified += (char) (password.charAt(i) ^ 213);
		return modified;
	}

}
