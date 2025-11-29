function factors(inputnum) {
  if (inputnum < 1) {
    throw new Error("Not valid");
  }
  let result = [];
  for (let i = 1; i <= inputnum; i++) {
    if (inputnum % i === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(factors(6));
console.log(factors(4));
