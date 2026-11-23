const compose = (...funcs) => (initialValue) => {
  return funcs.reduce((acc, func) => func(acc), initialValue);
};
