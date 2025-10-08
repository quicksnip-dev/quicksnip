```js
function toParamCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

// Usage:
toParamCase('Hello World Test'); // Returns: 'hello-world-test'
```

---

```java
public static String stringToParamCase(String text) {
    return text.toLowerCase().replaceAll("\\s+", "-");
}

// Usage:
System.out.println(stringToParamCase("Hello World 123")); // "hello-world-123"
```