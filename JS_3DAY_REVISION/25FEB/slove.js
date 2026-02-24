//25 FEB 🚀🚀🚀🚀🚀

let a = "Hello wolrd";
console.log(a);

// ===================================
let b = 10;
let c = 20;
let d = b + c;
console.log(d);
// ===========================================================
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(40, 80));
console.log(sum(5, 3));
// ================================================================
function evenodd(num3) {
  if (num3 % 2 === 0) {
    console.log(`${num3} is even number`);
  } else {
    console.log(`${num3} is odd number`);
  }
}
evenodd(9);
evenodd(4);
//====================================================
function maxnum(input) {
  let max = input[0]; // assume first is max
  for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
    }
  }
  console.log("Maximum number is:",max)
}
maxnum([0, 7, 2, 9, 19]);
