const toScientificNotation = (num) => {
  if (isNaN(num)) {
    throw new Error('Input must be a number');
  }
  if (num === 0) {
    return '0e+0';
  }
  const exponent = Math.floor(Math.log10(Math.abs(num)));
  const mantissa = num / Math.pow(10, exponent);
  return `${mantissa.toFixed(2)}e${exponent >= 0 ? '+' : ''}${exponent}`;
};
