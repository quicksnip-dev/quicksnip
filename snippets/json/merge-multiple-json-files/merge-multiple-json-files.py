import json

def merge_json_files(filepaths, output_filepath):
    merged_data = []

    # Read each JSON file and merge their data
    for filepath in filepaths:
        with open(filepath, 'r') as file:
            data = json.load(file)
            merged_data.extend(data)

    # Write the merged data into a new file
    with open(output_filepath, 'w') as file:
        json.dump(merged_data, file, indent=4)
