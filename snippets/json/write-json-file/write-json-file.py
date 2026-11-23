import json

def write_json(filepath, data):
    with open(filepath, 'w') as file:
        json.dump(data, file, indent=4)
