function maskSensitiveInfo(str, visibleCount = 4, maskChar = '*') {
  return str.slice(0, visibleCount) + maskChar.repeat(Math.max(0, str.length - visibleCount));
}
