public static String unicodeToString(String unicode) {
    StringBuilder string = new StringBuilder();
    String[] hex = unicode.split("\\\\u");

    for (int symbol = 1; symbol < hex.length; symbol++) {
        int data = Integer.parseInt(hex[symbol], 16);
        string.append((char) data);
    }

    return string.toString();
}
