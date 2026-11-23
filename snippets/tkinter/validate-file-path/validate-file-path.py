from tkinter import Tk, Entry
import os


def validate_file_path(action, value):
    if action == "1":
        return value == "" or os.path.exists(os.path.expandvars(value))
    return True
