def truncate_string(str, max_length)
    return str if str.length <= max_length || max_length <= 3
    str[0, max_length - 3] + '...'
end
