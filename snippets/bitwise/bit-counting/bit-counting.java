public static int countBits(int number) {
    int bits = 0;
        
    while (number > 0) {
        bits += number & 1;
        number >>= 1;
    }

    return bits;
}
