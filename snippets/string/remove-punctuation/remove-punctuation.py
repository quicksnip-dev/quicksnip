import string

def remove_punctuation(s):
    return s.translate(str.maketrans('', '', string.punctuation))
