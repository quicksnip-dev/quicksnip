import os

def get_file_extension(filepath):
    return os.path.splitext(filepath)[1]
