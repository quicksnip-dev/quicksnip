const uniqueByKey = (key, arr) =>
  arr.filter((obj, index, self) => index === self.findIndex((t) => t?.[key] === obj?.[key]));
