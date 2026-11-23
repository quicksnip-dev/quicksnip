public static String findLongestWord(String text) {
    String[] words = text.split("\\s+");
    String longestWord = words[0];
    
    for (String word : words) {
        if (word.length() <= longestWord.length())
            continue;
            
        longestWord = word;
    }

    return longestWord;
}
