// function calculateVowelConsatnts(inputsting) {
//   console.log(inputsting);
//   inputsting = inputsting.toLowerCase();
//   const vowels = "aeiou";
//   const consonants = "bcdfghjklmnpqrstvwxyz";
//   let vowelcount = 0;
//   let consonantscount = 0;
//   for (let i = 0; i < inputsting.length; i++) {
//     if (vowels.includes(inputsting[i])) {
//       vowelcount++;
//     } else if (consonants.includes(inputsting[i])) {
//       consonantscount++;
//     }
//   }
//   return { vowelcount, consonantscount };
// }
// console.log(calculateVowelConsatnts("Pranjal"));
// console.log(calculateVowelConsatnts("Hello World"));

function CountVowelsConsants(str) {
  str=str.toLowerCase();
  let vowels = "aeiou";
  let vowelCount = 0;
  let consonantsCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char >= "a" && char <= "z") {
      consonantsCount++;
    }
  }
  return { vowelCount, consonantsCount };
}
console.log(CountVowelsConsants("Pranjal"));
console.log(CountVowelsConsants("Pranjal899"));
