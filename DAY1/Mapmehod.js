// function test() {
//   return [1, 2, 3].map((num) => {
//     if (num > 1) {
//       console.log("its true");
//       return; // stops function here for num>1
//     } else {
        
//       return num * 2;
//     }
//   });
// }
// console.log(test());

// function demo() {
//   return [2, 4, 6].map(num => {
//     if (num % 2 === 0) return "Even";
//     return "Odd";
//   });
// }
// console.log(demo());

function check(num) {
  if (num > 5) return "High";
  if (num === 5) return "Equal";
  return "Low";
}
console.log(check(7), check(5), check(3));
