public static int lcm(int number1, int number2) {
    int gcdNumber1 = number1;
    int gcdNumber2 = number2;
    
    while (gcdNumber2 != 0) {
        int remainder = gcdNumber2;
        gcdNumber2 = gcdNumber1 % gcdNumber2;
        gcdNumber1 = remainder;
    }
    
    return (number1 / gcdNumber1) * number2;
}
