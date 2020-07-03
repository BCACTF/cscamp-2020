import java.io.FileWriter;
import java.io.IOException;
import java.util.regex.Pattern;

// This file was used to generate the INITIAL word search. Afterwards, flags were manually added going right, down, and down-right diagonally.
// This file should NOT BE INCLUDED in the problem.

public class WordSearchGen1 {
	public static Pattern printable = Pattern.compile("[a-zA-Z0-9_\\-{}?!]");
	public static void main(String[] args) throws IOException {
		FileWriter w = new FileWriter("ws1.txt");
		w.write("");
		for (int i = 0; i < 10000; i++) {
			for (int j = 0; j < 10000; j++) {
				String r;
				do {
					r = "" + (char) (int) (Math.random() * 98 + 30);
				} while (!printable.matcher(r).matches());
				w.append(r);
				if (j < 9000 && Math.random() < .0001) {
					w.append("camp{");
					j += 5;
				}
			}
			w.append("\n");
			if (i % 100 == 0)
				System.out.println(i);
		}
		w.close();
	}
}
