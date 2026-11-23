public static String reverseWords(String text) {
    String[] words = text.split("\\s+");
    StringBuilder reversedSentence = new StringBuilder();

    for (int currentWord = words.length - 1; currentWord >= 0; currentWord--) {
        reversedSentence.append(words[currentWord]).append(" ");
    }

    return reversedSentence.toString().trim();
}
