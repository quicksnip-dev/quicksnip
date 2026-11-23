def factorial(n)
    return 1 if n <= 1
    (2..n).reduce(1, :*)
end
