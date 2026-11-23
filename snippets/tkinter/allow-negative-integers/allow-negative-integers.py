from tkinter import Tk, Entry


def allow_negative_integers(value):
    return (
        value in ("", "-") or value.startswith("-") and value[1:].isdigit()
        if value
        else True
    )
