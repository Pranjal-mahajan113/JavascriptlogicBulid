function checkprime(inputPrime) {
  for (let i = 2; i < inputPrime; i++) {
    console.log(inputPrime, "% ", i, " = ", inputPrime % i);
    if (inputPrime % i === 0) {
      return false;
      break;
    }
  }
  return true;
}
console.log(checkprime(5));
console.log(checkprime(9));
console.log(checkprime(4));


// function checkprime(inputPrime) {
//   for (let i = 2; i < inputPrime; i++) {
//     console.log(inputPrime, "% ", i, " = ", inputPrime % i);
//     if (inputPrime % i === 0) {
//       return false;
//       break;
//     }
//   }
//   return true;
// }
// console.log(checkprime(5));
// console.log(checkprime(9));
// console.log(checkprime(4));


function isprime2(inputnum){

    
}

