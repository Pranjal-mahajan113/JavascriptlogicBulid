function factorial(inputnumber) {
  if (inputnumber < 0) {
    throw new Error("Only positive num");
  }

  // let result = 1;

  for (let i = 1; i <= inputnumber; i++) {
    // result = result * i;
      let result = 1;

    result *= i;
  }
  return result;
}
console.log(factorial(4));
console.log(factorial(3));
// console.log(factorial(0));
console.log(factorial(3));
// console.log(factorial(-1));
