public static int checksum(int number) {
    number = Math.abs(number);
    int sum = 0;

    while (number != 0) {
        sum += number % 10;
        number /= 10;
    }

    return sum;
}
