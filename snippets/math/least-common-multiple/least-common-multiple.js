function lcm(a, b) {
    function gcd(x, y) {
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return Math.abs(x);
    }
    return Math.abs(a * b) / gcd(a, b);
}
