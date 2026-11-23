def partition_list(lst, size):
    for i in range(0, len(lst), size):
        yield lst[i:i + size]
