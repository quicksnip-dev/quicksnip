```js
const reverseString = (str) => str.split('').reverse().join('');

// Usage:
reverseString('hello'); // Returns: 'olleh'
```

---

```cpp
#include <string>
#include <algorithm>

std::string reverseString(const std::string& input) {
    std::string reversed = input;
    std::reverse(reversed.begin(), reversed.end());
    return reversed;
}

// Usage:
reverseString("quicksnip"); // Returns: "pinskciuq"
```

---

```py
def reverse_string(s:str) -> str:
    return s[::-1]

# Usage:
reverse_string('hello') # Returns: 'olleh'
```