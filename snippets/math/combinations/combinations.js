function combinations(n, r) {
    if (n < 0 || r < 0 || n < r) {
        throw new Error('Invalid input: n and r must be non-negative and n must be greater than or equal to r.');
    }

    function factorial(x) {
        if (x === 0 || x === 1) return 1;
        let result = 1;
        for (let i = 2; i <= x; i++) {
            result *= i;
        }
        return result;
    }

    const numerator = factorial(n);
    const denominator = factorial(r) * factorial(n - r);
    return numerator / denominator;
}
