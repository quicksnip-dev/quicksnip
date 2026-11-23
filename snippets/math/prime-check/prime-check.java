public static boolean isPrime(int number) {
    if (number <= 1) 
        return false;

    if (number <= 3) 
        return true;

    boolean prime = true;
    for (int divisor = 3; divisor < number; divisor++) {
        if (number % divisor != 0)
            continue;

        prime = false;
        break;
    }

    return prime;
}
