public static String normalizeWhitespace(String text) {
    return text.replaceAll(" {2,}", " ");
}
