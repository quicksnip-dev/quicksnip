public static String randomString(int length, boolean useLetters, boolean useNumbers, boolean useSpecialCharacters) {
    String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    String numbers = "0123456789";
    String specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    
    String allowedCharacters = "";
    
    if (useLetters)
        allowedCharacters += characters;

    if (useNumbers)
        allowedCharacters += numbers;

    if (useSpecialCharacters)
        allowedCharacters += specialCharacters;

    SecureRandom random = new SecureRandom();
    StringBuilder result = new StringBuilder(length);

    for (int i = 0; i < length; i++) {
        int index = random.nextInt(allowedCharacters.length());
        result.append(allowedCharacters.charAt(index));
    }

    return result.toString();
}
