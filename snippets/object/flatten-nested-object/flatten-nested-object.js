function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flattenObject(obj[key], fullPath));
    } else {
      acc[fullPath] = obj[key];
    }
    return acc;
  }, {});
}
