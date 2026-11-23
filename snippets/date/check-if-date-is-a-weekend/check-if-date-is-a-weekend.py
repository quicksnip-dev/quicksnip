from datetime import datetime

def is_weekend(date):
    try:
        return date.weekday() >= 5  # Saturday = 5, Sunday = 6
    except AttributeError:
        raise TypeError("Input must be a datetime object")
