import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.TimeUnit;

// using the system default time zone
public static String formatDateTimeAmerican(long time, TimeUnit timeUnit) {
    return formatDateTimeAmerican(time, timeUnit, ZoneId.systemDefault());
}

public static String formatDateTimeAmerican(long time, TimeUnit timeUnit, ZoneId timeZone) {
    return DateTimeFormatter.ofPattern("MM/dd/yyyy hh:mm:ss a")
            .withZone(
                timeZone != null ? timeZone : ZoneId.systemDefault()
            )
            .format(Instant.ofEpochSecond(
                timeUnit.toSeconds(time)
            ));
}
