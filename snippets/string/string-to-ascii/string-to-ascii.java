import java.util.ArrayList;
import java.util.List;

public static List<Integer> stringToAscii(String text) {
    List<Integer> asciiCodes = new ArrayList<>();

    for (char character : text.toCharArray()) {
        asciiCodes.add((int) character);
    }

    return asciiCodes;
}
