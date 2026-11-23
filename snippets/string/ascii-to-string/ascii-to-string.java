import java.util.List;

public static String asciiToString(List<Integer> asciiCodes) {
    StringBuilder text = new StringBuilder();

    for (int asciiCode : asciiCodes) {
        text.append((char) asciiCode);
    }

    return text.toString();
}
