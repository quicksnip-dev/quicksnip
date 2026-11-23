const partition = (arr, callback) =>
  arr.reduce(
    ([pass, fail], elem) => (callback(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]]),
    [[], []]
  );
