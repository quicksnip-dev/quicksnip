function convertToUnixSeconds(input) {
  if (typeof input === 'string') {
    if (!input.trim()) {
      throw new Error('Date string cannot be empty or whitespace');
    }
  } else if (!input) {
    throw new Error('Input is required');
  }

  let date;

  if (typeof input === 'string') {
    date = new Date(input);
  } else if (input instanceof Date) {
    date = input;
  } else {
    throw new Error('Input must be a valid date string or Date object');
  }

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  return Math.floor(date.getTime() / 1000);
}
