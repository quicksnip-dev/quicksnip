public static String truncate(String text, int length, String suffix) {
    if (text.length() <= length)
        return text;
    
    return text.substring(0, length).trim() + (suffix != null ? suffix : "");
}
