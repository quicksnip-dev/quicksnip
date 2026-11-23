public static boolean isPalindrome(String text) {
    String cleanText = text.toLowerCase().replaceAll("\\s+", "");
        
    return new StringBuilder(cleanText)
            .reverse()
            .toString()
            .equals(cleanText);
}
