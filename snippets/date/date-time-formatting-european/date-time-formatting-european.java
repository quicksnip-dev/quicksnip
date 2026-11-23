import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.TimeUnit;

// using the system default time zone
public static String formatDateTimeEuropean(long time, TimeUnit timeUnit) {
    return formatDateTimeEuropean(time, timeUnit, ZoneId.systemDefault());
}

public static String formatDateTimeEuropean(long time, TimeUnit timeUnit, ZoneId timeZone) {
    return DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss")
            .withZone(
                timeZone != null ? timeZone : ZoneId.systemDefault()
            )
            .format(Instant.ofEpochSecond(
                    timeUnit.toSeconds(time)
            ));
}
