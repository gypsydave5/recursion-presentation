function exponent(x, n) {
  if (n === 0) return 1;

  return exponent(x, n - 1) * x;
}