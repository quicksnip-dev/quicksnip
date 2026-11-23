public static String stringToPascalCase(String text) {
    String[] words = text.split("\\s+");
    StringBuilder pascalCase = new StringBuilder();

    for (String word : words) {
        pascalCase.append(word.substring(0, 1).toUpperCase());
        pascalCase.append(word.substring(1).toLowerCase());
    }

    return pascalCase.toString();
}
