from tkinter import Tk, Entry


def allow_alphanumeric(value):
    return value.isalnum() or value == ""
