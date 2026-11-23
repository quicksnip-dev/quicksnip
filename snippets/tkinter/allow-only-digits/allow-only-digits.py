from tkinter import Tk, Entry


def allow_only_digits(value):
    return value.isdigit() or value == ""
