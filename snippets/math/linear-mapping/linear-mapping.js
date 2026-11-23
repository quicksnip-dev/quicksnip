function linearMapping(value, minIn, maxIn, minOut, maxOut) {
    return (value - minIn) * (maxOut - minOut)/(maxIn - minIn) + minOut
}
