def snake_to_camel(str)
    str.split('_').map.with_index { |word, index| 
        index == 0 ? word : word.capitalize 
    }.join
end
