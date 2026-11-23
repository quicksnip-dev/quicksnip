from tkinter import Tk, Entry


def allow_signed_decimals(action, value):
    if action == "1":
        try:
            if value in ("", "-"):
                return True
            float(value)
            return True
        except ValueError:
            return False
    return True
