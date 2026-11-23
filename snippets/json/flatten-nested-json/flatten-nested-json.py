def flatten_json(nested_json, prefix=''):
    flat_dict = {}
    for key, value in nested_json.items():
        if isinstance(value, dict):
            flat_dict.update(flatten_json(value, prefix + key + '.'))
        else:
            flat_dict[prefix + key] = value
    return flat_dict
