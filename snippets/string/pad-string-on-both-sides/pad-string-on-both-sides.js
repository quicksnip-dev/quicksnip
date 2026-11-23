function padString(str, length, char = ' ') {
  const totalPad = length - str.length;
  const padStart = Math.floor(totalPad / 2);
  const padEnd = totalPad - padStart;
  return char.repeat(padStart) + str + char.repeat(padEnd);
}
