const rateLimit = (func, limit, timeWindow) => {
  let queue = [];
  setInterval(() => {
    if (queue.length) {
      const next = queue.shift();
      func(...next.args);
    }
  }, timeWindow);
  return (...args) => {
    if (queue.length < limit) {
      queue.push({ args });
    }
  };
};
