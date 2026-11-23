int factorial(int x) {
  int y = 1;

  for (int i = 2; i <= x; i++)
    y *= i;

  return y;
}
