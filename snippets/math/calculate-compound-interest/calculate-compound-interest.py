def compound_interest(principal, rate, time, n=1):
    return principal * (1 + rate / n) ** (n * time)
