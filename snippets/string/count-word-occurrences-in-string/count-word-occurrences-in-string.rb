def count_word_occurrences(text)
    words = text.downcase.scan(/\w+/)
    occurrences = Hash.new(0)
    words.each { |word| occurrences[word] += 1 }
    occurrences
end
