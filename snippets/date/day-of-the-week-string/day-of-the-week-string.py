from datetime import datetime

def get_day_of_week(date):
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    try:
        return days[date.weekday()]
    except IndexError:
        raise ValueError("Invalid date")
