unsigned int reverse_bits(unsigned int n) {
    unsigned int result = 0;
    for (int i = 0; i < 32; ++i) {
        result <<= 1;        // Shift result left by 1
        result |= n & 1;     // Add the least significant bit of n to result
        n >>= 1;            // Shift n right by 1
    }
    return result;
}
