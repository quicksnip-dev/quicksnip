public static bool IsGuid(string str) {
  return Guid.TryParse(str, out _);
}
