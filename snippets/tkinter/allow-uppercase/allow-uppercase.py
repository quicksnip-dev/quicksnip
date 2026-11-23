from tkinter import Tk, Entry


def allow_uppercase(value):
    return value.isupper() or value == ""
