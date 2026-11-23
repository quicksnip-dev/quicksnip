public static String convertTabToSpace(String text, int spacesPerTab) {
    return text.replaceAll("\t", " ".repeat(spacesPerTab));
}
