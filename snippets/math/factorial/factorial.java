import java.math.BigInteger;

public static BigInteger factorial(int number) {
    BigInteger result = BigInteger.ONE;

    for (int currentNumber = 1; currentNumber <= number; currentNumber++) {
        result = result.multiply(BigInteger.valueOf(currentNumber));
    }

    return result;
}
