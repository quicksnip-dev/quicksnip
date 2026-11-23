from datetime import datetime

def date_difference_in_millis(date1, date2):
    delta = date2 - date1
    return delta.total_seconds() * 1000
