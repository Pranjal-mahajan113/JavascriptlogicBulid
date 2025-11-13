function calculatesumofdigit(inputnum) {
  if (inputnum < 1) {
    throw new Error("Input number must be positive number");
  }
  const inputnumberSting = inputnum.toString();
  //   console.log(inputnum,inputnumberSting);
  const splitted = inputnumberSting.split("");
  console.log(splitted);
  let sum = 0;

  splitted.forEach((num) => {
    // console.log(parseInt(num));
    sum += parseInt(num);
  });
  return sum;
}

console.log(calculatesumofdigit(123));

/// short version

function calculatesumofdigit2(inputnum2) {
  return inputnum2
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(calculatesumofdigit2(12));
