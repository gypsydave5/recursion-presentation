function increment(number) {
  return number.concat('x')
}

function decrement(number) {
  return number.slice(0, -1)
}

function isZero(number) {
  return number.length === 0;
}

function zero() {
  return [];
}

function add(firstNumber, secondNumber) {
  if (isZero(secondNumber)) return firstNumber;

  return add(increment(firstNumber),
             decrement(secondNumber));
}

function subtract(firstNumber, secondNumber) {
  if (isZero(secondNumber)) return firstNumber;

  return subtract(decrement(firstNumber),
                  decrement(secondNumber));
}

function multiply(firstNumber, secondNumber) {
  if (isZero(secondNumber)) return zero();

  return add(firstNumber,
             multiply(firstNumber,
                      decrement(secondNumber)));
}

function isLessThan(firstNumber, secondNumber) {
  if (isZero(secondNumber)) return false;
  if (isZero(firstNumber)) return true;

  return isLessThan(decrement(firstNumber),
                    decrement(secondNumber));
}

function divide(firstNumber, secondNumber) {
  if (isLessThan(firstNumber, secondNumber)) return zero();

  return increment(divide(subtract(firstNumber,
                                   secondNumber),
                          secondNumber));
}

function isGreaterThan(firstNumber, secondNumber) {
  if (isZero(firstNumber)) return zero();
  if (isZero(secondNumber)) return zero();

  return isGreaterThan(decrement(firstNumber),
                       decrement(secondNumber));
}

function equal(firstNumber, secondNumber) {
  if (isLessThan(firstNumber, secondNumber)) return false;
  if (isGreaterThan(firstNumber, secondNumber)) return false;

  return true;
}

function exponent(firstNumber, secondNumber) {
  if (isZero(secondNumber)) return increment(zero());

  return multiply(exponent(firstNumber,
                           decrement(secondNumber)),
                  firstNumber);
}

console.log(exponent(['x', 'x', 'x'], ['x', 'x', 'x']))