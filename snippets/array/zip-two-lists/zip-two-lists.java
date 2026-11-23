import java.util.*; // Importing utility classes for List and Arrays
import java.util.stream.IntStream; // Importing IntStream for range and mapping
import java.util.stream.Collectors; // Importing Collectors for collecting stream results

public <A, B> List<List<Object>> zip(List<A> list1, List<B> list2) {
    // Create pairs by iterating through the indices of both lists
    return IntStream.range(0, Math.min(list1.size(), list2.size())) // Limit the range to the smaller list
            .mapToObj(i -> Arrays.asList(list1.get(i), list2.get(i))) // Pair elements from both lists at index i
            .collect(Collectors.toList()); // Collect the pairs into a List
}
