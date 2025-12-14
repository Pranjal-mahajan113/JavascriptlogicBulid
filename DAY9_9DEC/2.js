// let numbers = [1, 2, 3, 4];
// let result = numbers.map(n => n * 2).filter(n => n > 4);
// console.log(result);

// let person = {
//   name: "Aman",
//   greet: function() {
//     console.log(this.name);
//   }
// };

// let greetFunc = person.greet;
// greetFunc();

let p = new Promise((resolve, reject) => {
  reject("Error!");
});

p.then(res => console.log("Resolved", res))
 .catch(err => console.log("Rejected", err));
