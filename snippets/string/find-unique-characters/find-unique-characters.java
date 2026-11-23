public static Set<Character> findUniqueCharacters(String text, boolean countSpaces, boolean caseSensitive) {
    Set<Character> uniqueCharacters = new TreeSet<>();
    
    for (char character : text.toCharArray()) {
        if (character == ' ' && !countSpaces)
            continue;
        if (!caseSensitive)
            character = Character.toLowerCase(character);
        uniqueCharacters.add(character);
    }
    
    return uniqueCharacters;
}
