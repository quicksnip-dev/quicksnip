import java.util.regex.Pattern;

public static String snakeToCamel(String snakeCase) {
    return Pattern.compile("(_)([a-z])")
        .matcher(snakeCase)
        .replaceAll(match -> match.group(2).toUpperCase());
}
