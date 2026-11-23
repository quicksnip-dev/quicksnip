from calendar import monthrange
from datetime import datetime

def get_days_in_month(year, month):
    try:
        return monthrange(year, month)[1]
    except ValueError as e:
        raise ValueError(f"Invalid month or year: {e}")
