public static String partialMask(String text, int maskLengthStart, int maskLengthEnd, char mask) 
    if (text == null)
        return null;
    
    StringBuilder maskedText = new StringBuilder();
    maskedText.append(text, 0, maskLengthStart);
    
    for (int currentChar = maskLengthStart; currentChar < text.length(); currentChar++) {
        maskedText.append(mask);
    }
    maskedText.append(text, text.length() - maskLengthEnd, text.length());
    return maskedText.toString();
}
