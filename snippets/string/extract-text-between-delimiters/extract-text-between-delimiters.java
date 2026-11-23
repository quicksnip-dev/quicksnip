public static String extractBetweenDelimiters(String text, String start, String end) {
    int startIndex = text.indexOf(start);
    int endIndex = text.indexOf(end, startIndex + start.length());
    
    if (startIndex == -1 || endIndex == -1)
        return "";
    
    return text.substring(startIndex + start.length(), endIndex);
}
