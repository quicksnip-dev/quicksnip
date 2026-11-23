def camel_to_snake(str)
    str.gsub(/([A-Z])/, '_\1').sub(/^_/, '').downcase
end
