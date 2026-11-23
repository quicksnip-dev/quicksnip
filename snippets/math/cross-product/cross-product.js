function crossProduct(a, b) {
    if (a.length !== 3 || b.length !== 3) {
        throw new Error('Vectors must be 3-dimensional');
    }

    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
