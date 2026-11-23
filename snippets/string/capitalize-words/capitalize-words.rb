def capitalize_words(str)
  str.split.map(&:capitalize).join(' ')
end
