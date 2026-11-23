from tkinter import Tk, Entry


def allow_lowercase(value):
    return value.islower() or value == ""
