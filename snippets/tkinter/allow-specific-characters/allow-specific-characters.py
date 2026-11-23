from tkinter import Tk, Entry


def allow_specific_characters(value, allowed_chars):
    return all(char in allowed_chars for char in value)
