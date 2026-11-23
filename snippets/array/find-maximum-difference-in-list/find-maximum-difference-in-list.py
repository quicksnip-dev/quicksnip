def max_difference(lst):
    if not lst or len(lst) < 2:
        return 0
    return max(lst) - min(lst)
