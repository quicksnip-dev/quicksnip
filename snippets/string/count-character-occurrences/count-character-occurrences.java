import java.util.List;

public static int countCharacterOccurrences(String text, List<Character> characters) {
    int count = 0;
    
    for (char character : text.toCharArray()) {
        if (characters.indexOf(character) == -1)
            continue;
                
        count++;
    }
    
    return count;
}
