const curry = (func) => {
  const curried = (...args) => {
    if (args.length >= func.length) {
      return func(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
  return curried;
};
