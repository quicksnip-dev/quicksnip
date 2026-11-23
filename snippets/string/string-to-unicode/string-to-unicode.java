public static String stringToUnicode(String text) {
    StringBuilder unicodeText = new StringBuilder();

    for (char character : text.toCharArray()) {
        unicodeText.append(String.format("\\u%04x", (int) character));
    }

    return unicodeText.toString();
}
