const dataWithPrefix = (data, fallback = '-', prefix = '', postfix = '') => {
  return data ? `${prefix}${data}${postfix}` : fallback;
};
