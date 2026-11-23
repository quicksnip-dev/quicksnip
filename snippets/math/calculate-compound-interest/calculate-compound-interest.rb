def compound_interest(principal, rate, time, n = 1)
    principal * (1 + rate / n) ** (n * time)
end
