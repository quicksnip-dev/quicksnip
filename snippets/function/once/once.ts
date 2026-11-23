/** Returns a function that runs `fn` only on the first call and returns that same result afterwards. */
export function once<A extends unknown[], R>(fn: (...args: A) => R): (...args: A) => R {
  let called = false;
  let result: R;
  return (...args: A) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
