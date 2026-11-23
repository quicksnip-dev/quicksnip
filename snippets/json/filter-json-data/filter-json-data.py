import json

def filter_json_data(filepath, condition):
    with open(filepath, 'r') as file:
        data = json.load(file)

    # Filter data based on the provided condition
    filtered_data = [item for item in data if condition(item)]

    return filtered_data
