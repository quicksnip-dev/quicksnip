import java.util.List;
import java.util.stream.Collectors;

public static <T> List<T> removeDuplicates(List<T> list) {
    return list.stream()
        .distinct()
        .collect(Collectors.toList());
}
