import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class AffineGenerator {
	public static void main(String[] args) {
		// Create alphabet map from characters to integers according to "abc...xyz012...789-?!{}"
		Map<Character, Integer> forward = new HashMap<>();
		for (char c = 'a'; c <= 'z'; c++)
			forward.put(c, c - 'a');
		for (int n = 0; n < 10; n++)
			forward.put((char) (n + '0'), 26 + n);
		forward.put('-', 36);
		forward.put('?', 37);
		forward.put('!', 38);
		forward.put('{', 39);
		forward.put('}', 40);

		// Make sure the size of the forward map size is correct
		assert(forward.size() == 41);

		// Create backwards map from integers to characters
		Map<Integer, Character> backwards = new HashMap<>();
		for (Character c : forward.keySet())
			backwards.put(forward.get(c), c);

		String flag = // REDACTED

		// Convert flag to integer array using forward map
		int[] ciphertext = new int[flag.length()];
		for (int i = 0; i < flag.length(); i++)
			ciphertext[i] = forward.get(flag.charAt(i));

		// Encode flag
		int[] encoded = new int[ciphertext.length];
		for (int i = 0; i < ciphertext.length; i++)
			encoded[i] = approximate17sinxplus5cosx(ciphertext[i]) % 41;

		// Convert encoded text to string
		char[] mappedEncoded = new char[encoded.length];
		for (int i = 0; i < encoded.length; i++)
			mappedEncoded[i] = backwards.get(encoded[i]);

		// Convert char array to String
		String output = new String(mappedEncoded);
		// Make sure output is correct
		assert(output.equals("{feomd?rc2nlgcfooh?1sejvycp?vacd?rtcxwhr3"));

	}

	static int approximate17sinxplus5cosx(int x) {
		return // REDACTED
	}
}
