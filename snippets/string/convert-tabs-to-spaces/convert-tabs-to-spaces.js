function tabsToSpaces(str, spacesPerTab = 4) {
  return str.replace(/\t/g, ' '.repeat(spacesPerTab));
}
