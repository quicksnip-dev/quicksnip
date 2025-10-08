```js
const truncateText = (text = '', maxLength = 50) => {
  return `${text.slice(0, maxLength)}${text.length >= maxLength ? '...' : ''}`;
};

// Usage:
const title = "Hello, World! This is a Test.";
truncateText(title, 10); // Returns: 'Hello, Wor...'
```

---

```java
public static String truncate(String text, int length, String suffix) {
    if (text.length() <= length)
        return text;
    
    return text.substring(0, length).trim() + (suffix != null ? suffix : "");
}

// Usage:
System.out.println(truncate("hello world", 5, "...")); // "hello..."
```

---

```py
def truncate(s:str, length:int, suffix:bool = True) -> str :
    return (s[:length] + ("..." if suffix else "")) if len(s) > length else s

# Usage:
truncate('This is a long string', 10) # Returns: 'This is a ...'
truncate('This is a long string', 10, False) # Returns: 'This is a '
```