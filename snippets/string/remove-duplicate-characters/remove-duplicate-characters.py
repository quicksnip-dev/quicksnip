def remove_duplicate_chars(s):
    seen = set()
    return ''.join(char for char in s if not (char in seen or seen.add(char)))
