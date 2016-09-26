function factorial(n) {
  var result = 1;

  for (var i = n; i > 0; i--) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));
