def find_longest_word(s):
    words = s.split()
    return max(words, key=len) if words else ''
