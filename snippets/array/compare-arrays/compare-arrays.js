const compareArrays = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  return a.every((v, i) => 
    Array.isArray(v) && Array.isArray(b[i]) ? compareArrays(v, b[i]) :
    typeof v === "object" && typeof b[i] === "object" ? compareObjects(v, b[i]) :
    v === b[i]
  );
};

const compareObjects = (a, b) => {
  if (typeof a !== "object" || typeof b !== "object" || Object.keys(a).length !== Object.keys(b).length) return false;
  return Object.keys(a).every(k => 
    Array.isArray(a[k]) && Array.isArray(b[k]) ? compareArrays(a[k], b[k]) :
    typeof a[k] === "object" && typeof b[k] === "object" ? compareObjects(a[k], b[k]) :
    a[k] === b[k]
  );
};
