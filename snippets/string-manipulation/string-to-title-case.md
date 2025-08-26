```js
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}

// Usage:
toTitleCase('hello world test'); // Returns: 'Hello World Test'
```