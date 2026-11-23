function modInverse(a, m) {
    function extendedGCD(a, b) {
        if (b === 0) {
            return { gcd: a, x: 1, y: 0 };
        }
        const { gcd, x: x1, y: y1 } = extendedGCD(b, a % b);
        const x = y1;
        const y = x1 - Math.floor(a / b) * y1;
        return { gcd, x, y };
    }

    const { gcd, x } = extendedGCD(a, m);

    if (gcd !== 1) {
        return null;
    }

    return (x % m + m) % m;
}
