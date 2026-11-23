from tkinter import Tk, Entry


def allow_numbers_in_range(action, value, min_value, max_value):
    if action == "1":  
        try:
            num = float(value)
            return float(min_value) <= num <= float(max_value)
        except ValueError:
            return False
    return True
