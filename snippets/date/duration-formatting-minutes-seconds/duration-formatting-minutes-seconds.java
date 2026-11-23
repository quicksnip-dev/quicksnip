import java.util.concurrent.TimeUnit;

public static String formatDurationToMinutesAndSeconds(int time, TimeUnit timeUnit) {
    long totalSeconds = timeUnit.toSeconds(time);

    if (totalSeconds < 0)
        throw new IllegalArgumentException("Duration must be a non-negative value.");

    // These variables can be directly used in the return statement,
    // but are kept here as separate variables for better readability.
    long minutes = totalSeconds / 60;
    long seconds = totalSeconds % 60;

    return String.format("%02d:%02d", minutes, seconds);
}
