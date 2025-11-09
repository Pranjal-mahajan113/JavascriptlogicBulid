function reversestring(inputsting) {
  if (typeof inputsting !== "string") {
    throw new Error("Only string is allow");
  }

  let result = "";
  for (let i = inputsting.length - 1; i >= 0; i--) {
    result += inputsting[i];
  }
  return result;
}
console.log(reversestring("pranjal"));
console.log(reversestring("Software development"));
// console.log(reversestring(9999));

function reversestring2(inputsting2) {
  const splitInput = inputsting2.split("");
  const reverseArray = splitInput.reverse();
  const result = reverseArray.join("");
  return result;
}
console.log(reversestring2("pranjal"));
