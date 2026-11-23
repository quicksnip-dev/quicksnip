const times = (func, n) => {
  Array.from(Array(n)).forEach(() => {
    func();
  });
};
