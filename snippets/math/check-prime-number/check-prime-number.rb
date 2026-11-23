def is_prime?(n)
    return false if n <= 1
    (2..Math.sqrt(n)).each do |i|
        return false if n % i == 0
    end
    true
end
