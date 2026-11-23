from tkinter import Tk, Entry


def allow_signed_integers(action, value):
    if action == "1":
        return (
            value in ("", "-")
            or value.isdigit()
            or (value.startswith("-") and value[1:].isdigit())
        )
    return True
