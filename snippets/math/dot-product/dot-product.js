function dotProduct(a, b) {
    if (a.length !== b.length) {
        throw new Error('Vectors must be of the same length');
    }

    return a.reduce((sum, value, index) => sum + value * b[index], 0);
}
