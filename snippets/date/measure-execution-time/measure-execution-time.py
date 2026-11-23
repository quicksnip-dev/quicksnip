import time

def measure_time(func, *args):
    start = time.time()
    result = func(*args)
    end = time.time()
    print(f'Execution time: {end - start:.6f} seconds')
    return result
