#include <stdbool.h> // Include the standard boolean library

bool is_power_of_two(int n) {
    return n > 0 && (n & (n - 1)) == 0; // Bitwise check for power of two
}
