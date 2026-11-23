export const filterObject = (object = {}) =>
  Object.fromEntries(
    Object.entries(object)
      .filter(([key, value]) => value !== null && value !== undefined && value !== '' && (typeof value !== 'object' || Object.keys(value).length > 0))
  );
