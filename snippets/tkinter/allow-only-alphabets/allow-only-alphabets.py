from tkinter import Tk, Entry


def allow_only_alphabets(value):
    return value.isalpha() or value == ""
