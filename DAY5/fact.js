function factorial(input) {
  let result = 1;

  for (let i = 1; i <= input; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(4));
