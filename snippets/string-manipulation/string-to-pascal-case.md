```js
function toPascalCase(str) {
  return str.replace(/\b\w/g, (s) => s.toUpperCase()).replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
}

// Usage:
toPascalCase('hello world test'); // Returns: 'HelloWorldTest'
```

---

```java
public static String stringToPascalCase(String text) {
    String[] words = text.split("\\s+");
    StringBuilder pascalCase = new StringBuilder();

    for (String word : words) {
        pascalCase.append(word.substring(0, 1).toUpperCase());
        pascalCase.append(word.substring(1).toLowerCase());
    }

    return pascalCase.toString();
}

// Usage:
System.out.println(stringToPascalCase("hello world")); // "HelloWorld"
```