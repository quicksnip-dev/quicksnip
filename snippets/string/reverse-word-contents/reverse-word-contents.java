public static String reverseWords(String text) {
    String[] words = text.split("\\s+"); 
    StringBuilder reversedText = new StringBuilder();

    for (String word : words) {
        StringBuilder reversedWord = new StringBuilder(word).reverse();
        reversedText.append(reversedWord).append(" ");
    }

    return reversedText.toString().trim();
}
