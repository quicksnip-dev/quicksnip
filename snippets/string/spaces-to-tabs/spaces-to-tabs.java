public static String convertSpacesToTab(String text, int spacesPerTab) {
    return text.replaceAll(" ".repeat(spacesPerTab), "\t");
}
