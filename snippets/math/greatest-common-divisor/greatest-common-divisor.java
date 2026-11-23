public static int gcd(int number1, int number2) {
    while (number2 != 0) {
        int remainder = number2;
        number2 = number1 % number2;
        number1 = remainder;
    }

    return number1;
}
