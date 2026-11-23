from tkinter import Tk, Entry
import re


def custom_regular_expression(action, value, pattern):
    if action == "1":
        return re.fullmatch(pattern, value) is not None
    return True
