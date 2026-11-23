def sieve_of_sundaram(limit)
    n = (limit - 1) / 2
    marked = Array.new(n + 1, false)

    (1..n).each do |i|
        j = i
        while (i + j + 2 * i * j) <= n
            marked[i + j + 2 * i * j] = true
            j += 1
        end
    end

    primes = [2]
    (1..n).each do |i|
        primes << (2 * i + 1) unless marked[i]
    end

    primes
end
