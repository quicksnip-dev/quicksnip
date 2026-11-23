def is_perfect_square(n):
    if n < 0:
        return False
    root = int(n**0.5)
    return root * root == n
