import json

def read_json(filepath):
    with open(filepath, 'r') as file:
        return json.load(file)
