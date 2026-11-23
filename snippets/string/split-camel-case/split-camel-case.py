import re

def split_camel_case(s):
    return ' '.join(re.findall(r'[A-Z][a-z]*|[a-z]+', s))
