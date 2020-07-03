import java.math.BigInteger;
import java.util.Arrays;
import java.util.Scanner;

public class Passwords25 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Hello everyone! Welcome to Erez's password manager version 2.5!");
		System.out.println("Integer arrays gave nice separation, but I don't like that! Good luck!");
		System.out.println("What's my password?");

		String password = scan.nextLine();
		BigInteger passwordNumber = new BigInteger("0");
		BigInteger oneTwentyEight = new BigInteger("128");
		for (int i = 0; i < password.length(); i++) {
			passwordNumber = passwordNumber.multiply(oneTwentyEight);
			passwordNumber = passwordNumber.add(new BigInteger(String.valueOf((int) password.charAt(i))));
		}

		if (passwordNumber.toString().equals("2689646116876163946640402887659044424500645447353215155134785769044733")) // Wow, that's really big!
			System.out.println("Here's the secret: Big integers are just integer arrays in disguise!");
		else
			System.out.println("Sorry, that's not my real password! My secrets are safe with me ;)");
	}
}
