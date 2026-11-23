public static Map<Character, Integer> characterFrequency(String text, boolean countSpaces, boolean caseSensitive) {
    Map<Character, Integer> frequencyMap = new HashMap<>();

    for (char character : text.toCharArray()) {
        if (character == ' ' && !countSpaces)
            continue;

        if (!caseSensitive)
            character = Character.toLowerCase(character);

        frequencyMap.put(character, frequencyMap.getOrDefault(character, 0) + 1);
    }

    return frequencyMap;
}
