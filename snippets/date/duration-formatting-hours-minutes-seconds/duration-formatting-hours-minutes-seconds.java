import java.util.concurrent.TimeUnit;
    
public static String formatDurationToHoursMinutesAndSeconds(int time, TimeUnit timeUnit, boolean showSeconds) {
    long totalSeconds = timeUnit.toSeconds(time);

    if (totalSeconds < 0)
        throw new IllegalArgumentException("Duration must be a non-negative value.");

    // These variables can be directly used in the return statement,
    // but are kept as separate variables here for better readability.
    long hours = totalSeconds / 3600;
    long minutes = (totalSeconds % 3600) / 60;
    long seconds = totalSeconds % 60;

    if (showSeconds) {
        return String.format("%02d:%02d:%02d", hours, minutes, seconds);
    } else {
        return String.format("%02d:%02d", hours, minutes);
    }
}
