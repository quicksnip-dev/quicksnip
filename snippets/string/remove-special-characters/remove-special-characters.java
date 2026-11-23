public static String removeSpecialCharacters(String text) {
    return text.replaceAll("[^a-zA-Z0-9]", "");
}
