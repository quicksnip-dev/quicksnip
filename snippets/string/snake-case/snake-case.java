public static String stringToSnakeCase(String text) {
    return text.toLowerCase().replaceAll("\\s+", "_");
}
