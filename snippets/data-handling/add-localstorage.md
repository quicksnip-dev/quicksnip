```js
const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Usage:
addToLocalStorage('user', { name: 'John', age: 30 });
```