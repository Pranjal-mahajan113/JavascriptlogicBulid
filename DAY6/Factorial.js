function fact(inputnum) {
    
  let result = 1;
  for (let i = 1; i <= inputnum; i++) {
    result = i * result;
  }
  return result;
}

console.log(fact(4));
console.log(fact(5));
