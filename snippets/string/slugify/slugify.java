public static String slugify(String text, String separator) {
    if (text == null)
        return "";

    // used to decompose accented characters to their base characters (e.g. "é" to "e")
    String normalizedString = Normalizer.normalize(text, Normalizer.Form.NFD);
    normalizedString = normalizedString.replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");

    String slug = normalizedString.trim()
            .toLowerCase()
            .replaceAll("\\s+", separator)
            .replaceAll("[^a-z0-9\\-_" + separator + "]", "")
            .replaceAll("_", separator)
            .replaceAll("-", separator)
            .replaceAll(separator + "+", separator)
            .replaceAll(separator + "$", "");

    return slug;
}
