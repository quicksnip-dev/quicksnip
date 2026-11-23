public static String removePunctuation(String text) {
    return text.replaceAll("[,!.?;:]", "");
}
