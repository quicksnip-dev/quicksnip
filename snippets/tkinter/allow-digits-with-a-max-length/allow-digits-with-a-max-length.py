from tkinter import Tk, Entry


def allow_digits_with_max_length(action, value, max_length):
    if action == "1":
        return value == "" or (value.isdigit() and len(value) <= int(max_length))
    return True
