from datetime import datetime, timedelta

def generate_date_range(start_date, end_date):
    if start_date > end_date:
        raise ValueError("start_date must be before end_date")

    current_date = start_date
    date_list = []
    while current_date <= end_date:
        date_list.append(current_date)
        current_date += timedelta(days=1)

    return date_list
