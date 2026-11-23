from datetime import datetime

def get_current_datetime_string():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')
