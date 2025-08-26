```js
function toSnakeCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2')
            .replace(/\s+/g, '_')
            .toLowerCase();
}

// Usage:
toSnakeCase('Hello World Test'); // Returns: 'hello_world_test'
```

---

```java
public static String stringToSnakeCase(String text) {
    return text.toLowerCase().replaceAll("\\s+", "_");
}

// Usage:
System.out.println(stringToSnakeCase("Hello World 123")); // "hello_world_123"
```