import java.util.Scanner;

public class Passwords15 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Hello everyone! Welcome to Erez's password manager version 1.5!");
		System.out.println("Apparently you could just read the password in my last program, but I won't let that stop me, because the universe isn't parity-symmetric!");
		System.out.println("What's my password?");

		String password = scan.nextLine();
		String reversed = "";
		for (int i = 0; i < password.length(); i++)
			reversed = password.charAt(i) + reversed;

		if (reversed.equals("}543fg4-00t-hcum-0d-tnse0d-gnisrev3r{pmac")) // I could have used StringBuilder, but that'd be too easy!
			System.out.println("Here's the secret: Parity symmetry is just physicist-speak for mirroring!");
		else
			System.out.println("Sorry, that's not my real password! My secrets are safe with me ;)");
	}
}
