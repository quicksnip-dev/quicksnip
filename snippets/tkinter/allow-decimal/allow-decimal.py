from tkinter import Tk, Entry


def allow_decimal(action, value):
    if action == "1":
        if value == "":
            return True
        try:
            float(value)
            return True
        except ValueError:
            return False
    return True
