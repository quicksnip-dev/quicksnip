#include <math.h>

// Function to calculate compound interest
double compound_interest(double principal, double rate, double time, int n) {
    return principal * pow(1 + rate / n, n * time);
}
