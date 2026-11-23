def snake_to_pascal(str)
    str.split('_').map.with_index { |word, index| 
        word.capitalize 
    }.join
end
