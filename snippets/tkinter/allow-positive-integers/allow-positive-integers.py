from tkinter import Tk, Entry


def allow_positive_integers(value):
    return value.isdigit() and (value == "" or int(value) > 0)
