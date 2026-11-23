from tkinter import Tk, Entry


def restrict_length(value, max_length):
    return len(value) <= int(max_length)
