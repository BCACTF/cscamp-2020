import java.io.FileWriter;
import java.io.IOException;
import java.math.BigInteger;
import java.util.*;

import static java.math.BigInteger.ONE;

public class GaloreGenerator {
	public static void main(String[] args) throws IOException {
		FileWriter pubkey = new FileWriter("publickey.txt");
		pubkey.write("");
		FileWriter prikey = new FileWriter("privatekey.txt");
		prikey.write("");

		List<BigInteger> primes = new ArrayList<>();
		Random rand = new Random();
		for (int i = 0; i < 50; i++)
			primes.add(BigInteger.probablePrime(60, rand));
		prikey.append(primes.toString()).append("\n");

//		System.out.println(primes);
		BigInteger n = ONE;
		BigInteger phi = ONE;
		for (BigInteger b : primes) {
			n = n.multiply(b);
			phi = phi.multiply(b.subtract(ONE));
		}

		BigInteger e = new BigInteger("65537");
//		System.out.println(n);
		pubkey.append("n = ").append(n.toString()).append("\n");
		pubkey.append("e = ").append(e.toString()).append("\n");

		BigInteger d = e.modInverse(phi);
		prikey.append("d = ").append(d.toString()).append("\n");


		pubkey.close();
		prikey.close();
	}
}
