def count_vowels(s):
    vowels = 'aeiou'
    return len([char for char in s.lower() if char in vowels])
